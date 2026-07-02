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
type FieldName = string;
export type ChainMap = Record<FieldName, FieldName[]>;
export interface CommonInfoProps {
    fields: FormField[];
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>
    sqlOpsUrls?: SqlEndpoints | undefined;
    refid?: string | undefined;
    module_refid?: string | undefined
    fieldOptions: Record<string, OptionItem[]>;

    setFieldOptions: (
        fieldName: string,
        options: OptionItem[]
    ) => void;
    chainMap: ChainMap;
    setFieldLoading?: (
        fieldName: string,
        loading: boolean
    ) => void;

    fieldLoading?: boolean;
    AttachmentPopup?: ComponentType<any> | undefined;
}

export interface FormField {
    name: string;
    label?: string;
    parameter?: string | Record<string, string>;
    width?: number | string;
    height?: number | string;
    language?: string;
    options?: Record<string, any>;
    options_top?: Record<string, any>;
    options_bottom?: Record<string, any>;
    group?: string;
    type?: string;
    regex?: string;
    required?: boolean;
    disabled?: boolean;
    error_message?: string;      // error message if regex fails
    placeholder?: string;        // input placeholder
    field_error?: string;
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
    validate?: Record<string, string | number | boolean>;
    groupid?: string;
    hidden?: boolean;
    value?: string | undefined;
    default?: string | number | boolean | string[] | number[] | null;
    cols?: string;
    search?: boolean;
    method?: string;
    vmode?: string;
    "no-option"?: string;
    "nodb"?: boolean;
    "nosave"?: boolean;
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
    persistent?: string | boolean;
    content?: string;
    accept?: string;
    file_size?: number;
    buttons?: Record<string, any> | undefined;
    capture?: "user" | "environment";

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
    fields?: FormField[];
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
    fields: Record<string, Omit<FormField, "name">>;
    infoview?: Infoview;
    source?: Record<string, any>,
    endPoints: SqlEndpoints;
    buttons?: Record<string, any>;
    forcefill?: Record<string, any>;
    module_refid?: string;
}

export interface Toast {
    (message: string): void;
    success?: (message: string) => void;
    error?: (message: string) => void;
    info?: (message: string) => void;
    warn?: (message: string) => void;
}

export interface InfoViewProps {

    infoViewJson: InfoviewJson;
    initialvalues?: Record<string, any>;

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

    toast?: Toast;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    AttachmentPopup?: ComponentType<any>;
}

export type OptionItem = {
    value: string;
    label: string;
    group?: string;
    title?: string
};

export type FlatOptions = Record<string, string>;
export type GroupedOptions = Record<string, Record<string, string>>;
export type SelectOptions = FlatOptions | GroupedOptions | OptionItem[];;

export interface InfoData {
    [key: string]: string | number | boolean | null | undefined;
    // add other fields here...
}

export interface InfoFieldRendererProps {
    field: FormField;
    methods?: Record<string, Function>;
    sqlOpsUrls: SqlEndpoints;
    data?: Record<string, string | number | boolean | null | undefined>; // or data?: Record<string, unknown> if optional
    refid?: string | undefined;
    module_refid?: string | undefined;
    optionsOverride?: OptionItem[];
    setFieldOptions: (
        fieldName: string,
        options: OptionItem[]
    ) => void;
    AttachmentPopup?: ComponentType<any> | undefined;
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
    removeFileURL?: string;
    refid?: string;
    native?: {
        downloadFile?: (
            blob: Blob,
            fileName: string
        ) => Promise<void>;
    };
};


type ApiSrc = {
    type: string;
    endpoint: string;
    method?: string;
    table?: never;
    columns?: never;
    queryid?: never;
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

type AutocompleteSrc = ApiSrc | SqlSrcByTable | SqlSrcByQueryId;

export type AutocompleteConfig = {
    target: string;
    src: AutocompleteSrc;
};

export type FileCategory = "image" | "pdf" | "video" | "text" | "other";



export type FileItem = {
    fileId: number;
    path: string;
    name?: string;
    mime?: string;
    size?: number;
    status: string;
};

export type UploadResponse = FileItem & {
    status: string;
};

export interface FormJson {
    title?: string | undefined;
    template?: string;
    endPoints: SqlEndpoints;
    forcefill?: Record<string, string>;
    fields: Record<string, Omit<FormField, "name">>;
    source: Record<string, any>;
    widget?: boolean;
    module_refid?: string | undefined;
    submit_msg?: boolean | string;


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
    initialvalues?: Record<string, any>;
    module_refid?: string | undefined;
    toast?: Toast | undefined;
    AttachmentPopup?: ComponentType<any> | undefined;
    parent_data: InfoData

}
export interface FormButtonLabels {
    submit?: string;
    reset?: string;
    cancel?: string;
}

export interface BaseFormViewProps {
    title?: string | undefined;
    data?: Record<string, any>;
    onSubmit: (values: Record<string, any>) => Promise<any>;
    onCancel: () => void;
    methods?: Record<string, Function>;
    widget?: boolean | undefined;
    sqlOpsUrls?: SqlEndpoints | undefined;
    refid?: string | undefined;
    module_refid?: string | undefined;
    buttons?: Record<string, any> | undefined;
    button_labels?: FormButtonLabels | undefined;
    AttachmentPopup?: ComponentType<any> | undefined;
    parent_data: InfoData

}

export interface SimpleFormViewProps extends BaseFormViewProps {
    fields: Record<string, Omit<FormField, "name">>;
}

export interface FieldRendererProps {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    methods?: Record<string, Function>;
    components?: Record<string, ReactNode>
    sqlOpsUrls?: SqlEndpoints | undefined;
    refid?: string | undefined;
    module_refid?: string | undefined
    optionsOverride?: OptionItem[];
    setFieldOptions?: (
        fieldName: string,
        options: OptionItem[]
    ) => void;
    chainMap: ChainMap;
    setFieldLoading?: (
        fieldName: string,
        loading: boolean
    ) => void;

    fieldLoading?: boolean;
    AttachmentPopup?: ComponentType<any> | undefined;
    parent_data: InfoData
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
    toast?: Toast | undefined;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoViewJson: InfoviewJson;
    fieldOptions: Record<string, OptionItem[]>;
    setFieldOptions: (
        fieldName: string,
        options: OptionItem[]
    ) => void;
    AttachmentPopup?: ComponentType<any> | undefined;
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
    fieldOptions: Record<string, OptionItem[]>;
    setFieldOptions: (name: string, options: OptionItem[]) => void;
    buttons?: Record<string, any> | undefined;
    AttachmentPopup?: ComponentType<any> | undefined;

}





