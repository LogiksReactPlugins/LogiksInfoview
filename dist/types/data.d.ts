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
//# sourceMappingURL=data.d.ts.map