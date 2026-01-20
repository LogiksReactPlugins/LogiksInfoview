import React, { useState, useMemo, useRef } from 'react';
import axios from "axios";
import type { ComponentType } from "react";
import type { Infoview, InfoViewField, InfoViewGroup } from '../InfoView.types.js';
import { copyToClipboard, replacePlaceholders } from '../utils.js';
import ConfirmModal from './ConfirmationModal.js';
import LogiksForm from './Form.js';

type AlertState = {
    type: "success" | "error";
    message: string;
};
type SortDirection = 'asc' | 'desc' | null;

interface SortConfig {
    key: string;
    direction: SortDirection;
}

export default function GridView({ tabObj, methods, tabName, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson }:
    {
        tabObj: InfoViewGroup,
        methods: Record<string, Function>,
        tabName: string,
        sqlOpsUrls?: Record<string, any>,
        refid: string;
        Reports?: ComponentType<any>;
        toast?: Record<string, Function>;
        handleAction?: Function;
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
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<Record<string, string> | null>(null);
    // Get the array of data
    const [data, setData] = React.useState<Array<Record<string, any>>>([]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [copiedCell, setCopiedCell] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });
    const [alert, setAlert] = useState<AlertState | null>(null);
    const [editData, setEditData] = React.useState<Record<string, any> | null>(null);
    const source = tabObj?.config;
    console.log("tabObj", tabObj);
    console.log("source", source);



    // const fetchData = React.useCallback(async () => {


    //     if (!source?.type) {
    //         setData([]);
    //         return;
    //     }

    //     if (source.type === "method") {
    //         const methodName = source.method as keyof typeof methods | undefined;
    //         const methodFn = methodName ? methods[methodName] : undefined;

    //         if (!methodFn) {
    //             setData([]);
    //             return;
    //         }

    //         try {
    //             const result = await Promise.resolve(methodFn());
    //             setData(result || []);
    //         } catch {
    //             setData([]);
    //         }
    //     }

    //     if (source.type === "api") {
    //         try {
    //             const response = await axios({
    //                 method: source.method || "GET",
    //                 url: source.url,
    //                 data: source.body || {},
    //                 params: source.params || {},
    //                 headers: source.headers || {}
    //             });

    //             setData(response.data || []);
    //         } catch (error) {
    //             console.error("API fetch failed:", error);
    //             setData([]);
    //         }
    //     }

    //     if (source.type === "sql" && refid && refid !== "0") {
    //         if (!sqlOpsUrls) {
    //             console.error("SQL source requires formJson.endPoints but it is missing");
    //             return;
    //         }

    //         try {
    //             const { form, actions, uimode, type, unilinks, DEBUG, ...querySource } = source;

    //             const resQueryId = await axios({
    //                 method: "POST",
    //                 url: sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery,
    //                 data: {
    //                     query: {
    //                         ...querySource,
    //                         where: replacePlaceholders(source.where, { refid })
    //                     }
    //                 },
    //                 headers: {
    //                     Authorization: `Bearer ${sqlOpsUrls.accessToken}`
    //                 }
    //             });

    //             const res = await axios({
    //                 method: "POST",
    //                 url: sqlOpsUrls.baseURL + sqlOpsUrls.runQuery,
    //                 data: {
    //                     queryid: resQueryId.data.queryid,
    //                     filter: {}
    //                 },
    //                 headers: {
    //                     Authorization: `Bearer ${sqlOpsUrls.accessToken}`
    //                 }
    //             });

    //             setData(res.data?.data ?? res.data ?? []);
    //         } catch (err) {
    //             console.error("SQL fetch failed:", err);
    //         }
    //     }
    // }, [
    //     tabObj?.config,
    //     methods,
    //     refid,
    //     sqlOpsUrls
    // ]);
    // React.useEffect(() => {
    //     fetchData()
    // }, [
    //     fetchData
    // ]);

    // If data is not an array, convert single object to array
    // const tableData: Array<Record<string, string>> = Array.isArray(data) ? data : [data];

    // Extract all unique column names from all rows
    // const getAllColumns = (dataArray: Array<Record<string, string>>): string[] => {
    //     const columnSet = new Set<string>();
    //     dataArray.forEach(row => {
    //         if (row && typeof row === 'object') {
    //             Object.keys(row).forEach(key => columnSet.add(key));
    //         }
    //     });
    //     return Array.from(columnSet);
    // };

    // const columns = getAllColumns(tableData);

    // Check if edit mode is enabled
    // const isEditMode = tabObj?.vmode === "edit";
    const config = tabObj?.config;
    const formType =
        config?.["popup.form"]
            ? "popup.form"
            : config?.["form"]
                ? "form"
                : "form";
    const hasFormConfig = config?.[formType] && Object.keys(config?.[formType]).length > 0;
    //const hasInfoConfig = config?.info && Object.keys(config?.info).length > 0;



    // const handleSort = (column: string) => {
    //     let direction: SortDirection = 'asc';

    //     if (sortConfig.key === column && sortConfig.direction === 'asc') {
    //         direction = 'desc';
    //     } else if (sortConfig.key === column && sortConfig.direction === 'desc') {
    //         direction = null;
    //     }

    //     setSortConfig({ key: column, direction });
    // };

    // const sortData = (data: Array<Record<string, any>>) => {
    //     if (!sortConfig.key || !sortConfig.direction) {
    //         return data;
    //     }

    //     return [...data].sort((a, b) => {
    //         const aVal = a[sortConfig.key];
    //         const bVal = b[sortConfig.key];

    //         // Handle null/undefined values
    //         if (aVal === null || aVal === undefined) return sortConfig.direction === 'asc' ? 1 : -1;
    //         if (bVal === null || bVal === undefined) return sortConfig.direction === 'asc' ? -1 : 1;

    //         // Handle boolean values
    //         if (typeof aVal === 'boolean' && typeof bVal === 'boolean') {
    //             return sortConfig.direction === 'asc'
    //                 ? (aVal === bVal ? 0 : aVal ? -1 : 1)
    //                 : (aVal === bVal ? 0 : aVal ? 1 : -1);
    //         }

    //         // Handle dates
    //         const aDate = new Date(aVal);
    //         const bDate = new Date(bVal);
    //         if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
    //             return sortConfig.direction === 'asc'
    //                 ? aDate.getTime() - bDate.getTime()
    //                 : bDate.getTime() - aDate.getTime();
    //         }

    //         // Handle numbers
    //         const aNum = parseFloat(aVal);
    //         const bNum = parseFloat(bVal);
    //         if (!isNaN(aNum) && !isNaN(bNum)) {
    //             return sortConfig.direction === 'asc'
    //                 ? aNum - bNum
    //                 : bNum - aNum;
    //         }

    //         // Handle strings (case-insensitive)
    //         const aStr = String(aVal).toLowerCase();
    //         const bStr = String(bVal).toLowerCase();

    //         if (sortConfig.direction === 'asc') {
    //             return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
    //         } else {
    //             return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
    //         }
    //     });
    // };

    // const filteredAndSortedData = useMemo(() => {
    //     // First filter
    //     let filtered = tableData;
    //     if (searchQuery.trim()) {
    //         const query = searchQuery.toLowerCase();
    //         filtered = tableData.filter(row => {
    //             return columns.some(column => {
    //                 const value = row[column];
    //                 if (value === null || value === undefined) return false;
    //                 return String(value).toLowerCase().includes(query);
    //             });
    //         });
    //     }

    //     // Then sort
    //     return sortData(filtered);
    // }, [tableData, searchQuery, columns, sortConfig]);

    // Sort data function


    // Pagination calculations
    // const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;

    // const currentData = filteredAndSortedData.slice(startIndex, endIndex);

    // Pagination helpers
    // const goToPage = (page: number) => {
    //     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    // };

    // const handleItemsPerPageChange = (newItemsPerPage: number) => {
    //     setItemsPerPage(newItemsPerPage);
    //     setCurrentPage(1); // Reset to first page
    // };

    // Clear search
    // const handleClearSearch = () => {
    //     setSearchQuery("");
    // };

    // Action handlers
    const handleEdit = (row: Record<string, string>, index: number) => {
        setEditData(row)
        // methods?.editInfoRecord?.({ [formType]: tabObj?.config?.[formType] }, refid, row)
        // Implement edit logic here
    };

    // const handleView = (row: Record<string, string>) => {
    //     methods?.viewInfoRecord?.(row, tabObj?.config?.info)
    //     // Implement view logic here
    // };

    // const handleDelete = (row: Record<string, string>, index: number) => {
    //     methods?.deleteInfoRecord?.(row, tabName)
    //     // Implement delete logic here
    // };


    const handleDelete = (row: Record<string, string>) => {
        setDeleteTarget(row);
        setConfirmOpen(true);
    };

    const confirmDelete = async () => {
        if (!deleteTarget?.id) return;

        if (!sqlOpsUrls) {
            setAlert({ type: "error", message: "Delete configuration missing." });
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

            console.log("config?.[formType]", config?.[formType]);

            const form = config?.[formType];

            if (!form?.source) throw new Error("Form source missing");
            const resHashId = await axios({
                method: "GET",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetHash,
                headers: {
                    Authorization: `Bearer ${sqlOpsUrls.accessToken}`
                }
            });


            let query = { ...form.source, refid: deleteTarget.id };

            if (form.source.where) {
                query = {
                    ...query,
                    where: replacePlaceholders(form.source.where, {
                        refid: deleteTarget.id
                    })
                };
            }


            const resQueryId = await axios({
                method: "POST",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetRefId,
                data: {
                    operation: "update",
                    source: query,
                    fields: form.fields,
                    forcefill: form.forcefill,
                    datahash: resHashId.data.refhash
                },
                headers: {
                    Authorization: `Bearer ${sqlOpsUrls.accessToken}`
                }
            });

            await axios({
                method: "POST",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsUpdate,
                data: {
                    refid: resQueryId.data.refid,
                    fields: { blocked: "true" },
                    datahash: resHashId.data.refhash
                },
                headers: {
                    Authorization: `Bearer ${sqlOpsUrls.accessToken}`
                }
            });
            window.alert("Record deleted successfully.")
            // setAlert({
            //     type: "success",
            //     message: "Record deleted successfully."
            // });
            // fetchData()
        } catch (err) {
            console.error(err);
            window.alert("Failed to delete record. Please try again")
            // setAlert({
            //     type: "error",
            //     message: "Failed to delete record. Please try again."
            // });
        } finally {
            setDeleteTarget(null);
            setConfirmOpen(false);

            // auto-hide after 3s
            //setTimeout(() => setAlert(null), 3000);
        }
    };

    const cancelDelete = () => {
        setDeleteTarget(null);
        setConfirmOpen(false);
    };

    // const handleAddRecord = () => {
    //     methods?.addInfoRecord?.({ [formType]: tabObj?.config?.[formType] }, refid)
    //     // Implement add record logic here
    // };

    // Format field names to be more readable
    // const formatFieldName = (fieldName: string) => {
    //     return fieldName
    //         .split('_')
    //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //         .join(' ');
    // };

    // Format field values for better display



    // const formatCellValue = (value: string, formatter: string) => {
    //     if (value === null || value === undefined || value === '') {
    //         return <span className="text-gray-400 italic">-</span>;
    //     }

    //     if (typeof value === 'boolean') {
    //         return (
    //             <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    //                 }`}>
    //                 {value ? 'Yes' : 'No'}
    //             </span>
    //         );
    //     }

    //     switch (formatter?.toLowerCase()) {
    //         case 'checkbox':
    //             return (
    //                 <input
    //                     type="checkbox"
    //                     checked={Boolean(value)}
    //                     readOnly
    //                     className="w-4 h-4 text-green-600 accent-green-600 cursor-default"
    //                 />
    //             );

    //         case 'date':
    //             return new Date(value).toLocaleDateString();

    //         case 'time':
    //             return new Date(value).toLocaleTimeString();

    //         case 'datetime':
    //             return new Date(value).toLocaleString();

    //         case 'currency':
    //             if (typeof value === "number") {
    //                 return new Intl.NumberFormat(undefined, {
    //                     style: 'currency',
    //                     currency: 'USD',
    //                     minimumFractionDigits: 2,
    //                 }).format(value)
    //             };

    //         case 'number':
    //         case 'num':
    //             return <span className="text-center">{Number(value).toLocaleString()}</span>;

    //         case 'url':
    //             return value ? (
    //                 <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
    //                     {value}
    //                 </a>
    //             ) : null;

    //         case 'email':
    //             return value ? (
    //                 <a
    //                     href={`mailto:${value}`}
    //                     className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
    //                 >
    //                     {value}
    //                 </a>
    //             ) : null;

    //         case 'tel':
    //         case 'mob':
    //         case 'phone':
    //         case 'mobile':
    //             return value ? (

    //                 <a
    //                     href={`tel:${value}`}
    //                     className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
    //                 >
    //                     {value}
    //                 </a>
    //             ) : null;

    //         case 'geoloc':
    //         case 'geolocation':
    //         case 'geoaddress':
    //             return value ? (
    //                 <a
    //                     href={`https://www.google.com/maps/place/${encodeURIComponent(value)}`}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="text-blue-600 underline"
    //                 >
    //                     {value}
    //                 </a>
    //             ) : null;

    //         case 'color':
    //             return value ? (
    //                 <div className="flex items-center justify-center">
    //                     <span className="w-5 h-5 rounded-full border" style={{ backgroundColor: value }}></span>
    //                 </div>
    //             ) : null;

    //         case 'avatar':
    //             return (
    //                 <img
    //                     src={value || '/images/user.png'}
    //                     alt="avatar"
    //                     className="w-8 h-8 rounded-full object-cover"
    //                 />
    //             );

    //         case 'photo':
    //         case 'picture':
    //         case 'media':
    //             return (
    //                 <img
    //                     src={value || '/images/noimg.png'}
    //                     alt="media"
    //                     className="w-12 h-12 rounded object-cover"
    //                 />
    //             );

    //         case 'file':
    //         case 'attachment':
    //             return value ? (
    //                 <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
    //                     FILE
    //                 </a>
    //             ) : (
    //                 'No File'
    //             );

    //         case 'json':
    //             try {
    //                 const parsed = typeof value === 'string' ? JSON.parse(value) : value;
    //                 return (
    //                     <pre className="whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded">
    //                         {JSON.stringify(parsed, null, 2)}
    //                     </pre>
    //                 );
    //             } catch {
    //                 return String(value);
    //             }

    //         case 'pretty':
    //             return (
    //                 <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded">
    //                     {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
    //                 </pre>
    //             );

    //         case 'uppercase':
    //             return String(value).toUpperCase();

    //         case 'lowercase':
    //             return String(value).toLowerCase();

    //         case 'html':
    //             return <div dangerouslySetInnerHTML={{ __html: value }} />;

    //         default:
    //             return String(value);
    //     }
    // };

    // const handleCopy = (value: string, cellKey: string) => {

    //     copyToClipboard(value).then(() => {

    //         setCopiedCell(cellKey)
    //         // Clear any existing timeout before setting a new one
    //         if (timeoutRef.current) {
    //             clearTimeout(timeoutRef.current);
    //         }
    //         timeoutRef.current = setTimeout(() => {
    //             setCopiedCell("");
    //         }, 2000);
    //     }).catch(() => {
    //         setCopiedCell("");
    //     });
    // };

    // Get statistics
    // const stats = useMemo(() => ({
    //     totalRows: filteredAndSortedData.length,
    //     columns: columns.length,
    //     currentPageStart: startIndex + 1,
    //     currentPageEnd: Math.min(endIndex, filteredAndSortedData.length),
    //     isFiltered: searchQuery.trim().length > 0
    // }), [filteredAndSortedData, tableData, columns, startIndex, endIndex]);

    // if (tableData.length === 0 || columns.length === 0) {
    //     return (
    //         <div className="flex flex-1 flex-col items-center justify-center text-gray-500">
    //             <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
    //                 <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
    //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 7 4-4 4 4" />
    //                 </svg>
    //             </div>
    //             <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
    //             <p className="text-sm text-gray-500 text-center max-w-sm">
    //                 There are no records to display in the grid view at the moment.
    //             </p>
    //             {hasFormConfig && (
    //                 <button
    //                     onClick={handleAddRecord}
    //                     className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer"
    //                 >
    //                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    //                     </svg>
    //                     Add Record
    //                 </button>
    //             )}
    //         </div>
    //     );
    // }

    console.log("source",source);
    

console.log("source?.querid",source?.querid);


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
                                queryid:source?.queryid
                            },
                            endPoints: sqlOpsUrls,
                            actions: { ...source?.actions, ...infoViewJson?.buttons, ...infoViewJson.actions },
                            datagrid: source?.datagrid,
                            buttons: source?.buttons

                        }}
                        onButtonClick={handleAction}
                    />


                    {
                        hasFormConfig && <LogiksForm
                            formJson={{
                                ...config[formType],
                                endPoints: {
                                    ...sqlOpsUrls,
                                    operation: editData ? "update" : "create"

                                }
                            }}
                            initialvalues={editData ?? {}}
                            setEditData={setEditData}
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

               hasFormConfig && <LogiksForm
                            formJson={{
                                ...config[formType],
                                endPoints: {
                                    ...sqlOpsUrls,
                                    operation: editData ? "update" : "create"

                                }
                            }}
                            initialvalues={editData ?? {}}
                            setEditData={setEditData}
                            module_refid={infoViewJson?.module_refid}
                        />

            )}
        </>
    );
}