export declare const example8: {
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
    hooks: {};
    source: {
        type: string;
        dbopsid: string;
        refid: string;
        where: {
            id: string;
        };
    };
    forcefill: {
        groupuid: string;
        guid: string;
        last_status: string;
        company_id: string;
    };
    fields: {
        code: {
            label: string;
            group: string;
            required: boolean;
            width: number;
            type: string;
        };
        title: {
            label: string;
            group: string;
            required: boolean;
            width: number;
            type: string;
        };
        location_id: {
            label: string;
            group: string;
            required: boolean;
            width: number;
            type: string;
            valueKey: string;
            labelKey: string;
            queryid: string;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
        };
        description: {
            label: string;
            group: string;
            width: number;
            type: string;
        };
    };
    module_refid: string;
    module_type: string;
};
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
    source: {
        type: string;
        dbopsid: string;
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
            parameter: {
                project_id: string;
            };
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    method: string;
                    endpoint: string;
                };
            }[];
            width: number;
            "no-option": string;
            options: never[];
        };
        location_id: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            width: number;
            options: never[];
        };
        name: {
            label: string;
            hidden: boolean;
            width: number;
        };
        email: {
            label: string;
            type: string;
            hidden: boolean;
            width: number;
        };
        mobile: {
            label: string;
            type: string;
            hidden: boolean;
            width: number;
        };
        subject: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        ticket_type: {
            label: string;
            type: string;
            options: {
                bug: string;
                service_request: string;
                enhancement: string;
                change_request: string;
            };
            search: boolean;
            "no-option": string;
            required: boolean;
            width: number;
        };
        department_id: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            width: number;
            ajaxchain: {
                target: string;
                src: {
                    type: string;
                    queryid: string;
                };
            }[];
            autocomplete: {
                target: string;
                src: {
                    type: string;
                    method: string;
                    endpoint: string;
                    parameter: {
                        department_id: string;
                        tickets_category_id: string;
                        tickets_subcategory_id: string;
                        tickets_sub_subcategory_id: string;
                    };
                };
            };
            options: {
                title: string;
                value: number;
            }[];
        };
        priority: {
            label: string;
            type: string;
            groupid: string;
            required: boolean;
            default: string;
            width: number;
            options: {
                title: string;
                value: string;
                class: null;
                privilege: string;
            }[];
        };
        tickets_category_id: {
            label: string;
            type: string;
            "no-option": string;
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
        tickets_subcategory_id: {
            label: string;
            type: string;
            "no-option": string;
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
        tickets_sub_subcategory_id: {
            label: string;
            type: string;
            "no-option": string;
            required: boolean;
            width: number;
            options: never[];
        };
        raised_by: {
            label: string;
            type: string;
            search: boolean;
            default: string;
            orderBy: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
            }[];
        };
        descs: {
            label: string;
            type: string;
            width: number;
            height: string;
            language: string;
            required: boolean;
        };
        attachment: {
            label: string;
            multiple: boolean;
            type: string;
            width: number;
        };
        assigned_to: {
            label: string;
            type: string;
            search: boolean;
            "no-option": string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
            }[];
        };
        forward_to: {
            label: string;
            type: string;
            required: boolean;
            width: number;
            options: {
                title: string;
                value: string;
            }[];
        };
        forward_remark: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        hold_remark: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        resolved_remark: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        reopen_remark: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
        closed_remark: {
            label: string;
            type: string;
            required: boolean;
            width: number;
        };
    };
    infoview: {
        template: string;
        groups: {
            comments: {
                label: string;
                type: string;
                component: string;
            };
            movements: {
                label: string;
                type: string;
                component: string;
            };
        };
    };
    module_refid: string;
    module_type: string;
};
//# sourceMappingURL=data.d.ts.map