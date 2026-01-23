import { AxiosResponse } from 'axios';
import { AutocompleteConfig, FileCategory, FlatOptions, FormField, GroupedOptions, InfoViewGroup, Infoview, SelectOptions } from './InfoView.types.js';
import * as Yup from "yup";
export declare function determineViewMode(json: Infoview): string;
export declare function groupFields(fields: Record<string, any>): Record<string, InfoViewGroup>;
export declare const getGeoFieldKeys: (fields: Record<string, Omit<FormField, "name">>) => string[];
export declare function fetchGeolocation(): Promise<string | null>;
export declare function transformedObject(originalObject: Record<string, any>, operation?: string): Record<string, {
    label: string;
    required: boolean;
}>;
export declare function flatFields(fields: Record<string, Omit<FormField, "name">>, operation?: string): FormField[];
type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const tailwindGrid: Record<ColWidth, string>;
export declare const tailwindCols: Record<ColWidth, string>;
export declare function toColWidth(width: number | undefined): ColWidth;
export declare function toGrid(width: number | undefined): ColWidth;
export declare function copyToClipboard(content: string): Promise<void>;
export declare const replacePlaceholders: (input: any, vars: Record<string, string | number>) => any;
export declare const normalizeToObject: (res: any) => Record<string, any> | null;
export declare const formatOptions: (valueKey: string, labelKey: string, items: any[], groupKey?: string) => SelectOptions;
export declare function resolveDisplayValue(rawVal: unknown, options: FlatOptions): unknown;
export declare const isHidden: (hidden?: boolean | string) => boolean;
export declare const intializeForm: (formFields: FormField[], initialValues: Record<string, any>, validationSchema: Record<string, Yup.AnySchema>, data?: Record<string, any>) => void;
export declare const isGroupedOptions: (options: SelectOptions) => options is GroupedOptions;
export declare function isAutocompleteConfig(ac: unknown): ac is AutocompleteConfig;
export declare function getSearchColumns(columns: string): string[];
export declare const getOptionLabel: (options: SelectOptions, value: string) => string | undefined;
type FlatEntry = [string, string];
export declare const flattenOptions: (options: SelectOptions) => FlatEntry[];
export declare function fetchDataByquery(sqlOpsUrls: Record<string, any>, query: Record<string, any> | undefined, querid: string | undefined, refid?: string | undefined, module_refid?: string | undefined, filter?: Record<string, any>): Promise<AxiosResponse<any>>;
export declare function normalizeOptions(options?: SelectOptions): FlatOptions;
type Row = Record<string, unknown>;
export declare const normalizeRowSafe: (row: Row) => Row;
export declare function runAjaxChain({ field, value, sqlOpsUrls, setFieldOptions, }: {
    field: any;
    value: any;
    sqlOpsUrls: any;
    setFieldOptions: (name: string, options: SelectOptions) => void;
}): Promise<void>;
type DrawnSignature = Array<{
    d: string;
    color?: string;
    width?: number;
}>;
type TextSignature = {
    text: string;
    style?: {
        fontSize?: number;
        fontFamily?: string;
        textColor?: string;
    };
};
type DecodedSignature = {
    type: "drawn";
    paths: DrawnSignature;
} | {
    type: "text";
    data: TextSignature;
} | {
    type: "html";
    html: string;
} | {
    type: "image";
    src: string;
};
export declare function decodeSignature(val: any): DecodedSignature | null;
export declare function getFileExtension(path?: string): string;
export declare function getMimeCategory(ext: string): "image" | "pdf" | "video" | "text" | "other";
export declare const fileIconClassMap: Record<FileCategory, string>;
export {};
//# sourceMappingURL=utils.d.ts.map