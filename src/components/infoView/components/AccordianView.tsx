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
    const defaultRenderer: Record<RendererKey, (tab: InfoViewGroup) => React.JSX.Element> = {
        single: (tab) => (
            <SingleView tabObj={tab} methods={methods} />
        ),
        grid: (tab) => (
            <GridView tabObj={tab} methods={methods} />
        ),
    };




    return (

        <div className="bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100">

            <div className="p-4 mx-auto">
                <div className="space-y-2">
                    {groups && Object.entries(groups).map(([group, obj], index) => (
                        <Accordion key={group} title={group} isFirst={index === 0}>
                            {obj?.fields ? (
                                <div className="flex-1 max-h-full overflow-y-auto  custom-scrollbar">
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
                                viewRenderers[obj.config?.uimode]?.(obj) ||
                                defaultRenderer[obj.config?.uimode as "single" | "grid"]?.(obj) ||
                                <div>No renderer for this type</div>

                            ) : null}
                        </Accordion>
                    ))}
                </div>


            </div>
        </div>

    )
}
