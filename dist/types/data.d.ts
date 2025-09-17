export declare const example7: {
    script: string;
    source: {
        type: string;
        method: string;
        where: string[];
    };
    forcefill: {
        groupuid: string;
        guid: string;
        company_id: string;
    };
    gotolink: string;
    fields: {
        full_name: {
            label: string;
            group: string;
            required: boolean;
            width: number;
        };
        organization: {
            label: string;
            group: string;
            type: string;
            table: string;
            columns: string;
            where: {
                blocked: string;
                company_id: string;
            };
            "no-option": string;
            orderby: string;
            required: boolean;
        };
        type: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
            groupid: string;
            required: boolean;
            multiple: boolean;
        };
        category: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            "no-option": string;
            required: boolean;
        };
        email1: {
            label: string;
            group: string;
            type: string;
            required: boolean;
        };
        email2: {
            label: string;
            group: string;
            type: string;
        };
        mobile: {
            label: string;
            group: string;
            type: string;
            required: boolean;
            minlength: number;
        };
        mobile_others: {
            label: string;
            group: string;
            type: string;
            minlength: number;
        };
        profile_code: {
            label: string;
            group: string;
            type: string;
            minlength: string;
            maxlength: string;
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
                "loginid !=''": string;
                company_id: string;
            };
            required: boolean;
            width: number;
            search: boolean;
        };
        fax: {
            label: string;
            group: string;
        };
        owner: {
            label: string;
            group: string;
            width: number;
        };
        demography: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            width: number;
            "no-option": string;
            required: boolean;
        };
        website: {
            label: string;
            group: string;
            type: string;
        };
        tags: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        remarks: {
            label: string;
            group: string;
            type: string;
            width: number;
        };
        blocked: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
        };
        blacklist: {
            label: string;
            group: string;
            type: string;
            groupid: string;
            vmode: string;
            required: boolean;
        };
        pan: {
            label: string;
            required: boolean;
            group: string;
            maxlength: number;
            minlength: number;
        };
        gst: {
            label: string;
            required: boolean;
            group: string;
            maxlength: number;
            minlength: number;
        };
    };
    infoview: {
        template: string;
        script: string;
        actions: {
            addRecord: {
                label: string;
                icon: string;
            };
        };
        groups: {
            address: {
                label: string;
                type: string;
                src: string;
                policy: string;
                script: string;
                vmode: string;
                config: {
                    policy_create: string;
                    policy_delete: string;
                    policy_update: string;
                    type: string;
                    method: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        script: string;
                        forcefill: {
                            guid: string;
                            created_by: string;
                            profile_id: string;
                        };
                        fields: {
                            address_type: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                                required: boolean;
                            };
                            title: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            address: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            street: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            city: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            state: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            country: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                            };
                            zipcode: {
                                label: string;
                                group: string;
                                type: string;
                                maxlength: number;
                                minlength: number;
                            };
                        };
                    };
                };
                width: number;
            };
            social: {
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
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            guid: string;
                            created_by: string;
                            profile_id: string;
                        };
                        fields: {
                            social_type: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                                required: boolean;
                            };
                            social_weblink: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            social_userid: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            token_key: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                        };
                    };
                };
                width: number;
            };
            bank_details: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    type: string;
                    uimode: string;
                    policy_create: string;
                    policy_delete: string;
                    policy_update: string;
                    table: string;
                    cols: string;
                    where: string;
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            guid: string;
                            created_by: string;
                            profile_id: string;
                        };
                        fields: {
                            bank_name: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_acno_name: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_acno: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_ifsc_code: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_branch: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_address: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_state: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            bank_country: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                            };
                            bank_swift_code: {
                                label: string;
                                group: string;
                                type: string;
                            };
                        };
                    };
                };
                width: number;
            };
            organization: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    DEBUG: boolean;
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                };
                width: number;
            };
            address_book: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    type: string;
                    policy_create: string;
                    policy_delete: string;
                    policy_update: string;
                    table: string;
                    cols: string;
                    where: string;
                    width: number;
                    colkey: string;
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            profile_id: string;
                        };
                        fields: {
                            name: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                            designation: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                            email1: {
                                label: string;
                                type: string;
                                required: boolean;
                            };
                            mobile: {
                                label: string;
                                type: string;
                                required: boolean;
                                minlength: number;
                                maxlength: number;
                            };
                            address: {
                                label: string;
                                type: string;
                            };
                            state: {
                                label: string;
                                type: string;
                            };
                            country: {
                                label: string;
                                type: string;
                                groupid: string;
                            };
                        };
                    };
                };
                width: number;
            };
            leads: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                };
                width: number;
            };
            projects: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    DEBUG: boolean;
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                    orderby: string;
                };
                width: number;
            };
            invoices: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    DEBUG: boolean;
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                };
                width: number;
                hidden: boolean;
            };
            ledger: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                };
                width: number;
                hidden: boolean;
            };
            purchase: {
                label: string;
                type: string;
                src: string;
                vmode: string;
                policy: string;
                config: {
                    type: string;
                    uimode: string;
                    table: string;
                    cols: string;
                    where: string;
                };
                width: number;
                hidden: boolean;
            };
            postbox: {
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
                    colkey: string;
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            groupuid: string;
                            guid: string;
                            dated: string;
                        };
                        fields: {
                            comms_type: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                                "no-option": string;
                            };
                            subject: {
                                label: string;
                                group: string;
                            };
                            profile_id: {
                                label: string;
                                group: string;
                                type: string;
                                table: string;
                                columns: string;
                                where: {
                                    "profiletbl.type <> 'employee'": string;
                                    company_id: string;
                                };
                                "no-option": string;
                                ajaxchain: {
                                    target: string;
                                    src: {
                                        table: string;
                                        columns: string;
                                        where: {
                                            blocked: string;
                                            profile_id: string;
                                        };
                                    };
                                };
                            };
                            staff_userid: {
                                label: string;
                                group: string;
                                type: string;
                                table: string;
                                columns: string;
                                where: {
                                    "profiletbl.type": string;
                                    company_id: string;
                                };
                                "no-option": string;
                            };
                            task_id: {
                                label: string;
                                group: string;
                                type: string;
                                "no-option": string;
                            };
                            type: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                            };
                        };
                    };
                };
                width: number;
                noshow: boolean;
            };
            onsite: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    type: string;
                    uimode: string;
                    DEBUG: boolean;
                    policy_create: string;
                    policy_view: string;
                    policy_delete: string;
                    policy_update: string;
                    table: string;
                    cols: string;
                    where: string;
                    form: {
                        source: {
                            type: string;
                            table: string;
                            where: string[];
                        };
                        forcefill: {
                            groupuid: string;
                            guid: string;
                            cust_id: string;
                        };
                        fields: {
                            staff_id: {
                                label: string;
                                group: string;
                                type: string;
                                table: string;
                                columns: string;
                                where: {
                                    blocked: string;
                                    "status in ('active','under_notice','probationary')": string;
                                    company_id: string;
                                };
                                "no-option": string;
                                required: boolean;
                            };
                            subject: {
                                label: string;
                                group: string;
                                required: boolean;
                                autocomplete: string;
                            };
                            category: {
                                label: string;
                                group: string;
                                type: string;
                                groupid: string;
                                "no-option": string;
                            };
                            time_in: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                            time_out: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                                vmode: string;
                            };
                            projected_income: {
                                label: string;
                                group: string;
                                type: string;
                                required: boolean;
                            };
                        };
                    };
                };
                width: number;
                hidden: boolean;
            };
            emails: {
                label: string;
                type: string;
                src: string;
                policy: string;
                rule: string;
                width: number;
                hidden: boolean;
            };
            accounts: {
                label: string;
                type: string;
                src: string;
                config: {
                    ref_id: string;
                    type: string;
                };
                width: number;
            };
            files: {
                label: string;
                type: string;
                src: string;
                policy: string;
                vmode: string;
                config: {
                    ref_rule: string;
                    ref_col: string;
                    ref_id: string;
                    ref_src: string;
                };
                rule: string;
                width: number;
            };
            comments: {
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
            notes: {
                label: string;
                type: string;
                src: string;
                policy: string;
                rule: string;
                vmode: string;
                width: number;
                hidden: boolean;
            };
            logs: {
                label: string;
                type: string;
                src: string;
                rule: string;
                vmode: string;
                width: number;
                policy: string;
                config: {
                    ref_id: string;
                    ref_src: string;
                };
                hidden: boolean;
            };
            extras: {
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