export declare const example7: {
    script: string;
    source: {
        type: string;
        table: string;
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
        employee_name: {
            label: string;
            group: string;
            required: boolean;
            width: number;
        };
        staff_code: {
            label: string;
            group: string;
            required: boolean;
            width: number;
        };
        employee_type: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        grade: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        status: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        branch: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        department: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        designation: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        address: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        aadhaar: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        driver: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        destination: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        transit_status: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        shipment_address: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        driver_address: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
        };
        driving_liscence: {
            label: string;
            group: string;
            "no-option": string;
            type: string;
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
                    info: {
                        script: string;
                        source: {
                            type: string;
                            table: string;
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
                            department: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            designation: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            address: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
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
                            pan: {
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
                                        method: string;
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
                                        method: string;
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
                    method: string;
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
                    method: string;
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
                    method: string;
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
                    info: {
                        script: string;
                        source: {
                            type: string;
                            table: string;
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
                            employee_name: {
                                label: string;
                                group: string;
                                required: boolean;
                                width: number;
                            };
                            staff_code: {
                                label: string;
                                group: string;
                                required: boolean;
                                width: number;
                            };
                            employee_type: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            grade: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            status: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            branch: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            department: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            designation: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
                            };
                            address: {
                                label: string;
                                group: string;
                                "no-option": string;
                                type: string;
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
                            pan: {
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
                                        method: string;
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
                                        method: string;
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
                                        method: string;
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
        };
    };
};
//# sourceMappingURL=data.d.ts.map