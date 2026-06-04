import React, { useRef, useState } from 'react'
import PhotoRenderer from './PhotoRenderer.js';
import type { FormikProps } from "formik";
import type { FormField, SqlEndpoints } from '../InfoView.types.js';
import { deleteFile, uploadFiles } from '../service.js';
import { buildFileValue, getIcon, getInputConfig, handlePersist } from '../utils.js';

type PhotoAvatarRendererProps = {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    sqlOpsUrls?: SqlEndpoints | undefined;
    module_refid?: string | undefined;
};

export default function PhotoAvatarRenderer({
    formik,
    field,
    sqlOpsUrls,
    module_refid
}: PhotoAvatarRendererProps) {
    let key = field?.name;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const max = field.max !== undefined ? Number(field.max) : Infinity;
    const [loading, setLoading] = useState(false);
    const files = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key]
            ? [formik.values[key]]
            : [];

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.currentTarget.files;
        if (!selectedFiles?.length) return;

        const fileArray = Array.from(e.currentTarget.files || [])
        const total = files.length + fileArray.length;
        if (total > max) {
            alert(`You can upload maximum ${max} file(s)`);
            e.currentTarget.value = "";
            return;
        }

        try {
            setLoading(true);
            const uploads = await uploadFiles(sqlOpsUrls, selectedFiles);
            const value = buildFileValue({
                uploads,
                currentValue: formik.values[key],
                multiple: field.multiple ?? false,
            });

            formik.setFieldValue(
                key,
                value
            );
            handlePersist(value, field, module_refid);
            e.target.value = "";
        } catch (err) {
            console.error("File upload failed", err);
            formik.setFieldError(key, "File upload failed");
        } finally {
            setLoading(false);
        }

    };


    const removeFile = async (file: string) => {
        const existing: string[] = Array.isArray(formik.values[key])
            ? formik.values[key]
            : [];

        const fileId = file.split("&")[0];
        if (!fileId) return;

        const updated = existing.filter((f) => f.split("&")[0] !== fileId);

        formik.setFieldValue(key, updated);


        try {
            if (!file.split("&")[0]) return
            await deleteFile(sqlOpsUrls, fileId);
            handlePersist(updated, field, module_refid);
        } catch (err) {
            formik.setFieldValue(key, existing);
            window.alert("Failed to delete file due to a technical issue. Please try again.")
        }
    };



    const inputConfig = getInputConfig(field);
    const isMultiple = field.multiple === true;
    return (
        <div >
            <label className="block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                multiple={isMultiple}
                {...inputConfig}
                onChange={handleFileChange}
            />

            <div
                className='flex flex-wrap gap-2'
            >
                {files.length > 0 ? files.map(file => (
                    <div key={file} className="relative group">
                        <PhotoRenderer
                            field_name={file}
                            filePath={file}
                            sqlOpsUrls={sqlOpsUrls}
                        />

                        {/*Remove */}
                        <button
                            type="button"
                            onClick={() => {
                                removeFile(file)
                            }}
                            className="absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition"
                        >
                            ×
                        </button>
                    </div>
                )) : null}


                <div
                    onClick={() => {
                        if (!loading) {
                            inputRef.current?.click();
                        }
                    }}
                    className="w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer"
                >
                    {loading ? (
                        <i className="fa-solid fa-spinner fa-spin text-2xl text-gray-900" />
                    ) : (
                        <i className={`fa-solid ${getIcon(field)} text-2xl text-gray-400`} />
                    )}
                </div>

            </div>
            {formik.touched[key] && formik.errors[key] &&
                <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
            }
        </div>
    )
}
