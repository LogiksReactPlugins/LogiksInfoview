import React from 'react';
import axios from "axios";
import InfoFieldRenderer from './InfoFieldRenderer.js'
import { tailwindCols, tailwindGrid, toColWidth, toGrid } from '../utils.js'
import type { InfoViewGroup } from '../InfoView.types.js'

export default function SingleView({ tabObj, methods,tabName }: { tabObj: InfoViewGroup, methods: Record<string, Function>,tabName:string }) {
    const [data, setData] = React.useState<Record<string, any>>({});

    React.useEffect(() => {
        let cancelled = false; // flag for cleanup

        const fetchData = async () => {
            const source = tabObj?.config;

            if (!source?.type) {
                if (!cancelled) setData({});
                return;
            }

            if (source.type === "method") {
                const methodName = source.method as keyof typeof methods | undefined;
                const methodFn = methodName ? methods[methodName] : undefined;

                if (methodFn) {
                    try {
                        const result = await Promise.resolve(methodFn());
                        if (!cancelled) setData(result || {});
                    } catch (err) {
                        console.error("Method execution failed:", err);
                        if (!cancelled) setData({});
                    }
                } else {
                    if (!cancelled) setData({});
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

                    if (!cancelled) setData(response.data || {});
                } catch (error) {
                    console.error("API fetch failed:", error);
                    if (!cancelled) setData({});
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
                    data && Object.keys(data).map((field, index) => {
                        return <div
                            key={`field-${index}`}
                            className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(tabObj.width)] || "lg:col-span-2"
                                                               }`}
                        >
                            <InfoFieldRenderer
                                key={field}
                                field={{ name: field, label: field }}
                                data={data ?? {}}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
