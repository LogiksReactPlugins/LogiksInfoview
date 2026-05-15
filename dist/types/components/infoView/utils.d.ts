import { FormikProps } from 'formik';
import { AutocompleteConfig, ChainMap, FileCategory, FileItem, FormField, GroupedOptions, InfoViewGroup, Infoview, OptionItem, SelectOptions } from './InfoView.types.js';
import * as Yup from "yup";
export declare function determineViewMode(json: Infoview): string;
export declare const isAbsoluteUrl: (path: string) => boolean;
export declare function groupFields(fields: Record<string, any>): Record<string, InfoViewGroup>;
export declare const getGeoFieldKeys: (fields: Record<string, Omit<FormField, "name">>) => string[];
export declare const groupOptions: (options: OptionItem[]) => Record<string, OptionItem[]>;
type ValidateFileInputParams = {
    e: React.ChangeEvent<HTMLInputElement>;
    existingFiles: string[];
    maxFiles: number;
    maxFileSize?: number | undefined;
};
export declare const validateFiles: ({ e, existingFiles, maxFiles, maxFileSize }: ValidateFileInputParams) => FileList | null;
export declare const getAltitudeFieldKeys: (fields: Record<string, Omit<FormField, "name">>) => string[];
export type GeolocationData = {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
};
export declare function fetchGeolocation(): Promise<GeolocationData>;
export declare function filterSavableValues(values: Record<string, any>, flatFields: FormField[]): Record<string, any>;
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
export declare const buildChainMap: (fields: FormField[]) => ChainMap;
export declare const replacePlaceholders: (input: any, vars: Record<string, string | number>) => any;
export declare const normalizeToObject: (res: any) => Record<string, any> | null;
export declare const formatOptions: (valueKey: string, labelKey: string, items: any[], groupKey?: string) => OptionItem[];
export declare const mergeOptions: (field: {
    options?: any;
    options_top?: any;
    options_bottom?: any;
}, dynamicOpts?: OptionItem[]) => OptionItem[];
export declare function resolveDisplayValue(fieldValue: unknown, options: OptionItem[]): unknown;
export declare const buildApiParams: ({ field, formValues, }: {
    field: FormField;
    formValues: Record<string, any>;
}) => Record<string, any>;
export declare const resolveDateValue: (value?: string | number) => string | number | undefined;
export declare const isHidden: (hidden?: boolean | string) => boolean;
export declare const intializeForm: (formFields: FormField[], initialValues: Record<string, any>, validationSchema: Record<string, Yup.AnySchema>, data?: Record<string, any>) => void;
export declare const isGroupedOptions: (options: SelectOptions) => options is GroupedOptions;
export declare function isAutocompleteConfig(ac: unknown): ac is AutocompleteConfig;
export declare function getSearchColumns(columns: string): string[];
export declare const getOptionLabel: (options: SelectOptions, value: string) => string | undefined;
export type FlatEntry = [string, string];
export declare const flattenOptions: (options: SelectOptions) => FlatEntry[];
export declare const sanitizeAlphaNumeric: (value: string, allowedSpecialChars?: string[]) => string;
export declare const normalizeOptions: (opts?: any) => OptionItem[];
type Row = Record<string, unknown>;
export declare const normalizeRowSafe: (row: Row) => Row;
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
export declare function sanitizeHtml(html: string): string;
export declare function readPersistedValues(module_refid: string): Record<string, any>;
export declare function getPersistentKey(field: FormField): string | null;
export declare function writePersistedValue(module_refid: string, key: string, value: any): void;
export declare function handlePersist(value: any, field: FormField, module_refid: string | undefined): void;
export declare function getErrorMessage(err: unknown): string;
export declare function getSuccessMessage(res: any): string;
export declare const buildFileValue: ({ uploads, currentValue, multiple, }: {
    uploads: FileItem[];
    currentValue: string | string[] | undefined;
    multiple?: boolean;
}) => string[];
export declare const getInputConfig: (field: FormField) => {
    accept?: string;
    capture?: "user" | "environment";
};
export declare const getIcon: (field: FormField) => "fa-camera" | "fa-camera-retro" | "fa-image";
export declare const getMaxDate: (max?: string | number) => string | number | undefined;
export declare const resetChain: (sourceKey: keyof ChainMap, chainMap: ChainMap, formik: FormikProps<Record<string, any>>, visited?: Set<keyof ChainMap>) => void;
export declare const getFirstRow: (res: any) => any;
export {};
//# sourceMappingURL=utils.d.ts.map