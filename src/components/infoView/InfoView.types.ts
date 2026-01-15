import type { ReactNode } from "react";
import type { ComponentType } from "react";
import type { AxiosRequestConfig } from "axios";

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
    vmode?: string
}

export interface Infoview {
    groups?: Record<string, Omit<InfoViewGroup, "fields">>,
    template?: string
}

export interface InfoViewProps {

    infoViewJson: {
        script?: string;
        fields: Record<string, Omit<InfoViewField, "name">>;
        infoview?: Infoview;
        source?: Record<string, any>,
        endPoints?: Record<string, any>;
        buttons?:Record<string, any>;
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
    methods?: Record<string, Function>,
   Reports?: ComponentType<any>;
 
  toast?: Record<string, Function>; 
  handleAction?: Function;
}

export type FlatOptions = Record<string, string>;
export type GroupedOptions = Record<string, Record<string, string>>;
export type SelectOptions = FlatOptions | GroupedOptions;
export interface InfoData {
    [key: string]: string | number | boolean | null | undefined;
    // add other fields here...
}

export interface InfoFieldRendererProps {
    field: InfoViewField;
    methods?: Record<string, Function>;
    sqlOpsUrls?: Record<string, any> | undefined;
    data?: Record<string, string | number | boolean | null | undefined>; // or data?: Record<string, unknown> if optional
    refid?: string | undefined;
}

export interface sqlQueryProps {
    table: string;
    cols: string;
    where?: Record<string, string>;
};

export interface SqlEndpoints {
    baseURL: string;
    dbopsGetRefId: string;
    accessToken: string;
    operation: string;
    dbopsGetHash: string;
    dbopsFetch?: string;
    dbopsUpdate?: string;
    dbopsCreate?: string;
};

export type AutocompleteConfig = {
    target: string;
    src: {
        table: string;
        columns?: string;
        where?: Record<string, string>;
    };
};

 export interface FormField {
    name: string;
    label?: string;
    width?: number | string;
    options?: Record<string, any>;
    group?: string;
    type?: string;
    regex?: string;
    required?: boolean;
    disabled?: boolean;
    error_message?: string;      // error message if regex fails
    placeholder?: string;        // input placeholder
    field_error?: string;
    axiosObject?: AxiosRequestConfig,
    valueKey?: string;
    labelKey?: string;
    groupKey?: string;
    source?: Record<string, any>;
    multiple?: boolean;
    icon?: string;
    table?: string;
    columns?: string;
    where?: Record<string, string>;
    autocomplete?: "off" | AutocompleteConfig;
    ajaxchain?: AutocompleteConfig | AutocompleteConfig[];
    validate?: Record<string, string | number>;
    groupid?: string;
    hidden?: boolean;
    value?: string | undefined;
    default?: string | number | boolean | string[] | number[] | null;
    cols?: string;
    search?: boolean;
    method?:string;
    vmode?:string;

}

export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints?: SqlEndpoints;
    forcefill?: Record<string, string>;
    fields: Record<string, Omit<FormField, "name">>;
    source: Record<string, any>;
    widget?: boolean

   
}

export interface FormProps {

    formJson: FormJson;
    userid?: string | null;
    methods?: Record<string, Function>
    onCancel?: () => void;
    callback?: (res: any) => void;
    components?: Record<string, ReactNode>
    initialvalues?: Record<string, any>

}




