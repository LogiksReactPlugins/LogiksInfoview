import { SqlEndpoints } from '../InfoView.types.js';
type FilePreviewProps = {
    fileUrl: string;
    category: string;
    sqlOpsUrls: SqlEndpoints | undefined;
    blob: Blob | null;
    filePath: string;
};
declare const FilePreview: ({ fileUrl, category, blob, sqlOpsUrls, filePath, }: FilePreviewProps) => import("react").JSX.Element | null;
export default FilePreview;
//# sourceMappingURL=FilePreview.d.ts.map