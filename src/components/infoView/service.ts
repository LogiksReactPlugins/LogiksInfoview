// sqlClient.ts

import axios, { type AxiosResponse } from "axios";
import type { SelectOptions, SqlEndpoints, sqlQueryProps } from "./InfoView.types.js";
import { formatOptions, normalizeRowSafe, replacePlaceholders } from "./utils.js";



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
        srcid: string | undefined;
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
        payload: { source: SqlSource; fields?: any },
        dbopsid: string | undefined,
        module_refid: string | undefined,
    ) {
        const datahash = await getHash(endpoints);

        let skipquery = false;
        let dbopsId;

        if (dbopsid) {
            skipquery = true;
            dbopsId = dbopsid;
        }

        if (!skipquery) {

            const dbRefid = await getRefId(endpoints, {
                operation: "fetch",
                source: payload.source,
                fields: payload.fields ?? {},
                datahash,
                srcid: module_refid
            });
            dbopsId = dbRefid;
        }

        const data = { refid: dbopsId, datahash, refid1: endpoints.refid };

        if (payload.source?.refid) {
            data.refid1 = payload.source?.refid
        }

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsFetch,
            data,
            { headers: authHeaders(endpoints) }
        );

        return res.data?.data ?? res.data;
    },

    async create(
        endpoints: SqlEndpoints,
        payload: { source: SqlSource; values: any },
        module_refid: string | undefined,
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "create",
            source: payload.source,
            fields: payload.values,
            datahash,
            srcid: module_refid
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
        payload: { source: SqlSource; values: any },
        module_refid: string | undefined,
    ) {
        const datahash = await getHash(endpoints);

        const refid = await getRefId(endpoints, {
            operation: "update",
            source: payload.source,
            fields: payload.values,
            datahash,
            srcid: module_refid
        });

        const res = await axios.post(
            endpoints.baseURL + endpoints.dbopsUpdate!,
            { refid, fields: payload.values, datahash },
            { headers: authHeaders(endpoints) }
        );

        return res.data;
    },
};


export async function fetchDataByquery(
    sqlOpsUrls: Record<string, any>,
    query: Record<string, any> | undefined,
    querid: string | undefined,
    refid: string | undefined = undefined,
    module_refid: string | undefined = undefined,
    filter: Record<string, any> = {}
): Promise<AxiosResponse<any>> {
    try {

        let queryId = querid;

        if (!queryId) {
            const resQueryId = await axios({
                method: "POST",
                url: sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery,
                data: { "query": query, "srcid": module_refid },
                headers: {
                    "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                },
            });
            queryId = resQueryId.data.queryid;
        }

        const res = await axios({
            method: "POST",
            url: sqlOpsUrls.baseURL + sqlOpsUrls.runQuery,
            data: {
                "queryid": queryId,
                "filter": filter,
                "refid": refid,
                "page": 0,
                "limit": 10000
            },
            headers: {
                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
        });

        return res
    } catch (error) {
        throw error;
    }
}


export async function runAjaxChain({
    field,
    value,
    sqlOpsUrls,
    setFieldOptions,
    values,
}: {
    field: any;
    value: any;
    sqlOpsUrls: any;
    setFieldOptions: (name: string, options: SelectOptions) => void;
    values: Record<string, any>
}) {
    if (!field.ajaxchain || !value || !sqlOpsUrls) return;

    const chains = Array.isArray(field.ajaxchain)
        ? field.ajaxchain
        : [field.ajaxchain];

    for (const chain of chains) {
        type ParamValue =
            | string
            | number
            | boolean
            | null
            | undefined
            | Record<string, unknown>
            | unknown[];
        const src = chain.src;

        if (!chain || typeof chain !== "object") continue;
        if (!src || typeof src !== "object") continue;

        let responseData: any;

        if ("type" in src && src.type === "api") {
            let curr_field = field.name;

            if (typeof field.parameter === "string" && field.parameter) {
                curr_field = field.parameter
            }

            const params: Record<string, ParamValue> = { [curr_field]: value, refid: value }

            if (typeof field.parameter === "object" && field.parameter !== null
                && Object.keys(field.parameter).length > 0

            ) {

                for (const [key, val] of Object.entries(field.parameter)) {
                    params[key] = key === curr_field
                        ? value
                        : values?.[val as string];
                }

            }


            const config = {
                method: src.method || "GET",
                url: sqlOpsUrls?.baseURL + src.endpoint,

                headers: {
                    "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                },
                ...(src.method === "GET"
                    ? { params }
                    : { data: params }),
            }
            const { data: res } = await axios(config);
            responseData = res;
        } else {

            let query: sqlQueryProps | undefined;

            if (!src.queryid) {
                if (!src.table || !src.columns) {
                    throw new Error("SQL query requires field.table");
                }
                const resolvedWhere = replacePlaceholders(src.where ?? {}, { refid: value });
                query = {
                    ...src,
                    table: src.table,
                    cols: src.columns,
                    where: resolvedWhere,
                };
            }

            const { data: res } = await fetchDataByquery(
                sqlOpsUrls,
                query,
                src.queryid,
                value
            );
            responseData = res;

        }

        const rawItems = Array.isArray(responseData?.results?.options) ?
            responseData?.results?.options : Array.isArray(responseData.data)
                ? responseData.data
                : Array.isArray(responseData.results)
                    ? responseData.results
                    : responseData

        const normalized = Array.isArray(rawItems)
            ? rawItems.map(normalizeRowSafe)
            : [];

        const mapped = formatOptions(
            field.valueKey ?? "value",
            field.labelKey ?? "title",
            normalized,
            field.groupKey
        );

        setFieldOptions(chain.target, mapped);
    }
}
export async function getPreviewUrl(
    fileUrl: string,
    sqlOpsUrls: Record<string, any>
): Promise<string> {
    let previewPath = sqlOpsUrls.previewPath ?? "/api/files/preview"
    const res = await axios.get(
        `${sqlOpsUrls.baseURL}${previewPath}?uri=${encodeURIComponent(fileUrl)}`,
        {
            responseType: "blob",
            headers: {
                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            }
        },

    );

    return URL.createObjectURL(res.data);
}