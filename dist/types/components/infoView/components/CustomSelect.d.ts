import { default as React } from 'react';
import { FormikProps } from 'formik';
import { FlatEntry } from '../utils.js';
import { FormField, OptionItem } from '../InfoView.types.js';
type MultiSelectProps = {
    field: FormField;
    isDisabled: boolean;
    loading: boolean;
    handleKeyDown: (e: React.KeyboardEvent, isSingle: boolean) => void;
    listRef: React.RefObject<HTMLDivElement | null>;
    labelClasses: string;
    options: OptionItem[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filteredOptions: FlatEntry[];
    highlightedIndex: number;
    formik: FormikProps<Record<string, any>>;
    executeFieldMethod: (trigger: "onChange" | "onBlur" | "onFocus" | "onClick", field: FormField, value?: any) => void;
    handlePersist: (value: any, field: FormField, module_refid: string) => void;
    module_refid: string;
    triggerRef: React.RefObject<HTMLDivElement | null>;
    open: boolean;
};
export default function CustomSelect({ field, isDisabled, handleKeyDown, labelClasses, listRef, search, filteredOptions, highlightedIndex, setSearch, formik, executeFieldMethod, handlePersist, module_refid, options, triggerRef, open, setOpen, loading }: MultiSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CustomSelect.d.ts.map