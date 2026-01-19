import React from 'react';
import axios from "axios";
import InfoFieldRenderer from './InfoFieldRenderer.js'
import { normalizeToObject, replacePlaceholders, tailwindCols, tailwindGrid, toColWidth, toGrid, transformedObject } from '../utils.js'
import type { InfoViewGroup, SqlEndpoints } from '../InfoView.types.js'

export default function SingleView({ tabObj, methods, tabName, sqlOpsUrls, refid, module_refid }:
    {
        tabObj: InfoViewGroup, methods: Record<string, Function>, tabName: string,
        sqlOpsUrls?: SqlEndpoints, refid: string, module_refid: string | undefined;
    }
) {
    const [data, setData] = React.useState<Record<string, any> | null>(null);

    React.useEffect(() => {
        let cancelled = false; // flag for cleanup

        const fetchData = async () => {
            const source = tabObj?.config;

            if (!source?.type) {
                if (!cancelled) setData(null);
                return;
            }

            if (source.type === "method") {
                const methodName = source.method as keyof typeof methods | undefined;
                const methodFn = methodName ? methods[methodName] : undefined;

                if (methodFn) {
                    try {
                        const result = await Promise.resolve(methodFn());
                        if (!cancelled) setData(result || null);
                    } catch (err) {
                        console.error("Method execution failed:", err);
                        if (!cancelled) setData(null);
                    }
                } else {
                    if (!cancelled) setData(null);
                }
            }

            if (source.type === "api") {
                try {
                    const response = await axios({
                        method: source.method || "GET",  // GET, POST, etc.
                        url: source.url,
                        data: source.body || {},         // request body
                        params: source.params || {},     // query params
                        headers: source.headers || {},   // optional headers
                    });

                    if (!cancelled) setData(response.data || null);
                } catch (error) {
                    console.error("API fetch failed:", error);
                    if (!cancelled) setData(null);
                }
            }

            if ((source.type === "sql" && refid &&
                refid != "0") || source?.dbopsid) {

                if (!sqlOpsUrls) {
                    console.error("SQL source requires formJson.endPoints but it is missing");
                    return;
                }

                try {
                    let skipquery = false;
                    let dbopsId;

                    if (source?.dbopsid) {
                        skipquery = true;
                        dbopsId = source?.dbopsid;
                    }

                    const resHashId = await axios({
                        method: "GET",
                        url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetHash,
                        headers: {
                            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                        },
                    });

                    if (!skipquery) {

                        let query = {
                            ...source
                        }

                        if (source.where) {
                            query = {
                                ...source,
                                "where": replacePlaceholders(source.where, {
                                    refid: refid,
                                }),
                            }
                        }

                        const resQueryId = await axios({
                            method: "POST",
                            url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetRefId,
                            data: {
                                "operation": "fetch",
                                "source": query,
                                "fields": transformedObject(source.fields, sqlOpsUrls.operation),
                                "forcefill": source.forcefill,
                                "datahash": resHashId.data.refhash,
                                "srcid": module_refid
                            },

                            headers: {
                                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                            },
                        });
                        dbopsId = resQueryId?.data.refid;

                    }
                    const res = await axios({
                        method: "POST",
                        url: sqlOpsUrls.baseURL + sqlOpsUrls["dbopsFetch"],
                        data: {
                            "refid": dbopsId,
                            "datahash": resHashId.data.refhash
                        },
                        headers: {
                            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                        },
                    });


                    const data = normalizeToObject(res)


                    if (!cancelled) setData(data);
                } catch (err) {
                    console.error("API fetch failed:", err);
                }


            }
        };

        fetchData();

        // cleanup: prevents state update after unmount
        return () => {
            cancelled = true;
        };
    }, [
        tabObj?.config?.type || "",
        tabObj?.config?.method || "",
        tabObj?.config?.url || "",
        JSON.stringify(tabObj?.config?.params || {}),
        JSON.stringify(tabObj?.config?.body || {}),
        JSON.stringify(tabObj?.config?.headers || {}),
    ]);


    return (
        <div className='flex-1 overflow-y-auto'>
            <div className="grid grid-cols-12 gap-2">
                {
                    data ? Object.keys(data).map((field, index) => {
                        return <div
                            key={`field-${index}`}
                            className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(tabObj.width)] || "lg:col-span-2"
                                }`}
                        >
                            <InfoFieldRenderer
                                key={field}
                                field={{ name: field, label: field }}
                                data={data ?? {}}
                                methods={methods}
                                refid={refid}
                                {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
                            />
                        </div>
                    }) : <div className="col-span-12 flex flex-col  min-h-0">
                        <div className="flex flex-1 flex-col items-center justify-center text-gray-500">
                            <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 7 4-4 4 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
                            <p className="text-sm text-gray-500 text-center max-w-sm">
                                There are no records to display  at the moment.
                            </p>

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
