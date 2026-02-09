import type { ReactNode } from "react";
import type { ComponentType } from "react";
import type { AxiosRequestConfig } from "axios";
import type { FormikProps } from "formik";

export type DbOpsPayload = {
    refid: string | number;
    fields: Record<string, any>;
    datahash: string;
    refid1?: string | number;
}

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
    method?: string;
    queryid?: string;
}

export interface sqlQueryProps {
    table: string;
    cols: string;
    where?: Record<string, string>;
    orderby?: string;
    groupby?: string;
};


export interface InfoViewGroup {
    label: string;
    type: string;
    component?: string;
    fields?: InfoViewField[];
    config?: Record<string, any>;
    width?: number;
    vmode?: string
}

export interface Infoview {
    groups?: Record<string, InfoViewGroup>;
    template?: string;
}

export interface InfoviewJson {
    script?: string;
    fields: Record<string, Omit<InfoViewField, "name">>;
    infoview?: Infoview;
    source?: Record<string, any>,
    endPoints: SqlEndpoints;
    buttons?: Record<string, any>;
    forcefill?: Record<string, any>;
    module_refid?: string;
}

export interface InfoViewProps {

    infoViewJson: InfoviewJson;

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
   components?: Record<string, ComponentType<any> | ReactNode>;

    toast?: Record<string, Function>;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
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
    sqlOpsUrls: SqlEndpoints;
    data?: Record<string, string | number | boolean | null | undefined>; // or data?: Record<string, unknown> if optional
    refid?: string | undefined;
    module_refid?: string | undefined;
    optionsOverride?: SelectOptions;
    setFieldOptions: (
        fieldName: string,
        options: SelectOptions
    ) => void;
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
    operation?: string;
    dbopsGetHash: string;
    dbopsFetch?: string;
    dbopsUpdate?: string;
    dbopsCreate?: string;
    registerQuery?: string;
    runQuery?: string;
    uploadURL?: string;
    refid?: string;
};

type SqlSrcByTable = {
    table: string;
    columns: string;
    where?: Record<string, string>;
    queryid?: never;
};

type SqlSrcByQueryId = {
    queryid: string;
    where?: Record<string, string>;
    table?: never;
    columns?: never;
};

type AutocompleteSrc = SqlSrcByTable | SqlSrcByQueryId;

export type AutocompleteConfig = {
    target: string;
    src: AutocompleteSrc;
};

export type FileCategory = "image" | "pdf" | "video" | "text" | "other";

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
    method?: string;
    vmode?: string;
    queryid?: string;
    min?: number | string;
    max?: number | string;
    minlength?: number;
    maxlength?: number;
    onChange?: string;
    onBlur?: string;
    onFocus?: string;
    onClick?: string;
    step?: string | number;

}

export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints: SqlEndpoints;
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

    setEditData?: React.Dispatch<
        React.SetStateAction<Record<string, any> | null>
    >;
    callback?: (res: any) => void;
    components?: Record<string, ReactNode>
    initialvalues?: Record<string, any>;
    module_refid?: string | undefined;

}


export interface BaseFormViewProps {
    title?: string | undefined;
    data?: Record<string, any>;
    onSubmit: (data: Record<string, any>) => void;
    onCancel: () => void;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>;
    widget?: boolean | undefined;
    sqlOpsUrls: SqlEndpoints;
    refid?: string | undefined;
    module_refid?: string | undefined

}

export interface SimpleFormViewProps extends BaseFormViewProps {
    fields: Record<string, Omit<FormField, "name">>;
}

export interface FieldRendererProps {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>
    sqlOpsUrls?: SqlEndpoints;
    refid?: string | undefined;
    module_refid?: string | undefined;
    optionsOverride?: SelectOptions;
    setFieldOptions?: (
        fieldName: string,
        options: SelectOptions
    ) => void;
}


export interface TabViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    components?: Record<string, ComponentType<any> | ReactNode>;
    viewRenderers?: Record<string, (tab: InfoViewGroup, tabName: string) => React.ReactNode>;
    layoutConfig?: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    viewMode: string;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Record<string, Function>;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoViewJson: InfoviewJson;
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (
        fieldName: string,
        options: SelectOptions
    ) => void;
}


export interface VerticalNavProps {
    groups: Record<string, InfoViewGroup>;
    groupNames: string[];
    setActiveTabIndex: (index: number) => void;
    activeTabIndex: number;

}


export interface TopNavProps extends VerticalNavProps {
    // extra props only TopNav needs
    showScrollHint: boolean;
    layoutConfig: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    tabsNavRef: React.RefObject<HTMLDivElement | null>;
}

export interface ContentAreaProps extends VerticalNavProps {
    layoutConfig: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    components?: Record<string, ComponentType<any> | ReactNode>;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoData: InfoData;
    tabObj: InfoViewGroup | null;
    renderView: (tab: InfoViewGroup, tabName: string) => React.ReactNode;
    methods?: Record<string, Function>;
    sqlOpsUrls: SqlEndpoints;
    refid?: string | undefined;
    module_refid?: string | undefined;
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (name: string, options: SelectOptions) => void;
    buttons?: Record<string, any> | undefined;

}





