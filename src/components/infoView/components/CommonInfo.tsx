import React from 'react';
import { groupFields, tailwindCols, tailwindGrid, toColWidth } from '../utils.js';
import { DEFAULT_LOGO } from "../constant.js";
import InfoFieldRenderer from './InfoFieldRenderer.js';
import type { InfoViewField, InfoData } from '../InfoView.types.js';



interface CommonInfoProps {
    infoData: InfoData;
    commonInfo: {
        fields?: InfoViewField[];
        label: string;
        type: string
    };
    hiddenFields?: string[];
}

export default function CommonInfo({ commonInfo, infoData, hiddenFields = [] }: CommonInfoProps) {

    return (
        <div className="bg-white border border-gray-100 p-4  ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Avatar */}
                <div className="lg:col-span-2 flex flex-col items-center">
                    <div className="relative w-42 h-42">
                        {
                            <img
                                src={String(infoData.avatar_photo)}
                                alt="Profile"
                                className=" w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg"
                                onError={(e) => {
                                    // Fallback to placeholder if image fails to load
                                    const target = e.currentTarget as HTMLImageElement; // <-- cast here
                                    target.onerror = null;
                                    target.src = DEFAULT_LOGO;
                                }}
                            />
                        }


                    </div>
                </div>
                {/* Right Column - Details Grid */}
                <div className="lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar">

                    <div className="grid grid-cols-12 gap-2">
                        {commonInfo.fields?.map((field, index) => {
                            const value = infoData?.[field.name];
                            if (hiddenFields.includes(field.name)) return null;
                            if (!value && value !== false && value !== 0) return null;

                            return (
                                <div key={field.name} className={`hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(field.width)] || "lg:col-span-4"}`}>
                                    <InfoFieldRenderer
                                        key={field?.name || index}
                                        field={field}
                                        data={infoData ?? {}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
