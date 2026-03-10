import React from 'react';
import type { FormikProps } from "formik";
import { getOptionLabel, type FlatEntry } from '../utils.js';
import type { FormField, SelectOptions } from '../InfoView.types.js';
import { DropdownPortal } from './PortalDropdown.js';


type MultiSelectProps = {
    field: FormField;
    isDisabled: boolean;


    handleKeyDown: (e: React.KeyboardEvent, isSingle: boolean) => void;


    listRef: React.RefObject<HTMLDivElement | null>;

    valueArray: string[];
    labelClasses: string;
    options: SelectOptions;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

    filteredOptions: FlatEntry[];
    highlightedIndex: number;
 

    formik: FormikProps<Record<string, any>>;
    executeFieldMethod: (
        trigger: "onChange" | "onBlur" | "onFocus" | "onClick",
        field: FormField,
        value?: any
    ) => void;
    handlePersist: (value: any, field: FormField, module_refid: string) => void;
    module_refid: string;
    triggerRef: React.RefObject<HTMLDivElement | null>;
    open: boolean;
};

export default function MultiSelect({
    field,
    isDisabled,
    handleKeyDown,
    valueArray,
    labelClasses,
    listRef,
    search,
    filteredOptions,
    highlightedIndex,
    setSearch,
    formik,
  
    executeFieldMethod,
    handlePersist,
    module_refid,
    options,
    triggerRef,
    open,
    setOpen

}: MultiSelectProps) {

    const key = field.name;
    return (
        <div className="relative">
            <label className={labelClasses}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div

                className={`
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${isDisabled
                        ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-white border-gray-300 cursor-pointer"}
  `}
                tabIndex={0}
                ref={triggerRef}
                onClick={() => {
                    setOpen(v => !v);
                }}
                onKeyDown={(e) => {
                    if (isDisabled) return;
                    handleKeyDown(e, false)
                }}
                onBlur={() => {
                    if (field.multiple) return;
                    setTimeout(() => {
                        setOpen(false);
                        setSearch("");
                    }, 150);
                }}

            >

                <span className="text-sm text-gray-700">
                    {valueArray?.length > 0
                        ? valueArray.map(v => getOptionLabel(options, v) ?? v)
                            .join(", ")
                        : `Select ${field.label}`}
                </span>
                <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>

            </div>


            {/* Dropdown body */}
            <DropdownPortal anchorRef={triggerRef} open={open && !isDisabled}>
                <div ref={listRef} className=" w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2">
                    {/*  Search input */}
                    {field.search && <div className="sticky top-0 bg-white p-1">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => { if (isDisabled) return; setSearch(e.target.value); }}
                            placeholder="Search..."
                            className="px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0"
                        />
                    </div>}

                    {/* Filtered options */}
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(([val, label], idx) => (
                            <label
                                key={val}
                                htmlFor={`${key}-${val}`}
                                className={`flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${valueArray?.includes(val)
                                        ? "bg-indigo-50 text-indigo-600 font-medium"
                                        : highlightedIndex === idx // highlight state
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-50"
                                    }`}
                            >
                                <input
                                    id={`${key}-${val}`}
                                    type="checkbox"
                                    checked={valueArray?.includes(val)}
                                    onChange={(e) => {
                                        const next = e.target.checked
                                            ? [...valueArray, val]
                                            : valueArray?.filter(v => v !== val);

                                        formik.setFieldValue(key, next);
                                        handlePersist(next, field, module_refid)
                                        executeFieldMethod("onChange", field, `${key}-${val}`)
                                    }}
                                    onBlur={formik.handleBlur}
                                    disabled={isDisabled}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                {label}
                            </label>
                        ))
                    ) : (
                        <div className="px-2 py-1 text-gray-400 text-sm">No results</div>
                    )}
                </div>

            </DropdownPortal>


            {formik.touched[key] && formik.errors[key] && (
                <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
            )}
        </div>
    )
}
