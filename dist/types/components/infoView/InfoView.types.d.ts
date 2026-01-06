export interface InfoViewField {
    name: string;
    label?: string;
    width?: number;
    group?: string;
    type?: string;
    required?: boolean;
    options?: Record<string, any>;
    source?: Record<string, any>;
    valueKey?: string;
    labelKey?: string;
    groupKey?: string;
    table?: string;
    columns?: string;
    where?: Record<string, string>;
    groupid?: string;
    cols?: string;
}
export interface InfoViewGroup {
    label: string;
    type: string;
    fields?: InfoViewField[];
    config?: Record<string, any>;
    width?: number;
    vmode?: string;
}
export interface Infoview {
    groups?: Record<string, Omit<InfoViewGroup, "fields">>;
    template?: string;
}
export interface InfoViewProps {
    infoViewJson: {
        script?: string;
        fields: Record<string, Omit<InfoViewField, "name">>;
        infoview?: Infoview;
        source?: Record<string, any>;
        endPoints?: Record<string, any>;
    };
    /** Fields to hide */
    hiddenFields?: string[];
    /** Custom grouping function */
    groupFieldsFn?: (fields: Record<string, any>) => Record<string, InfoViewGroup>;
    /** Style overrides */
    layoutConfig?: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    /** Custom view renderers */
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    /** Whether to show scroll buttons */
    data?: Record<string, any>;
    methods?: Record<string, Function>;
}
export type FlatOptions = Record<string, string>;
export type GroupedOptions = Record<string, Record<string, string>>;
export type SelectOptions = FlatOptions | GroupedOptions;
export interface InfoData {
    [key: string]: string | number | boolean | null | undefined;
}
export interface InfoFieldRendererProps {
    field: InfoViewField;
    methods?: Record<string, Function>;
    sqlOpsUrls?: Record<string, any> | undefined;
    data?: Record<string, string | number | boolean | null | undefined>;
    refid?: string | undefined;
}
export interface sqlQueryProps {
    table: string;
    cols: string;
    where?: Record<string, string>;
}
//# sourceMappingURL=InfoView.types.d.ts.map