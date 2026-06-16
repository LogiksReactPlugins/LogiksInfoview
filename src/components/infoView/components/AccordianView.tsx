import { useState, type ComponentType, type ReactNode } from "react";
import InfoFieldRenderer from './InfoFieldRenderer.js'
import Accordion from './Accordian.js';
import SingleView from './SingleView.js';
import GridView from './GridView.js';

import { isHidden, tailwindCols, toColWidth } from '../utils.js';
import type { InfoViewGroup, FormField, InfoData, SqlEndpoints, SelectOptions, InfoviewJson, Toast, OptionItem } from '../InfoView.types.js';
import { resolveComponent } from "@/components/helpers/resolveComponent.js";

interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Toast | undefined;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoViewJson: InfoviewJson;
    fieldOptions: Record<string, OptionItem[]>;
    setFieldOptions: (
        fieldName: string,
        options: OptionItem[]
    ) => void;
    components?: Record<string, ComponentType<any> | ReactNode>;
    AttachmentPopup?: ComponentType<any> | undefined;
}

export default function AccordianView({
    groups,
    methods = {},
    infoData,
    viewRenderers = {},
    sqlOpsUrls,
    refid,
    Reports,
    toast,
    handleAction = () => { },
    infoViewJson,
    fieldOptions,
    setFieldOptions,
    components,
    AttachmentPopup
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
                AttachmentPopup={AttachmentPopup}
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
                parent_data={infoData}
                AttachmentPopup={AttachmentPopup}
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

            <div className="mx-auto">
                <div className="space-y-1 flex flex-col min-h-0">
                    {groups && Object.entries(groups).map(([group, obj], index) => {

                        let visibleButtons = buttons ? Object.entries(buttons).filter(([_, val]) => {
                            if (val.groups) return val.groups.includes(group)
                            return false;
                        }) : [];

                        const node = resolveComponent(obj.component, components);
                        return <Accordion key={group} title={obj.label} isFirst={index === 0}>
                            {obj?.type === "fields" && obj?.fields ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    <div className={"grid grid-cols-12 gap-2"}>
                                        {obj.fields.map((field: FormField, index: number) => {
                                            if (isHidden(field.hidden)) return null;
                                            return <div
                                                key={field?.name ?? `field-${index}`}
                                                className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-2"
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
                                                    AttachmentPopup={AttachmentPopup}
                                                />
                                            </div>
                                        })}
                                    </div>
                                </div>
                            ) : obj?.type === "component" && node ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    {node}
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
