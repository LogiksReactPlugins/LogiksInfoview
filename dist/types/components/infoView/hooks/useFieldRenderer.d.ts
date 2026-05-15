import { FieldRendererProps, FormField, OptionItem } from '../InfoView.types.js';
import { handlePersist } from '../utils.js';
declare global {
    interface Window {
        formAPI: {
            setValue: (name: string, value: any) => void;
            getValue: (name: string) => any;
            setValues: (values: Record<string, any>) => void;
            getValues: () => Record<string, any>;
        };
        setFieldValue: (name: string, value: any) => void;
    }
}
export default function useFieldRenderer({ field, formik, methods, sqlOpsUrls, refid, module_refid, optionsOverride, setFieldOptions, chainMap }: FieldRendererProps): {
    setHighlightedIndex: import('react').Dispatch<import('react').SetStateAction<number>>;
    executeFieldMethod: (trigger: "onChange" | "onBlur" | "onFocus" | "onClick", field: FormField, value?: any) => Promise<void>;
    handleFileUpload: (files: FileList) => Promise<void>;
    handleKeyDown: (e: React.KeyboardEvent, is_single: boolean) => void;
    setSearch: import('react').Dispatch<import('react').SetStateAction<string>>;
    setOpen: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    setIsFocused: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelect: (val: string) => void;
    handlePersist: typeof handlePersist;
    setLoading: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    removeFile: (file: string) => Promise<void>;
    optionCount: number;
    baseInputClasses: string;
    focusClasses: string;
    labelClasses: string;
    search: string;
    highlightedIndex: number;
    options: OptionItem[];
    isDisabled: boolean;
    key: string;
    filteredOptions: import('../utils.js').FlatEntry[];
    open: boolean;
    listRef: import('react').RefObject<HTMLDivElement | null>;
    isFocused: boolean;
    exactMatch: import('../utils.js').FlatEntry | null | undefined;
    triggerRef: import('react').RefObject<HTMLDivElement | null>;
    loading: boolean;
    refreshOptions: () => void;
};
//# sourceMappingURL=useFieldRenderer.d.ts.map