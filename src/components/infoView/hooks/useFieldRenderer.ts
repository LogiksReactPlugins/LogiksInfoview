import { useRef, useState, useEffect, useMemo } from "react";
import axios from 'axios';
import type { FieldRendererProps, FormField, OptionItem, sqlQueryProps } from "../InfoView.types.js";
import { buildApiParams, buildFileValue, flattenOptions, formatOptions, getFirstRow, getSearchColumns, handlePersist, isAutocompleteConfig, mergeOptions, normalizeOptions, normalizeRowSafe, replacePlaceholders, resetChain } from "../utils.js";
import { deleteFile, fetchDataByquery, uploadFiles } from "../service.js";

//DRY implementation pending
declare global {
    interface Window {
        formAPI: {
            setValue: (name: string, value: any) => void;
            getValue: (name: string) => any;
            setValues: (values: Record<string, any>) => void;
            getValues: () => Record<string, any>;
        };

        // optional: backward compatibility
        setFieldValue: (name: string, value: any) => void;
    }
}

export default function useFieldRenderer({
    field,
    formik,
    methods = {},
    sqlOpsUrls,
    refid,
    module_refid = "menuManager.main",
    optionsOverride,
    setFieldOptions,
    chainMap,
    setFieldLoading,
    parent_data
}: FieldRendererProps) {

    const isOptionField = [
        "select",
        "dataSelector",
        "dataSelectorFromTable",
        "dataSelectorFromUniques",
        "dataMethod",
        "suggest",
        "autosuggest",
        "autocomplete",
    ].includes(field?.type || "text");

    const [isFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(isOptionField);
    const [options, setOptions] = useState<OptionItem[]>(
        mergeOptions(field, optionsOverride ?? [])
    );
    const [refreshTrigger, setRefreshTrigger] = useState(0);



    const [search, setSearch] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);

    const triggerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const searchRef = useRef(search);

    const isDisabled = field.disabled === true;

    useEffect(() => {
        searchRef.current = search;
    }, [search]);

    useEffect(() => {
        if (field.type !== "select") return;
        if (field.multiple) return;
        if (field["no-option"] !== "false") return;

        const currentValue = formik.values[key];
        if (currentValue) return;

        if (options.length === 0) return;

        const firstValue = options[0]?.value;

        if (firstValue !== undefined && firstValue !== null) {
            formik.setFieldValue(key, firstValue, false);
        }
    }, [options]);



    useEffect(() => {
        if (!optionsOverride) return;

        setOptions(mergeOptions(field, optionsOverride));
    }, [optionsOverride]);




    useEffect(() => {
        window.formAPI = {
            setValue: (name, value) => {
                formik.setFieldValue(name, value);
            },
            getValue: (name) => {
                return formik.values[name];
            },
            setValues: (values) => {
                Object.entries(values).forEach(([k, v]) => {
                    formik.setFieldValue(k, v);
                });
            },
            getValues: () => {
                return formik.values;
            }
        };

        // backward compatibility
        window.setFieldValue = (name, value) => {
            formik.setFieldValue(name, value);
        };
    }, [formik]);



    // Close on outside click
    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            // ignore trigger click
            if (triggerRef.current?.contains(target)) return;

            // ignore dropdown click
            if (listRef.current?.contains(target)) return;

            setOpen(false);
            setSearch("");
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const key = field.name;

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {

            try {

                let valueKey = field.valueKey ?? "value";
                let labelKey = field.labelKey ?? "title";

                const source = field?.source ?? {};

                // Case 1: Method source
                if (field.type === "dataMethod") {
                    const methodName = field.method as keyof typeof methods | undefined;
                    const methodFn = methodName ? methods[methodName] : undefined;
                    if (methodFn) {
                        try {
                            const res = await methodFn();
                            const rawItems = Array.isArray(res.data?.results?.options) ?
                                res.data?.results?.options : Array.isArray(res?.data?.data)
                                    ? res.data.data
                                    : Array.isArray(res.data?.results)
                                        ? res.data?.results :
                                        Array.isArray(res?.data)
                                            ? res.data
                                            : res;


                            const normalizedItems = Array.isArray(rawItems)
                                ? rawItems.map(normalizeRowSafe)
                                : [];

                            const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey);

                            if (isMounted) setOptions(mergeOptions(field, mapped));;
                            return;
                        } catch (err) {
                            console.error("Method execution failed:", err);
                            if (isMounted) setOptions([]);;
                            return;
                        }
                    } else {
                        if (isMounted) setOptions([]);
                        return;
                    }
                }

                // Case 2: API source
                if (source.type === "api" && source.endpoint) {
                    try {
                        let payload: Record<string, any> = {};
                        if (source.refid) {
                            payload.refid = source.refid;
                        }
                        if (field.parameter) {
                            const params = buildApiParams({ field, formValues: formik.values, parentData: parent_data });

                            payload = { ...payload, ...params }
                        }

                        const config = {
                            method: source.method || "GET",
                            url: sqlOpsUrls?.baseURL + source.endpoint,

                            headers: {
                                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                            },
                            ...(source.method === "GET"
                                ? { params: { refid: source.refid } }
                                : { data: payload }),
                        }

                        const res = await axios(config);

                        const rawItems = Array.isArray(res.data?.results?.options) ?
                            res.data?.results?.options : Array.isArray(res?.data?.data)
                                ? res.data.data
                                : Array.isArray(res.data?.results)
                                    ? res.data?.results :
                                    Array.isArray(res?.data)
                                        ? res.data
                                        : res;



                        const normalizedItems = Array.isArray(rawItems)
                            ? rawItems.map(normalizeRowSafe)
                            : [];

                        const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey)


                        if (isMounted) setOptions(mergeOptions(field, mapped));
                        return;

                    } catch (err) {
                        console.error("API execution failed:", err);
                        if (isMounted) setOptions([]);
                        return;
                    }
                }

                // Case 3: Sql source

                if (field.table || field.type === "dataSelector" || field.queryid) {

                    if (!sqlOpsUrls) {
                        console.error("SQL source requires formJson.endPoints but it is missing");
                        return;
                    }

                    try {

                        let query: sqlQueryProps | undefined;

                        if (field.type === "dataSelector") {
                            query = {
                                table: "do_lists",
                                cols: "title,value",
                                where: {
                                    groupid: field.groupid ?? "",
                                },
                            };

                        } else if (!field.queryid) {
                            // inline SQL
                            if (!field.table || !field.columns) {
                                console.error("Invalid SQL field config", field);
                                return;
                            }

                            query = {
                                table: field.table,
                                cols: field.columns,
                                where: field.where
                                    ? refid
                                        ? replacePlaceholders(field.where, { refid })
                                        : field.where
                                    : undefined,
                            };
                        }

                        //  Optional where — added only if present

                        const res = await fetchDataByquery(sqlOpsUrls, query, field?.queryid, undefined, module_refid);

                        const rawItems = Array.isArray(res?.data?.data)
                            ? res.data.data
                            : Array.isArray(res?.data)
                                ? res.data
                                : res;

                        const normalizedItems = Array.isArray(rawItems)
                            ? rawItems.map(normalizeRowSafe)
                            : [];

                        const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey);

                        if (isMounted) setOptions(mergeOptions(field, mapped));

                    } catch (err) {
                        console.error("API fetch failed:", err);
                    }
                }

            } catch (err) {
                console.log(err)

            } finally {
                if (isMounted && isOptionField) {
                    setLoading(false);
                }
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, [
        field.options,
        field.source,
        field.table,
        field.columns,
        field.where,
        refid,
        field.queryid,
        field.groupKey,
        field.valueKey,
        field.labelKey,
        refreshTrigger
    ]);


    const baseInputClasses = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${isDisabled
            ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`;

    const focusClasses = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `;

    const labelClasses = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `;



    const flatOptions = useMemo(
        () => flattenOptions(options),
        [options]
    );

    const exactMatch = useMemo(() => {

        if (!field.type) return null
        if (!["suggest", "autosuggest", "autocomplete"].includes(field.type)) {
            return null;
        }

        if (!search.trim()) return null;

        const normalized = search.trim().toLowerCase();

        return flatOptions.find(([, label]) => {
            const value = label.trim().toLowerCase();
            return value === normalized;
        });
    }, [field.type, search, flatOptions]);



    const optionCount = flatOptions.length;
    const isApiSearch = Boolean(field.search && (field.queryid || field.table));

    const filteredOptions = useMemo(() => {
        // API search mode → backend already filtered
        if (isApiSearch) {
            return flatOptions;
        }
        if (!search) return flatOptions;
        return flatOptions.filter(([, label]) =>
            label.toLowerCase().includes(search.toLowerCase())
        );
    }, [isApiSearch, search, flatOptions]);


    //  Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent, is_single: boolean) => {

        if (!open) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev + 1 < filteredOptions.length ? prev + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev - 1 >= 0 ? prev - 1 : filteredOptions.length - 1
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            const [val] = filteredOptions[highlightedIndex] || [];
            if (val) {
                let value = is_single ? val : [...formik.values[field.name], val];
                formik.setFieldValue(field.name, value);
                handlePersist(value, field, module_refid)
            }
            setOpen(false);


        } else if (e.key === "Escape") {

            setSearch("");
            setOpen(false);
        }
    };


    //  Auto-scroll highlighted option into view
    useEffect(() => {
        const activeEl = listRef.current?.querySelector<HTMLElement>(
            `[data-index="${highlightedIndex}"]`
        );
        activeEl?.scrollIntoView({ block: "nearest" });
    }, [highlightedIndex]);

    useEffect(() => {
        if (highlightedIndex >= filteredOptions.length) {
            setHighlightedIndex(0);
        }
    }, [filteredOptions, highlightedIndex]);



    useEffect(() => {
        const ac = field.autocomplete;          // always single
        const aj = field.ajaxchain;             // single | array | undefined

        if (!ac && !aj) return;

        const value = formik.values[field.name];
        if (!value) return;

        const ajaxChains = Array.isArray(aj) ? aj : aj ? [aj] : [];

        const run = async () => {
            try {

                // ---------- AUTOCOMPLETE ----------
                if (isAutocompleteConfig(ac)) {
                    const src = ac.src;
                    if (!src || !sqlOpsUrls) return;

                    let row: any;

                    if ("type" in src && src.type === "api") {
                        let curr_field = field.name;

                        if (typeof field.parameter === "string" && field.parameter) {
                            curr_field = field.parameter
                        }

                        const params = { [curr_field]: value, refid: value }

                        if (typeof field.parameter === "object" && field.parameter !== null
                            && Object.keys(field.parameter).length > 0

                        ) {

                            for (const [key, val] of Object.entries(field.parameter)) {
                                params[key] = key === curr_field
                                    ? value
                                    : formik.values?.[val as string];
                            }

                        }
                        const config = {
                            method: src.method || "GET",
                            url: sqlOpsUrls?.baseURL + src.endpoint,

                            headers: {
                                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                            },

                            ...(src.method === "GET"
                                ? { params }
                                : { data: params }),
                        }

                        const res = await axios(config);
                        row = getFirstRow(res)
                    } else {

                        let query: sqlQueryProps | undefined;

                        if (!src.queryid) {
                            if (!src.table || !src.columns) {
                                throw new Error("SQL query requires field.table");
                            }
                            const resolvedWhere = replacePlaceholders(src?.where ?? {}, {
                                refid: value,
                            });
                            query = {
                                ...src,
                                table: src.table,
                                cols: src.columns,
                                where: resolvedWhere,
                            };
                        }


                        const { data: res } = await fetchDataByquery(sqlOpsUrls, query, src?.queryid, value, module_refid);

                        row = Array.isArray(res?.data?.data)
                            ? res.data.data[0]
                            : Array.isArray(res?.data)
                                ? res.data[0]
                                : res?.data;
                    }

                    let normalizedRow = normalizeRowSafe(row);

                    if (normalizedRow) {
                        ac.target
                            .split(",")
                            .map(t => t.trim())
                            .forEach(t => {
                                if (normalizedRow[t] !== undefined) {
                                    formik.setFieldValue(t, normalizedRow[t]);
                                }
                            });
                    }
                }

                // ---------- AJAX CHAIN (ARRAY SAFE) ----------
                for (const chain of ajaxChains) {
                    setFieldLoading?.(chain.target, true);
                    const src = chain.src;
                    if (!chain || typeof chain !== "object") continue;
                    if (!src || typeof src !== "object") continue;
                    if (!sqlOpsUrls) continue;

                    let responseData: any;

                    if ("type" in src && src.type === "api") {
                        let curr_field = field.name;

                        if (typeof field.parameter === "string" && field.parameter) {
                            curr_field = field.parameter
                        }

                        let params = { [curr_field]: value, refid: value }

                        if (typeof field.parameter === "object" && field.parameter !== null
                            && Object.keys(field.parameter).length > 0

                        ) {

                            for (const [key, val] of Object.entries(field.parameter)) {
                                params[key] = key === curr_field
                                    ? value
                                    : formik.values?.[val as string];
                            }

                        }


                        const config = {
                            method: src.method || "GET",
                            url: sqlOpsUrls?.baseURL + src.endpoint,

                            headers: {
                                "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                            },
                            ...(src.method === "GET"
                                ? { params }
                                : { data: params }),
                        }
                        try {
                            const { data: res } = await axios(config);
                            responseData = res;
                        } catch (error) {

                        } finally {
                            setFieldLoading?.(chain.target, false);
                        }

                    } else {

                        let query: sqlQueryProps | undefined;

                        if (!src.queryid) {
                            if (!src.table || !src.columns) {
                                throw new Error("SQL query requires field.table");
                            }
                            const resolvedWhere = replacePlaceholders(src?.where ?? {}, {
                                refid: value,
                            });
                            query = {
                                ...src,
                                table: src.table,
                                cols: src.columns,
                                where: resolvedWhere,
                            };
                        }

                        try {
                            const { data: res } = await fetchDataByquery(sqlOpsUrls, query, src?.queryid, value, module_refid);
                            responseData = res;
                        } catch (error) {

                        } finally {
                            setFieldLoading?.(chain.target, false);
                        }

                    }

                    let valueKey = field.valueKey ?? "value";
                    let labelKey = field.labelKey ?? "title";

                    const rawItems = Array.isArray(responseData?.results?.options) ?
                        responseData?.results?.options : Array.isArray(responseData.data)
                            ? responseData.data
                            : Array.isArray(responseData.results)
                                ? responseData.results
                                : responseData


                    const normalizedItems = Array.isArray(rawItems)
                        ? rawItems.map(normalizeRowSafe)
                        : [];

                    const mapped = formatOptions(
                        valueKey,
                        labelKey,
                        normalizedItems,
                        field.groupKey
                    );

                    formik.setFieldValue(chain.target, formik.initialValues[chain.target]);
                    // resetChain(field.name, chainMap, formik);                                        
                    setFieldOptions?.(chain.target, mapped);
                }
            } catch (err) {
                console.error("Autocomplete / AjaxChain fetch failed", err);
            }
        };

        run();
    }, [formik.values[field.name]]);



    useEffect(() => {
        if (!isApiSearch) return;
        if (!search.trim()) return;
        if (!sqlOpsUrls) return;
        const searchColumns = getSearchColumns(field.columns ?? "");

        const controller = new AbortController();
        const timer = setTimeout(async () => {
            try {
                setLoading(true);

                let query: sqlQueryProps | undefined;

                if (!field.queryid) {

                    if (!field.table || !field.cols) {
                        throw new Error("SQL query requires field.table");
                    }

                    const resolvedWhere = refid ? replacePlaceholders(field.where ?? {}, {
                        refid: refid,
                    }) : field.where

                    query = {
                        ...field,
                        table: field.table,
                        cols: field.columns || field.cols,
                        where: resolvedWhere

                    };
                }

                let filter: Record<string, [string, string]> = {};

                if (Array.isArray(searchColumns)) {
                    searchColumns.forEach((column) => {
                        filter[column] = [search, "LIKE"]
                    })
                }
                let valueKey = field.valueKey ?? "value";
                let labelKey = field.labelKey ?? "title";
                const { data: res } = await fetchDataByquery(sqlOpsUrls, query, field?.queryid, undefined, module_refid, filter);

                const rawItems = Array.isArray(res?.data?.data)
                    ? res.data.data
                    : Array.isArray(res?.data)
                        ? res.data
                        : res;



                const normalizedItems = Array.isArray(rawItems)
                    ? rawItems.map(normalizeRowSafe)
                    : [];

                const mapped = formatOptions(
                    valueKey,
                    labelKey,
                    normalizedItems,
                    field.groupKey
                );

                setOptions(mergeOptions(field, mapped));
            } catch (err) {
                if (axios.isCancel(err)) return;
                console.error("Search fetch failed", err);
            } finally {
                setLoading(false);
            }
        }, 500); // debounce

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [isApiSearch, search, refid]);


    const handleFileUpload = async (files: FileList) => {

        if (files.length === 0) {
            console.error("No file");
            return;
        }

        try {
            setLoading(true);
            const uploads = await uploadFiles(sqlOpsUrls, files);

            const value = buildFileValue({
                uploads,
                currentValue: formik.values[key],
                multiple: field.multiple ?? false,
            });
            formik.setFieldValue(
                key,
                value
            );

            handlePersist(value, field, module_refid)
        } catch (err) {
            console.error("File upload failed", err);
            formik.setFieldError(key, "File upload failed");
        } finally {
            setLoading(false)
        }
    };


    const removeFile = async (file: string) => {
        const existing: string[] = Array.isArray(formik.values[key])
            ? formik.values[key]
            : [];

        const fileId = file.split("&")[0];
        if (!fileId) return;

        const updated = existing.filter((f) => f.split("&")[0] !== fileId);

        formik.setFieldValue(key, updated);


        try {
            await deleteFile(sqlOpsUrls, fileId);
            handlePersist(updated, field, module_refid);
        } catch (err) {
            console.log(err)
            formik.setFieldValue(key, existing);
            window.alert("Failed to delete file due to a technical issue. Please try again.")
        }
    };



    const executeFieldMethod = async (
        trigger: "onChange" | "onBlur" | "onFocus" | "onClick",
        field: FormField,
        value?: any
    ) => {
        const methodName = field[trigger] as keyof typeof methods | undefined;
        if (!methodName) return;

        const fn = methods?.[methodName];
        if (typeof fn !== "function") {
            console.error(`Method "${String(methodName)}" not found`);
            return;
        }

        try {
            await Promise.resolve(fn(value));
        } catch (err) {
            console.error(`Method "${String(methodName)}" failed`, err);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isDisabled) return;
        const val = e.target.value;
        setSearch(val);
        setHighlightedIndex(0);

        if (val.trim()) {
            setOpen(true);
        } else {
            setOpen(false);
            formik.setFieldValue(key, "");
        }
    };
    const handleSelect = (val: string) => {
        formik.setFieldValue(key, val); // store selected value
        handlePersist(val, field, module_refid)
        setSearch("");
        setOpen(false);
        executeFieldMethod("onChange", field, `${key}-${val}`)
    };




    return {
        setHighlightedIndex,
        executeFieldMethod,
        handleFileUpload,
        handleKeyDown,
        setSearch,
        setOpen,
        setIsFocused,
        handleInputChange,
        handleSelect,
        handlePersist,
        setLoading,
        removeFile,
        optionCount,
        baseInputClasses,
        focusClasses,
        labelClasses,
        search,
        highlightedIndex,
        options,
        isDisabled,
        key,
        filteredOptions,
        open,
        listRef,
        isFocused,
        exactMatch,
        triggerRef,
        loading,
        refreshOptions: () => setRefreshTrigger(c => c + 1),


    }
}