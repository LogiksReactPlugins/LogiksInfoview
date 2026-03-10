import React, { useRef } from 'react'
import PhotoRenderer from './PhotoRenderer.js';
import type { FormikProps } from "formik";
import type { FormField, SqlEndpoints } from '../InfoView.types.js';
import { uploadFiles } from '../service.js';
import { handlePersist } from '../utils.js';

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
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (!files || files.length === 0) return;

        try {
            const uploads = await uploadFiles(sqlOpsUrls, files);
            const value = field.multiple
                ? uploads.map(f => f.path)
                : uploads[0]?.path;

            formik.setFieldValue(
                key,
                value
            );
            handlePersist(value, field, module_refid)
        } catch (err) {
            console.error("File upload failed", err);
            formik.setFieldError(key, "File upload failed");
        }

    };

    const files = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key]
            ? [formik.values[key]]
            : [];

    return (
        <div >

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            <div
                onClick={() => inputRef.current?.click()}
               className='flex flex-wrap gap-2'

            >
                {files.length > 0 ? files.map(file => (
                    <PhotoRenderer field_name={file} filePath={file} sqlOpsUrls={sqlOpsUrls} />
                )) : (
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/266/266033.png"
                        alt="avatar placeholder"
                        className="w-42 h-42 p-2 rounded-sm object-cover opacity-60"
                    />
                )}
            </div>
        </div>
    )
}
