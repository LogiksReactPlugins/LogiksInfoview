import { FlatOptions, FormField, InfoViewGroup, Infoview } from './InfoView.types.js';
export declare function determineViewMode(json: Infoview): string;
export declare function groupFields(fields: Record<string, any>): Record<string, InfoViewGroup>;
export declare const getGeoFieldKeys: (fields: Record<string, Omit<FormField, "name">>) => string[];
export declare function fetchGeolocation(): Promise<string | null>;
export declare function transformedObject(originalObject: Record<string, any>, operation?: string): Record<string, {
    label: string;
    required: boolean;
}>;
type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const tailwindGrid: Record<ColWidth, string>;
export declare const tailwindCols: Record<ColWidth, string>;
export declare function toColWidth(width: number | undefined): ColWidth;
export declare function toGrid(width: number | undefined): ColWidth;
export declare function copyToClipboard(content: string): Promise<void>;
export declare const replacePlaceholders: (input: any, vars: Record<string, string | number>) => any;
export declare const normalizeToObject: (res: any) => Record<string, any> | null;
export declare const formatOptions: (valueKey: string, labelKey: string, res: any) => FlatOptions;
export declare function resolveDisplayValue(rawVal: unknown, options: Record<string, string>): unknown;
export {};
//# sourceMappingURL=utils.d.ts.map