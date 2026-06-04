import React, { useEffect, useState } from 'react';
import type { SqlEndpoints } from '../InfoView.types.js';
import { getPreviewUrl } from '../service.js';

type FilePreviewTriggerProps = {
    filePath: string;
    field_name: string;
    sqlOpsUrls?: SqlEndpoints | undefined;
};

export default function PhotoRenderer({ filePath, field_name, sqlOpsUrls }: FilePreviewTriggerProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const cleanPath = filePath.replace(/^[^&]*&/, "");
    useEffect(() => {

        if (!open || !sqlOpsUrls) return;
        let active = true;
        let objectUrl: string | null = null;

        getPreviewUrl(cleanPath, sqlOpsUrls).then((url) => {

            if (!active) return;
            objectUrl = url;
            setPreviewUrl(url);
        });

        return () => {
            active = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [open, cleanPath, sqlOpsUrls]);

    if (!previewUrl) return null;

    return (
        <div className="h-24 w-24 rounded border border-dashed bg-gray-50 flex items-center justify-center">
            {previewUrl ? (
                <img
                    alt={field_name}
                    title={field_name}
                    src={previewUrl}
                    className="h-24 w-24 object-cover rounded"
                />
            ) : (
                <i className="fa-regular fa-image text-gray-400 text-2xl" />
            )}
        </div>
    )
}
