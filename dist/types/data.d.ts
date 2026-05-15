export declare const example9: {
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
    };
    source: {
        type: string;
        dbopsid: string;
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
    fields: {
        company_code_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            }[];
            options: {
                title: string;
                value: number;
            }[];
        };
        spv_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            options: never[];
        };
        sector_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            };
            options: never[];
        };
        project_function_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            };
            options: never[];
        };
        location_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            options: never[];
        };
        month: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        letter_no: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        issued_by: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        observation_issued_count: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        observation_report_file: {
            label: string;
            type: string;
            width: number;
        };
        compliance_report_file: {
            label: string;
            type: string;
            width: number;
        };
        subject: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
    };
    infoview: {
        groups: {
            category_observation: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    uiswitcher: boolean;
                    policy_create: string;
                    policy_view: string;
                    policy_delete: string;
                    policy_update: string;
                    toolbar: {
                        search: boolean;
                        print: boolean;
                        export: boolean;
                        email: boolean;
                    };
                    orderby: string;
                    colkey: string;
                    "popup.form": {
                        source: {
                            type: string;
                            dbopsid: string;
                        };
                        forcefill: {
                            guid: string;
                            created_by: string;
                            hse_observations_external_id: string;
                        };
                        fields: {
                            type: {
                                label: string;
                                type: string;
                                required: boolean;
                                groupid: string;
                                width: number;
                            };
                            type_issued: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_closed: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_wip: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_not_applicable: {
                                label: string;
                                type: string;
                                width: number;
                            };
                            type_open: {
                                label: string;
                                type: string;
                                width: number;
                            };
                        };
                    };
                    datagrid: {
                        id: {
                            label: string;
                            searchable: boolean;
                        };
                        type: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                            formatter: string;
                        };
                        type_issued: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_closed: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_wip: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_not_applicable: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        type_open: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                    };
                    actions1: {
                        addInfoRecord: {
                            label: string;
                        };
                    };
                    buttons: {
                        editRecord: {
                            label: string;
                            icon: string;
                        };
                        deleteRecord: {
                            label: string;
                            icon: string;
                        };
                    };
                    queryid: string;
                };
                width: number;
            };
        };
    };
    module_refid: string;
    module_type: string;
};
export declare const example10: {
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
    };
    hooks: {
        presubmit: string[];
    };
    source: {
        type: string;
        dbopsid: string;
    };
    forcefill: {
        guid: string;
    };
    gotolink: string;
    fields: {
        company_code_id: {
            label: string;
            type: string;
            parameter: string;
            required: boolean;
            source: {
                type: string;
                method: string;
                endpoint: string;
            };
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    method: string;
                    endpoint: string;
                };
            }[];
            "no-option": string;
            width: number;
            options: never[];
        };
        sector_id: {
            label: string;
            "no-option": string;
            type: string;
            parameter: {
                sector_id: string;
                company_id: string;
            };
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    method: string;
                    endpoint: string;
                };
            }[];
            required: boolean;
            width: number;
            options: never[];
        };
        project_function_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            "no-option": string;
            options: never[];
        };
        date: {
            label: string;
            type: string;
            required: boolean;
            max: string;
            width: number;
        };
        location_id: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        photo_attendance: {
            label: string;
            type: string;
            multiple: boolean;
            width: number;
        };
        conducted_by_department: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        conducted_by_name: {
            label: string;
            type: string;
            width: number;
            search: boolean;
            options: {
                title: string;
                value: string;
            }[];
        };
        participant_count: {
            label: string;
            type: string;
            required: boolean;
            min: number;
            width: number;
        };
    };
    infoview: {
        template: string;
        groups: {
            participant_details: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    uiswitcher: boolean;
                    policy_create: string;
                    policy_view: string;
                    policy_delete: string;
                    policy_update: string;
                    toolbar: {
                        search: boolean;
                        print: boolean;
                        export: boolean;
                        email: boolean;
                    };
                    colkey: string;
                    "popup.form": {
                        hooks: {
                            presubmit: string[];
                            postsubmit: string[];
                        };
                        source: {
                            type: string;
                            dbopsid: string;
                        };
                        forcefill: {
                            guid: string;
                        };
                        fields: {
                            id: {
                                label: string;
                                type: string;
                                required: boolean;
                                disabled: boolean;
                                hidden: boolean;
                            };
                            hse_induction_id: {
                                label: string;
                                type: string;
                                default: string;
                            };
                            gender: {
                                label: string;
                                type: string;
                                required: boolean;
                                groupid: string;
                                width: number;
                                formatter: string;
                                options: ({
                                    title: string;
                                    value: string;
                                    class: string;
                                    privilege: string;
                                } | {
                                    title: string;
                                    value: string;
                                    class: null;
                                    privilege: string;
                                })[];
                            };
                            count: {
                                label: string;
                                type: string;
                                required: boolean;
                                min: number;
                                default: number;
                                width: number;
                            };
                            company: {
                                label: string;
                                type: string;
                                onChange: string;
                                groupid: string;
                                required: boolean;
                                width: number;
                                options: {
                                    title: string;
                                    value: string;
                                    class: null;
                                    privilege: string;
                                }[];
                            };
                            company_name: {
                                label: string;
                                disabled: boolean;
                                type: string;
                                width: number;
                            };
                            photograph: {
                                label: string;
                                type: string;
                                multiple: boolean;
                                width: number;
                            };
                        };
                    };
                    datagrid: {
                        gender: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                            formatter: string;
                        };
                        count: {
                            label: string;
                            searchable: boolean;
                            sortable: boolean;
                        };
                        company: {
                            label: string;
                            formatter: string;
                            searchable: boolean;
                        };
                        company_name: {
                            label: string;
                            searchable: boolean;
                        };
                        photograph: {
                            label: string;
                            searchable: boolean;
                            formatter: string;
                        };
                    };
                    actions1: {
                        addInfoRecord: {
                            label: string;
                        };
                    };
                    buttons: {
                        editRecord: {
                            label: string;
                            icon: string;
                        };
                        "api@hse.deleteRecord": {
                            label: string;
                            icon: string;
                            lgksConfirm: string;
                            payload: {
                                table: string;
                            };
                        };
                        "popup@activity_logs.popup_activity_logs/{id}": {
                            label: string;
                            params: {
                                ref_src: string;
                            };
                            icon: string;
                        };
                    };
                    queryid: string;
                };
                width: number;
            };
        };
    };
    script: string;
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map