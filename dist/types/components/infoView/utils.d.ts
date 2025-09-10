import { InfoViewGroup, Infoview } from './InfoView.types.js';
export declare function determineViewMode(json: Infoview): string;
export declare function groupFields(fields: Record<string, any>): Record<string, InfoViewGroup>;
type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const tailwindGrid: Record<ColWidth, string>;
export declare const tailwindCols: Record<ColWidth, string>;
export declare function toColWidth(width: number | undefined): ColWidth;
export declare function toGrid(width: number | undefined): ColWidth;
export declare function copyToClipboard(content: string): Promise<void>;
export {};
//# sourceMappingURL=utils.d.ts.map