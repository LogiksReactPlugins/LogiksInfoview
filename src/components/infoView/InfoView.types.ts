export interface InfoViewField {
    name: string;
    label?: string;
    width?: number;
    group?: string;
    type?: string;
    required?: boolean;
}

export interface InfoViewGroup {
    label: string;
    type: string;
    fields?: InfoViewField[];
    config?: Record<string, any>;
    width?: number;
    vmode?:string
}

export interface Infoview {
    groups?: Record<string, Omit<InfoViewGroup, "fields">>,
    template?: string
}

export interface InfoViewProps {

    formJson: {
        script?: string;
        fields: Record<string, Omit<InfoViewField, "name">>;
        infoview?: Infoview;
        source?: Record<string, any>
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
    methods?: Record<string, Function>
}


export interface InfoData {
    [key: string]: string | number | boolean | null | undefined;
    // add other fields here...
}

export interface InfoFieldRendererProps {
    field: InfoViewField;
    data?: Record<string, string | number | boolean | null | undefined>; // or data?: Record<string, unknown> if optional
}




