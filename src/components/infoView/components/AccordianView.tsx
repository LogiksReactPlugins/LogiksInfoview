import React from 'react'
import InfoFieldRenderer from './InfoFieldRenderer.js'
import Accordion from './Accordian.js';
import SingleView from './SingleView.js';
import GridView from './GridView.js';

import { groupFields, tailwindCols, tailwindGrid, toColWidth } from '../utils.js';
import type { InfoViewGroup, InfoViewProps, InfoViewField, InfoData } from '../InfoView.types.js';

interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
}

export default function AccordianView({
    groups,
    methods = {},
    infoData,
    viewRenderers = {},
}
    : AccordianViewProps) {


    type RendererKey = "single" | "grid";
    const defaultRenderer: Record<RendererKey, (tab: InfoViewGroup, tabName: string) => React.JSX.Element> = {
        single: (tab, tabName) => (
            <SingleView tabObj={tab} methods={methods} tabName={tabName} />
        ),
        grid: (tab, tabName) => (
            <GridView tabObj={tab} methods={methods} tabName={tabName} />
        ),
    };




    return (

        <div className="bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100">

            <div className="p-4 mx-auto">
                <div className="space-y-2 flex flex-col min-h-0">
                    {groups && Object.entries(groups).map(([group, obj], index) => {
                        console.log("obj",obj)
                        return <Accordion key={group} title={group} isFirst={index === 0}>
                            {obj?.fields ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    <div className={"grid grid-cols-12 gap-2"}>
                                        {obj.fields.map((field: InfoViewField, index: number) => (
                                            <div
                                                key={field?.name ?? `field-${index}`}
                                                className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(field.width)] || "lg:col-span-2"
                                                    }`}
                                            >
                                                <InfoFieldRenderer field={field} data={infoData ?? {}} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : obj ? (
                                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                                    {viewRenderers[obj.config?.uimode]?.(obj) ||
                                        defaultRenderer[obj.config?.uimode as "single" | "grid"]?.(obj, group) ||
                                        <div>No renderer for this type</div>}
                                </div>

                            ) : null}
                        </Accordion>
    })}
                </div>


            </div>
        </div>

    )
}
