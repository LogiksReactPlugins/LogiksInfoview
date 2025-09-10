import React from "react";
import axios from "axios";

import { determineViewMode, groupFields } from './utils.js';

import type { InfoViewGroup, InfoViewProps, InfoData } from './InfoView.types.js';

import CommonInfo from "./components/CommonInfo.js";
import TabView from "./components/TabView.js";
import AccordianView from "./components/AccordianView.js";
import CardView from "./components/CardView.js";


export default function LogiksInfoView({
    formJson,
    data = {},
    hiddenFields = [],
    groupFieldsFn = groupFields,
    layoutConfig = {},
    viewRenderers = {},
    methods = {}
}: InfoViewProps) {



    const [infoData, setInfoData] = React.useState<InfoData>({});
    const viewMode = determineViewMode(formJson.infoview ?? {});
    const groupedFields = React.useMemo(
        () => groupFieldsFn(formJson.fields || {}),
        [formJson.fields, groupFieldsFn]
    );

    console.log("groupedFields", groupedFields)

    let groups: Record<string, InfoViewGroup> = { ...groupedFields };

    if (formJson.infoview?.groups) {
        groups = { ...groups, ...formJson.infoview.groups };
    }

    console.log("groups", groups)

    React.useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            const source = formJson?.source;
            if (!source?.type) {
                if (!cancelled) setInfoData({});
                return;
            }

            if (source.type === "method") {
                const methodName = source.method as keyof typeof methods | undefined;
                const methodFn = methodName ? methods[methodName] : undefined;

                if (methodFn) {
                    try {
                        const result = await Promise.resolve(methodFn());
                        if (!cancelled) setInfoData(result || {});
                    } catch (err) {
                        console.error("Method execution failed:", err);
                        if (!cancelled) setInfoData({});
                    }
                } else {
                    if (!cancelled) setInfoData({});
                }
            }

            if (source.type === "api") {
                try {
                    const response = await axios({
                        method: source.method || "GET",
                        url: source.url,
                        data: source.body || {},
                        params: source.params || {},
                        headers: source.headers || {},
                    });
                    if (!cancelled) setInfoData(response.data || {});
                } catch (error) {
                    console.error("API fetch failed:", error);
                    if (!cancelled) setInfoData({});
                }
            }
        };

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [
        formJson?.source?.type || "",
        formJson?.source?.method || "",
        formJson?.source?.url || "",
        JSON.stringify(formJson?.source?.params || {}),
        JSON.stringify(formJson?.source?.body || {}),
        JSON.stringify(formJson?.source?.headers || {}),
    ]);


    /** Extract common group */
    const commonInfo = groups["common"] || null;
    if (commonInfo) delete groups["common"];

    const formView = (viewMode: string) => {
        switch (viewMode) {
            case "accordion":
                return <AccordianView
                    groups={groups}
                    methods={methods}
                    infoData={infoData}
                    viewRenderers={viewRenderers}

                />

            case "tab":
            case "tableft":
            case "tabright":
                return <TabView
                    groups={groups}
                    viewRenderers={viewRenderers}
                    layoutConfig={layoutConfig}
                    methods={methods}
                    infoData={infoData}
                    isCommonInfo={!!commonInfo}
                    viewMode={viewMode}


                />

            case "cards":

                return <CardView
                    groups={groups}
                    viewRenderers={viewRenderers}
                    methods={methods}
                    infoData={infoData}


                />

            default:
                return <TabView
                    groups={groups}
                    viewRenderers={viewRenderers}
                    layoutConfig={layoutConfig}
                    methods={methods}
                    infoData={infoData}
                    isCommonInfo={!!commonInfo}
                    viewMode={viewMode}


                />

        }
    }


    return (
        <div className={layoutConfig.containerClass || "h-screen flex flex-col"}>

            {commonInfo && (
                <CommonInfo
                    commonInfo={commonInfo}
                    infoData={infoData}
                    hiddenFields={hiddenFields}
                />
            )}
            {formView(viewMode)}
        </div>

    );

};


