import React, { useState } from 'react';
import axios from "axios";
import type { ComponentType } from "react";
import type { InfoData, Infoview, InfoViewField, InfoViewGroup } from '../InfoView.types.js';
import { normalizeRowSafe, replacePlaceholders } from '../utils.js';
import ConfirmModal from './ConfirmationModal.js';
import LogiksForm from './Form.js';



export default function GridView({ tabObj, methods, tabName, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson }:
    {
        tabObj: InfoViewGroup,
        methods: Record<string, Function>,
        tabName: string,
        sqlOpsUrls: Record<string, any>,
        refid: string;
        Reports?: ComponentType<any>;
        toast?: Record<string, Function>;
        handleAction?: (action: Record<string, any>, data: InfoData) => void;
        infoViewJson: {
            script?: string;
            fields: Record<string, Omit<InfoViewField, "name">>;
            infoview?: Infoview;
            source?: Record<string, any>,
            endPoints?: Record<string, any>;
            buttons?: Record<string, any>;
            actions?: Record<string, any>;
            module_refid?: string | undefined
        };
    }) {
    // Pagination state

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<Record<string, any> | null>(null);
    const [refreshCounter, setRefreshCounter] = React.useState(0);

    // Get the array of data


    const [editData, setEditData] = React.useState<Record<string, any> | null>(null);
    const source = tabObj?.config;

    const config = tabObj?.config;
    const formType =
        config?.["popup.form"]
            ? "popup.form"
            : config?.["form"]
                ? "form"
                : "form";
    const hasFormConfig = config?.[formType] && Object.keys(config?.[formType]).length > 0;

    const handleEdit = (row: Record<string, any>) => {
        let data = normalizeRowSafe(row.data)

        setEditData(data)

    };

    const handleFormClose = (data: Record<string, any> | null) => {
        setEditData(data);
        setRefreshCounter(c => c + 1);
    };

    const handleDelete = (row: Record<string, any>) => {
        let data = normalizeRowSafe(row.data)
        setDeleteTarget(data);
        setConfirmOpen(true);
    };



    const confirmDelete = async () => {
   

        if (!deleteTarget?.id) return;

        if (!sqlOpsUrls) {
            window.alert("Delete configuration missing.")

            return;
        }

        try {
            let config = tabObj?.config;
            const formType =
                config?.["popup.form"]
                    ? "popup.form"
                    : config?.["form"]
                        ? "form"
                        : "form";



            const form = config?.[formType];

            if (!form?.source) throw new Error("Form source missing");

            let skipquery = false;
            let dbopsId;

            if (form?.source?.dbopsid) {
                skipquery = true;
                dbopsId = form?.source?.dbopsid;
            }

            const resHashId = await axios({
                method: "GET",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetHash,
                headers: {
                    Authorization: `Bearer ${sqlOpsUrls.accessToken}`
                }
            });

            if (!skipquery) {

                let query = { ...form.source, refid: deleteTarget.id };

                if (form.source.where) {
                    query = {
                        ...query,
                        "where": replacePlaceholders(form.source.where, {
                            refid: deleteTarget?.id,
                        }),
                    }
                }

                const resQueryId = await axios({
                    method: "POST",
                    url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetRefId,
                    data: {
                        operation: "update",
                        source: query,
                        fields: form.fields,
                        forcefill: form.forcefill,
                        datahash: resHashId.data.refhash,
                        "scrid": infoViewJson?.module_refid
                    },

                    headers: {
                        "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                    },
                });
                dbopsId = resQueryId?.data.refid;

            }


            await axios({
                method: "POST",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsUpdate,
                data: {
                    "refid": dbopsId,
                    fields: { blocked: "true" },
                    "datahash": resHashId.data.refhash,
                    "refid1": deleteTarget?.id
                },
                headers: {
                    Authorization: `Bearer ${sqlOpsUrls.accessToken}`
                }
            });
            window.alert("Record deleted successfully.");
            setRefreshCounter(c => c + 1);

        } catch (err) {
            console.error(err);
            window.alert("Failed to delete record. Please try again")

        } finally {
            setDeleteTarget(null);
            setConfirmOpen(false);


        }
    };

    const cancelDelete = () => {
        setDeleteTarget(null);
        setConfirmOpen(false);
    };




    return (
        <>

            {Reports ? (
                <>
                    <Reports
                        methods={{ ...methods, deleteRecord: handleDelete, editRecord: handleEdit }}
                        report={{
                            ...source,
                            source: {
                                table: source?.table,
                                type: "sql",
                                cols: source?.cols,
                                where: source?.where,
                                orderby: source?.orderby,
                                queryid: source?.queryid
                            },
                            endPoints: sqlOpsUrls,
                            actions: { ...source?.actions, ...infoViewJson?.buttons, ...infoViewJson.actions },
                            datagrid: source?.datagrid,
                            buttons: source?.buttons,
                            refresh: refreshCounter

                        }}
                        onButtonClick={handleAction}
                    />


                    {
                        hasFormConfig && <LogiksForm
                            formJson={{
                                ...config[formType],
                                source: {
                                    ...config?.[formType].source,
                                    refid: editData?.id
                                },
                                endPoints: {
                                    ...sqlOpsUrls,
                                    operation: editData ? "update" : "create"

                                }
                            }}
                            methods={methods}
                            initialvalues={editData ?? {}}
                            setEditData={handleFormClose}
                            module_refid={infoViewJson?.module_refid}
                        />
                    }
                    <ConfirmModal
                        open={confirmOpen}
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                    />
                </>
            ) : (

               
               <p>Report not available</p>

            )}
        </>
    );
}