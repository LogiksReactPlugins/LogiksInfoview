import { SqlEndpoints } from '../InfoView.types.js';
type FilePreviewProps = {
    fileUrl: string;
    category: string;
    sqlOpsUrls?: SqlEndpoints | undefined;
    blob: Blob | null;
};
declare const FilePreview: ({ fileUrl, category, blob, sqlOpsUrls, }: FilePreviewProps) => import("react/jsx-runtime").JSX.Element | null;
export default FilePreview;
//# sourceMappingURL=FilePreview.d.ts.map