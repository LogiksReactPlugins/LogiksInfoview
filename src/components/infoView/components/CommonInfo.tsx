
import { tailwindCols, toColWidth } from '../utils.js';

import InfoFieldRenderer from './InfoFieldRenderer.js';
import type { InfoViewField, InfoData, SqlEndpoints, SelectOptions } from '../InfoView.types.js';
import PhotoRenderer from './PhotoRenderer.js';
import { useMemo } from 'react';


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

    const avatarField = useMemo<InfoViewField | undefined>(
        () => commonInfo?.fields?.find(f => f.type === "avatar"),
        [commonInfo?.fields]
    );

    const avatarFieldName = avatarField?.name;

    const avatarValue =
        avatarFieldName && typeof infoData?.[avatarFieldName] === "string"
            ? infoData[avatarFieldName].trim()
            : "";
    return (
        <div className="bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Avatar */}
                {avatarField && (
                    <div className="lg:col-span-2 flex flex-col items-center">
                        <div className="relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center">
                            {avatarValue ? (
                                <PhotoRenderer
                                    field_name={avatarField.name}
                                    filePath={avatarValue}
                                    sqlOpsUrls={sqlOpsUrls}
                                />
                            ) : (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/266/266033.png"
                                    alt="avatar placeholder"
                                    className="w-full h-full object-cover opacity-60"
                                />
                            )}
                        </div>
                    </div>
                )}
                {/* Right Column - Details Grid */}
                <div className={`min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${avatarField ? "lg:col-span-10" : "lg:col-span-12"
                    }`}>

                    <div className="grid grid-cols-12 gap-2">
                        {commonInfo.fields?.map((field, index) => {

                            if (hiddenFields.includes(field.name)) return null;
                            if (field.type === "avatar") return null


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
