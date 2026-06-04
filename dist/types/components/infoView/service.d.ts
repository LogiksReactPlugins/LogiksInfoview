import { AxiosResponse } from 'axios';
import { SelectOptions, SqlEndpoints, UploadResponse } from './InfoView.types.js';
type SqlSource = {
    table: string;
    columns: string;
    where?: Record<string, any>;
    refid?: string;
};
export declare const getHash: (endpoints: SqlEndpoints) => Promise<any>;
export declare const getRefId: (endpoints: SqlEndpoints, payload: {
    operation: "fetch" | "create" | "update";
    source: SqlSource;
    fields?: any;
    datahash: string;
    srcid: string | undefined;
}) => Promise<any>;
export declare const sqlClient: {
    fetch(endpoints: SqlEndpoints, payload: {
        source: SqlSource;
        fields?: any;
    }, dbopsid: string | undefined, module_refid: string | undefined): Promise<any>;
    create(endpoints: SqlEndpoints, payload: {
        source: SqlSource;
        values: any;
    }, module_refid: string | undefined): Promise<any>;
    update(endpoints: SqlEndpoints, payload: {
        source: SqlSource;
        values: any;
    }, module_refid: string | undefined): Promise<any>;
};
export declare function fetchDataByquery(sqlOpsUrls: Record<string, any>, query: Record<string, any> | undefined, querid: string | undefined, refid?: string | undefined, module_refid?: string | undefined, filter?: Record<string, any>): Promise<AxiosResponse<any>>;
export declare function runAjaxChain({ field, value, sqlOpsUrls, setFieldOptions, values, }: {
    field: any;
    value: any;
    sqlOpsUrls: any;
    setFieldOptions: (name: string, options: SelectOptions) => void;
    values: Record<string, any>;
}): Promise<void>;
export declare function getPreviewUrl(fileUrl: string, sqlOpsUrls: Record<string, any>): Promise<string>;
export declare function getPreviewUrlWithBlob(fileUrl: string, sqlOpsUrls: Record<string, any>): Promise<{
    previewUrl: string;
    blob: Blob;
}>;
export declare function uploadFiles(sqlOpsUrls: SqlEndpoints | undefined, files: FileList): Promise<UploadResponse[]>;
export declare function deleteFile(sqlOpsUrls: SqlEndpoints | undefined, fileId: number | string): Promise<any>;
export {};
//# sourceMappingURL=service.d.ts.map