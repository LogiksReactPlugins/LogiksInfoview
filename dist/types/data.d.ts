export declare const example7: {
    source: {
        type: string;
        method: string;
    };
    forcefill: {
        groupuid: string;
        guid: string;
    };
    actions: {
        newContact: {
            icon: string;
            label: string;
            class: string;
        };
    };
    buttons: {
        markAsOrder: {
            label: string;
            class: string;
            icon: string;
            float: string;
            policy: string;
        };
        markAsLost: {
            label: string;
            icon: string;
            class: string;
            policy: string;
        };
        markAsJunk: {
            label: string;
            icon: string;
            class: string;
            policy: string;
        };
        markAsNext: {
            label: string;
            icon: string;
            class: string;
            policy: string;
        };
    };
    gotolink: string;
    script: string;
    fields: {
        id: {
            label: string;
            group: string;
            nodb: boolean;
        };
        title: {
            label: string;
            group: string;
            required: boolean;
        };
        broker_id: {
            label: string;
            type: string;
            table: string;
            columns: string;
            group: string;
            "no-option": string;
        };
        lead_date: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        lead_year: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
            default: string;
        };
        net_amount: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        lead_value: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            noview: boolean;
        };
        lead_priority: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
        };
        lead_source: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
        };
        lead_status: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            "no-option": string;
            required: boolean;
        };
        lead_type: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            suggest: boolean;
            required: boolean;
        };
        enquiry_type: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            required: boolean;
        };
        marketting_source: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            "no-option": string;
            required: boolean;
        };
        marketting_campaign: {
            label: string;
            group: string;
            required: boolean;
        };
        enquiry_product_descs: {
            label: string;
            group: string;
            type: string;
            maxlength: number;
            required: boolean;
            width: number;
        };
        enquiry_due: {
            label: string;
            group: string;
            type: string;
        };
        created_on: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            vmode: string;
            required: boolean;
            options: {
                "": boolean;
                true: string;
                false: string;
            };
        };
        created_by: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
        };
        edited_by: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
        };
        edited_on: {
            label: string;
            group: string;
            type: string;
            hidden: boolean;
        };
        manager: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                "status in ('active','under_notice','probationary')": string;
                "loginid <> ''": string;
            };
        };
        open_by: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                "status in ('active','under_notice','probationary')": string;
                "loginid <> ''": string;
            };
            required: boolean;
        };
        assigned_to: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                "status in ('active','under_notice','probationary')": string;
                "loginid <> ''": string;
            };
            required: boolean;
        };
        tags: {
            label: string;
            group: string;
            type: string;
        };
        remarks: {
            label: string;
            group: string;
            width: number;
            maxlength: number;
            type: string;
        };
    };
    infoview: {
        script: string;
        groups: {
            follow_up: {
                label: string;
                type: string;
                policy: string;
                src: string;
                vmode: string;
                config: {
                    uimode: string;
                    type: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                };
                width: number;
            };
            actions: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    policy_create: string;
                    policy_delete: string;
                    policy_update: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                    colkey: string;
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            groupuid: string;
                            lead_id: string;
                        };
                        fields: {
                            type: {
                                label: string;
                                type: string;
                                groupid: string;
                                required: boolean;
                            };
                            date: {
                                label: string;
                                type: string;
                                autocomplete: string;
                                required: boolean;
                            };
                            start_time: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                            end_time: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                            msg: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                        };
                    };
                };
                width: number;
            };
            customer: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                };
                width: number;
            };
            products: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    type: string;
                    policy_create: string;
                    policy_delete: string;
                    policy_update: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                    colkey: string;
                    hidden: string[];
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            groupuid: string;
                            guid: string;
                            created_by: string;
                            lead_id: string;
                        };
                        fields: {
                            product_id: {
                                label: string;
                                type: string;
                                table: string;
                                columns: string;
                                where: {
                                    "(service_type <> 'asset')": string;
                                };
                                required: boolean;
                                "no-option": string;
                                ajaxchain: {
                                    target: string;
                                    src: {
                                        table: string;
                                        columns: string;
                                        where: {
                                            id: string;
                                        };
                                    };
                                };
                            };
                            product_qty: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                            product_price: {
                                label: string;
                                required: boolean;
                            };
                        };
                    };
                };
                width: number;
            };
            mom: {
                label: string;
                type: string;
                policy: string;
                src: string;
                vmode: string;
                config: {
                    DEBUG: boolean;
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                    unilinks: {
                        title: {
                            type: string;
                            col: string;
                        };
                    };
                    actions: {
                        "forms@meetingNotes.quick/new?src_id=#id#&src_type=lead": {
                            label: string;
                            icon: string;
                        };
                    };
                };
                width: number;
            };
            quotation: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    DEBUG: boolean;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                    actions: {
                        createQuotation: {
                            label: string;
                            icon: string;
                        };
                    };
                };
                width: number;
            };
            leadpo: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                    actions: {
                        createPO: {
                            label: string;
                            icon: string;
                        };
                    };
                    buttons: {
                        viewPOAttachment: {
                            icon: string;
                        };
                    };
                };
                width: number;
            };
            quick_task: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                config: {
                    ref_id: string;
                    ref_src: string;
                };
                width: number;
            };
            email: {
                label: string;
                type: string;
                src: string;
                rule: string;
                vmode: string;
                width: number;
            };
            files: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    ref_id: string;
                    ref_src: string;
                };
                width: number;
            };
            comments: {
                label: string;
                type: string;
                src: string;
                policy: string;
                config: {
                    ref_id: string;
                    ref_src: string;
                };
                vmode: string;
                width: number;
                hidden: boolean;
            };
            notes: {
                label: string;
                type: string;
                src: string;
                rule: string;
                policy: string;
                vmode: string;
                width: number;
                hidden: boolean;
            };
            logs: {
                label: string;
                type: string;
                src: string;
                rule: string;
                policy: string;
                vmode: string;
                width: number;
                config: {
                    ref_id: string;
                    ref_src: string;
                };
                hidden: boolean;
            };
            Extras: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                width: number;
                hidden: boolean;
            };
        };
    };
};
//# sourceMappingURL=data.d.ts.map