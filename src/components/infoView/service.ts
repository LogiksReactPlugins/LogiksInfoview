// sqlClient.ts
import axios from "axios";
import type { SqlEndpoints } from "./InfoView.types.js";



type SqlSource = {
    table: string;
    columns: string;
    where?: Record<string, any>;
    refid?: string;
};

const authHeaders = (endpoints: SqlEndpoints) => ({
    Authorization: `Bearer ${endpoints.accessToken}`,
});

export const getHash = async (endpoints: SqlEndpoints) => {
    const res = await axios.get(
        endpoints.baseURL + endpoints.dbopsGetHash,
        { headers: authHeaders(endpoints) }
    );
    return res.data.refhash;
};

export const getRefId = async (
    endpoints: SqlEndpoints,
    payload: {
        operation: "fetch" | "create" | "update";
        source: SqlSource;
        fields?: any;
        datahash: string;
    }
) => {
    const res = await axios.post(
        endpoints.baseURL + endpoints.dbopsGetRefId,
        payload,
        { headers: authHeaders(endpoints) }
    );
    return res.data.refid;
};

export const sqlClient = {
    async fetch(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; fields?: any }
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "fetch",
            source: payload.source,
            fields: payload.fields ?? {},
            datahash,
        });

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsFetch,
            { refid, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data?.data ?? res.data;
    },

    async create(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; values: any }
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "create",
            source: payload.source,
            fields: payload.values,
            datahash,
        });

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsCreate!,
            { refid, fields: payload.values, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data;
    },

    async update(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; values: any }
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "update",
            source: payload.source,
            fields: payload.values,
            datahash,
        });

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsUpdate!,
            { refid, fields: payload.values, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data;
    },
};
