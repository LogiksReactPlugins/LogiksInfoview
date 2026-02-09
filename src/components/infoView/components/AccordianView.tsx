import { useState, type ComponentType } from "react";
import InfoFieldRenderer from './InfoFieldRenderer.js'
import Accordion from './Accordian.js';
import SingleView from './SingleView.js';
import GridView from './GridView.js';

import { groupFields, tailwindCols, tailwindGrid, toColWidth } from '../utils.js';
import type { InfoViewGroup, InfoViewProps, InfoViewField, InfoData, Infoview, SqlEndpoints, SelectOptions, InfoviewJson } from '../InfoView.types.js';

interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Record<string, Function>;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoViewJson: InfoviewJson;
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (
        fieldName: string,
        options: SelectOptions
    ) => void;
    components?: Record<string, ComponentType<any>>;
}

export default function AccordianView({
    groups,
    methods = {},
    infoData,
    viewRenderers = {},
    sqlOpsUrls,
    refid,
    Reports,
    toast = {},
    handleAction = () => { },
    infoViewJson,
    fieldOptions,
    setFieldOptions,
    components
}
    : AccordianViewProps) {




    type RendererKey = "single" | "grid";
    const defaultRenderer: Record<RendererKey, (tab: InfoViewGroup, tabName: string) => React.JSX.Element> = {
        single: (tab, tabName) => (
            <SingleView
                tabObj={tab}
                methods={methods}
                tabName={tabName}
                sqlOpsUrls={sqlOpsUrls}
                fieldOptions={fieldOptions}
                setFieldOptions={setFieldOptions}
                refid={refid}
                module_refid={infoViewJson?.module_refid}
            />
        ),
        grid: (tab, tabName) => (
            <GridView
                {...(Reports ? { Reports } : {})}
                toast={toast}
                infoViewJson={infoViewJson}
                handleAction={handleAction}
                tabObj={tab}
                methods={methods}
                tabName={tabName}
                sqlOpsUrls={sqlOpsUrls}
                refid={refid}
            />
        ),
    };


    const buttons = infoViewJson?.buttons;
    let commonButtons = buttons ? Object.entries(buttons).filter(([_, val]) => {
        if (val.groups && val.groups.length > 0) return false
        return true;
    }) : [];



    async function handleClick(method: string, val: Record<string, any>) {

        const methodFn = methods?.[method as keyof typeof methods];

        if (methodFn) {
            try {
                await methodFn();

            } catch (err) {
                console.error("Method execution failed:", err);

            }
            return
        }
        handleAction?.({ [method]: val }, infoData)

    }


    return (

        <div className="bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100">

            <div className="p-4 mx-auto">
                <div className="space-y-1 flex flex-col min-h-0">
                    {groups && Object.entries(groups).map(([group, obj], index) => {

                        let visibleButtons = buttons ? Object.entries(buttons).filter(([_, val]) => {
                            if (val.groups) return val.groups.includes(group)
                            return false;
                        }) : [];

                        const CustomComponent =
                            obj?.type === "component" &&
                                typeof obj.component === "string" &&
                                components?.[obj.component]
                                ? components[obj.component]
                                : null;
                        return <Accordion key={group} title={obj.label} isFirst={index === 0}>
                            {obj?.type === "fields" && obj?.fields ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    <div className={"grid grid-cols-12 gap-2"}>
                                        {obj.fields.map((field: InfoViewField, index: number) => (
                                            <div
                                                key={field?.name ?? `field-${index}`}
                                                className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(field.width)] || "lg:col-span-2"
                                                    }`}
                                            >
                                                <InfoFieldRenderer
                                                    module_refid={infoViewJson?.module_refid}
                                                    methods={methods}
                                                    field={field} data={infoData ?? {}}
                                                    setFieldOptions={setFieldOptions}
                                                    {...(fieldOptions[field.name]
                                                        ? { optionsOverride: fieldOptions[field.name] }
                                                        : {})}
                                                    sqlOpsUrls={sqlOpsUrls}
                                                    refid={refid}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : CustomComponent ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    <CustomComponent />
                                </div>
                            ) : obj ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    {viewRenderers[obj.config?.uimode]?.(obj) ||
                                        defaultRenderer[obj.config?.uimode as "single" | "grid"]?.(obj, group) ||
                                        <div>No renderer for this type</div>}
                                </div>

                            ) : null}

                            <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                                {visibleButtons &&
                                    visibleButtons.map(([key, val]) => (
                                        <button
                                            key={key}
                                            onClick={() => handleClick(key, val)}
                                            className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                                        >
                                            {val.label}
                                        </button>
                                    ))}
                            </div>
                        </Accordion>
                    })}

                    <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                        {commonButtons &&
                            commonButtons.map(([key, val]) => (
                                <button
                                    key={key}
                                    onClick={() => handleClick(key, val)}
                                    className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    {val.label}
                                </button>
                            ))}
                    </div>
                </div>


            </div>
        </div>

    )
}
