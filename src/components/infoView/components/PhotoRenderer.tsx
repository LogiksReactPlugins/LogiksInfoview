import React, { useEffect, useState } from 'react';
import type { SqlEndpoints } from '../InfoView.types.js';
import { getPreviewUrl } from '../service.js';
import { DEFAULT_LOGO } from "../constant.js";
type FilePreviewTriggerProps = {
    filePath: string;
    field_name: string;
    sqlOpsUrls?: SqlEndpoints | undefined;
};

export default function PhotoRenderer({ filePath, field_name, sqlOpsUrls }: FilePreviewTriggerProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    useEffect(() => {

        if (!open || !sqlOpsUrls) return;
        let active = true;
        let objectUrl: string | null = null;

        getPreviewUrl(filePath, sqlOpsUrls).then((url) => {

            if (!active) return;
            objectUrl = url;
            setPreviewUrl(url);
        });

        return () => {
            active = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [open, filePath, sqlOpsUrls]);

    if (!previewUrl) return null;

    return (
        <img src={previewUrl}
        alt={field_name}
        title={field_name}
            className="object-contain h-full w-full"
            onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.currentTarget as HTMLImageElement; // <-- cast here
                target.onerror = null;
                target.src = DEFAULT_LOGO;
            }}
        />
    )
}
