
import { tailwindCols, toColWidth } from '../utils.js';

import InfoFieldRenderer from './InfoFieldRenderer.js';
import type { InfoViewField, InfoData, SqlEndpoints, SelectOptions } from '../InfoView.types.js';
import PhotoRenderer from './PhotoRenderer.js';


interface CommonInfoProps {
    infoData: InfoData;
    sqlOpsUrls: SqlEndpoints;
    commonInfo: {
        fields?: InfoViewField[];
        label: string;
        type: string
    };
    methods: Record<string, Function>;
    hiddenFields?: string[];
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (
        fieldName: string,
        options: SelectOptions
    ) => void;
    refid: string;
    module_refid: string | undefined;
}

export default function CommonInfo({
    commonInfo,
    infoData,
    hiddenFields = [],
    sqlOpsUrls,
    setFieldOptions,
    fieldOptions,
    module_refid,
    refid,
    methods
}: CommonInfoProps) {

    return (
        <div className="bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Avatar */}
                <div className="lg:col-span-2 flex flex-col items-center">
                    <div className="relative w-42 h-42 ">
                        {
                            commonInfo?.fields?.filter(field => field.type === "avatar").map((field) => {
                                const value = infoData[field.name];
                                if (typeof value !== "string" || value.trim() === "") {
                                    return null;
                                }
                                return <PhotoRenderer field_name={field.name} filePath={value} sqlOpsUrls={sqlOpsUrls} />
                            })

                        }

                    </div>
                </div>
                {/* Right Column - Details Grid */}
                <div className="lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar">

                    <div className="grid grid-cols-12 gap-2">
                        {commonInfo.fields?.map((field, index) => {
                            const value = infoData?.[field.name];
                            if (hiddenFields.includes(field.name)) return null;
                            if (field.type === "avatar") return null
                            if (!value && value !== false && value !== 0) return null;

                            return (
                                <div key={field.name} className={`hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(field.width)] || "lg:col-span-4"}`}>
                                    <InfoFieldRenderer
                                        key={field?.name}
                                        field={field}
                                        data={infoData ?? {}}
                                        sqlOpsUrls={sqlOpsUrls}



                                        methods={methods}
                                        refid={refid}

                                        module_refid={module_refid}
                                        setFieldOptions={setFieldOptions}
                                        {...(fieldOptions[field.name]
                                            ? { optionsOverride: fieldOptions[field.name] }
                                            : {})}
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
