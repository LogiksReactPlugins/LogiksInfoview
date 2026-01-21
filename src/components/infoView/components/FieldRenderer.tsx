import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';

import type { FieldRendererProps, FormField, SelectOptions, sqlQueryProps } from '../InfoView.types.js';
import { fetchDataByquery, flattenOptions, formatOptions, getOptionLabel, getSearchColumns, isAutocompleteConfig, isGroupedOptions, normalizeRowSafe, replacePlaceholders } from '../utils.js';
import { DropdownPortal } from './DropdownPortal.js';



export default function FieldRenderer({
  field,
  formik,
  methods = {},
  sqlOpsUrls,
  refid,
  optionsOverride,
  setFieldOptions,
  module_refid
}: FieldRendererProps) {
  const [isFocused, setIsFocused] = useState(false);

  const [options, setOptions] = useState<SelectOptions>(
    optionsOverride ?? field.options ?? {}
  );


  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const searchRef = React.useRef(search);
  const triggerRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    searchRef.current = search;
  }, [search]);


  useEffect(() => {
    if (!optionsOverride) return;
    if (Object.keys(optionsOverride).length === 0) return;

    setOptions(optionsOverride);
  }, [optionsOverride]);

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

  React.useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      let valueKey = field.valueKey ?? "value";

      let labelKey = field.labelKey ?? "title";

      if (field?.options) {

        //  CASE 1: flat or grouped object
        // { "1": "WEL" } OR { quarter1: { "1": "January" } }
        if (
          typeof field.options === "object" &&
          !Array.isArray(field.options)
        ) {
          const values = Object.values(field.options);
          if (values.length && typeof values[0] === "string") {
            setOptions(field.options as SelectOptions);
            return;
          }
        }

        // CASE 2 / 3: array of rows (flat or grouped via `category`)
        const rawItems = Array.isArray(field.options)
          ? field.options
          : [field.options];

        const normalizedItems = rawItems.map(normalizeRowSafe);

        const mapped = formatOptions(
          valueKey,
          labelKey,
          normalizedItems,
          field.groupKey // auto-uses `category` if present
        );
        setOptions(mapped);
        return;
      }

      const source = field?.source ?? {};

      // Case 1: Method source
      if (field.type === "dataMethod") {
        const methodName = field.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const res = await Promise.resolve(methodFn());

            const rawItems = Array.isArray(res?.data?.data)
              ? res.data.data
              : Array.isArray(res?.data)
                ? res.data
                : res;

            const normalizedItems = Array.isArray(rawItems)
              ? rawItems.map(normalizeRowSafe)
              : [];

            const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey);

            if (isMounted) setOptions(mapped);
          } catch (err) {
            console.error("Method execution failed:", err);
            if (isMounted) setOptions({});
          }
        } else {
          if (isMounted) setOptions({});
        }
      }

      // Case 2: API source
      if (source.type === "api" && source.url) {
        try {
          const res = await axios({
            method: source.method || "GET",
            url: source.url,
            data: source.body ?? {},
            params: source.params ?? {},
            headers: source.headers ?? {},
          });

          const rawItems = Array.isArray(res?.data?.data)
            ? res.data.data
            : Array.isArray(res?.data)
              ? res.data
              : res;

          const normalizedItems = Array.isArray(rawItems)
            ? rawItems.map(normalizeRowSafe)
            : [];
          const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey)

          if (isMounted) setOptions(mapped);

        } catch (err) {
          console.error("API execution failed:", err);
          if (isMounted) setOptions({});
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

          if (isMounted) setOptions(mapped);

        } catch (err) {
          console.error("API fetch failed:", err);
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
    refid
  ]);

  const baseInputClasses = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `;

  const focusClasses = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `;

  const labelClasses = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `;

  const renderIcon = (field: FormField) => {
    if (field.icon) return <i className={field.icon} />;

    return null;
  };

  const flatOptions = useMemo(
    () => flattenOptions(options),
    [options]
  );

  const optionCount = flatOptions.length;

  const filteredOptions = useMemo(() => {
    // API search mode → backend already filtered
    if (field.search) {
      return flatOptions;
    }
    if (!search) return flatOptions;
    return flatOptions.filter(([, label]) =>
      label.toLowerCase().includes(search.toLowerCase())
    );
  }, [field.search, search, flatOptions]);


  //  Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, is_single: boolean) => {

    if (!(open === true)) return;

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
        formik.setFieldValue(field.name, is_single ? val : [...formik.values[field.name], val]);
      }


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

          const resolvedWhere = replacePlaceholders(src.where ?? {}, {
            refid: value,
          });

          const query = {
            ...src,
            table: src.table,
            cols: src.columns,
            where: resolvedWhere,
          };

          const { data: res } = await fetchDataByquery(sqlOpsUrls, query, field?.queryid, undefined, module_refid);

          const row = Array.isArray(res?.data) ? res.data[0] : res?.data;

          if (row) {
            ac.target
              .split(",")
              .map(t => t.trim())
              .forEach(t => {
                if (row[t] !== undefined) {
                  formik.setFieldValue(t, row[t]);
                }
              });
          }
        }

        // ---------- AJAX CHAIN (ARRAY SAFE) ----------
        for (const chain of ajaxChains) {
          const src = chain.src;
          if (!chain || typeof chain !== "object") continue;
          if (!src || typeof src !== "object") continue;
          if (!sqlOpsUrls) continue;

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


          const { data: res } = await fetchDataByquery(sqlOpsUrls, query, field?.queryid, value, module_refid);

          let valueKey = field.valueKey ?? "value";
          let labelKey = field.labelKey ?? "title";

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

          setFieldOptions?.(chain.target, mapped);
        }
      } catch (err) {
        console.error("Autocomplete / AjaxChain fetch failed", err);
      }
    };

    run();
  }, [formik.values[field.name]]);


  React.useEffect(() => {
    if (!field.search) return;
    if (!search.trim()) return;
    if (!field.table || !sqlOpsUrls) return;
    const searchColumns = getSearchColumns(field.columns ?? "");

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
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

        const { data: res } = await fetchDataByquery(sqlOpsUrls, query, field?.queryid, undefined, module_refid, filter);

        let valueKey = field.valueKey ?? "value";

        let labelKey = field.labelKey ?? "title";

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

        setOptions(mapped);
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error("Search fetch failed", err);
      }
    }, 500); // debounce

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search, refid]);


  const handleFileUpload = async (files: FileList) => {

    if (files.length === 0) {
      console.error("No file");
      return;
    }
    if (!sqlOpsUrls) return;
    const uploadUrl = sqlOpsUrls?.baseURL + sqlOpsUrls?.uploadURL;
    if (!uploadUrl) {
      console.error("No Upload URL ");
      return;
    }
    const isMultiple = field.multiple === true;

    try {
      const uploads = await Promise.all(
        Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);

          const res = await axios({
            method: "POST",
            url: uploadUrl,
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
          });

          return res.data; // { id, url, ... }
        })
      );

      formik.setFieldValue(
        key,
        isMultiple ? uploads.map(file => file.path) : uploads[0]?.path
      );
    } catch (err) {
      console.error("File upload failed", err);
      formik.setFieldError(key, "File upload failed");
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


  switch (field.type) {

    case "autocomplete": {

      // Formik stores ONLY the selected value (id)
      const value: string = formik.values[key] ?? "";

      // What user sees in the input
      const displayValue =
        search !== ""
          ? search
          : getOptionLabel(options, value) ?? String(value ?? "");

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setSearch("");
        setOpen(false);
        executeFieldMethod("onChange", field, `${key}-${val}`)
      };

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div ref={triggerRef}>
            <input
              className={`${baseInputClasses} ${focusClasses}`}
              value={displayValue}
              placeholder={field.placeholder || "Type to search..."}
              onChange={handleInputChange}
              onFocus={() => {
                const current = String(formik.values[key] ?? "");
                setSearch(current);
              }}
              onBlur={() => { setTimeout(() => setOpen(false), 150); }}
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  e.preventDefault();

                  if (filteredOptions[highlightedIndex]) {
                    const [val] = filteredOptions[highlightedIndex];
                    formik.setFieldValue(key, val);
                  } else if (search.trim()) {
                    formik.setFieldValue(key, search.trim());
                  }

                  setOpen(false);
                  return;
                }

                // let existing handler handle arrows / escape etc
                handleKeyDown(e, true);
              }}


              disabled={field.disabled}
            />
          </div>

          <DropdownPortal anchorRef={triggerRef} open={open}>
            <div
              ref={listRef}
              className="bg-white border rounded shadow max-h-52 overflow-y-auto"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map(([val, label], idx) => (
                  <div
                    id={`${key}-${val}`}
                    key={val}
                    data-index={idx}
                    className={`px-3 py-2 cursor-pointer text-sm
                  ${highlightedIndex === idx
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                      }`}
                    onMouseDown={() => handleSelect(val)}
                  >
                    {label}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-400">
                  {`No matches press enter to add "${displayValue}" `}
                </div>
              )}
            </div>
          </DropdownPortal>


          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }


    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {

      /* ================= MULTIPLE ================= */
      if (field.multiple === true) {
        const valueArray: string[] = formik.values[key] ?? [];

        return (
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {/* TRIGGER */}
            <div
              ref={triggerRef}
              tabIndex={0}
              className="cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center"
              onClick={() => {
                setOpen(v => !v);
                setHighlightedIndex(0);
              }}
              onKeyDown={(e) => handleKeyDown(e, false)}
              onBlur={() => {
                if (field.multiple) return;
                setTimeout(() => {
                  setOpen(false);
                  setSearch("");
                }, 150);
              }}
            >
              <span className="text-sm text-gray-700 truncate">
                {valueArray.length > 0
                  ? valueArray.join(", ")
                  : `Select ${field.label}`}
              </span>

              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* DROPDOWN */}
            <DropdownPortal anchorRef={triggerRef} open={open}>
              <div
                ref={listRef}
                className="bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2"
              >
                {/* SEARCH */}
                {field.search && (
                  <div className="sticky top-0 bg-white p-1">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setHighlightedIndex(0);
                      }}
                      placeholder="Search..."
                      className="px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                    />
                  </div>
                )}

                {/* OPTIONS */}
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(([val, label], idx) => (
                    <label
                      key={val}
                      data-index={idx}
                      className={`flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${valueArray.includes(val)
                          ? "bg-indigo-50 text-indigo-600 font-medium"
                          : highlightedIndex === idx
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"}`}
                    >
                      <input
                        id={`${key}-${val}`}
                        type="checkbox"
                        checked={valueArray.includes(val)}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...valueArray, val]
                            : valueArray.filter(v => v !== val);
                          formik.setFieldValue(key, next);
                          executeFieldMethod("onChange", field, `${key}-${val}`)
                        }}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
        );
      }

      /* ================= SINGLE ================= */
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {/* TRIGGER */}
          <div
            ref={triggerRef}
            tabIndex={0}
            className="cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center"
            onClick={() => {
              setOpen(v => !v);
              setHighlightedIndex(0);
            }}
            onKeyDown={(e) => handleKeyDown(e, true)}
            onBlur={() => {
              setTimeout(() => {
                setOpen(false);
                setSearch("");
              }, 150);
            }}
          >
            <span className="text-sm text-gray-700 truncate">
              {formik.values[key]
                ? getOptionLabel(options, formik.values[key]) ?? "Select option"
                : `Select ${field.label}`}
            </span>

            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* DROPDOWN */}
          <DropdownPortal anchorRef={triggerRef} open={open}>
            <div
              ref={listRef}
              className="bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2"
            >
              {/* SEARCH */}
              {field.search && (
                <div className="sticky top-0 bg-white p-1">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setHighlightedIndex(0);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, true)}
                    placeholder="Search..."
                    className="px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  />
                </div>
              )}

              {/* CLEAR */}
              {filteredOptions.length > 0 && (
                <div
                  onMouseDown={(e) => {
                    e.preventDefault();
                    formik.setFieldValue(key, "");
                    setOpen(false);
                    setSearch("");
                  }}
                  className="px-2 py-1 text-sm cursor-pointer hover:bg-gray-50"
                >
                  Clear selection
                </div>
              )}

              {/* OPTIONS */}
              {filteredOptions.length > 0 ? (
                filteredOptions.map(([val, label], idx) => (
                  <div
                    id={`${key}-${val}`}
                    key={val}
                    data-index={idx}
                    onMouseDown={() => {
                      formik.setFieldValue(key, val);
                      setOpen(false);
                      setSearch("");
                      setHighlightedIndex(0);
                      executeFieldMethod("onChange", field, `${key}-${val}`)
                    }}
                    className={`px-2 py-1 rounded cursor-pointer text-sm
                  ${formik.values[key] === val
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : highlightedIndex === idx
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"}`}
                  >
                    {label}
                  </div>
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
      );
    }


    case "textarea":
      return (
        <>
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}

            </label>
            <div className="relative">
              <textarea
                id={key}
                className={`${baseInputClasses} ${focusClasses} min-h-[120px] resize-none`}
                onFocus={() => setIsFocused(true)}
                name={key}
                value={formik.values[key]}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.setFieldValue(
                    key,
                    e.target.value
                  )
                  executeFieldMethod("onChange", field, `${key}`)
                }
                }
                placeholder={field.placeholder}
                disabled={field.disabled}
              />
              {/* Animated border glow */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
                }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
            </div>


            {formik.touched[key] && formik.errors[key] &&

              <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
            }
          </div>
        </>
      );

    case "select":

      if (field.multiple === true) {
        const valueArray: string[] = formik.values[key] ?? [];

        return (
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {/* TRIGGER */}
            <div
              ref={triggerRef}
              tabIndex={0}
              className="cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center"
              onClick={() => {
                setOpen(v => !v);
                setHighlightedIndex(0);
              }}
              onKeyDown={(e) => handleKeyDown(e, false)}
              onBlur={() => {
                if (field.multiple) return;
                setTimeout(() => {
                  setOpen(false);
                  setSearch("");
                }, 150);
              }}
            >
              <span className="text-sm text-gray-700 truncate">
                {valueArray.length > 0
                  ? valueArray.join(", ")
                  : `Select ${field.label}`}
              </span>

              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* DROPDOWN */}
            <DropdownPortal anchorRef={triggerRef} open={open}>
              <div
                ref={listRef}
                className="bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2"
              >
                {/* SEARCH */}
                {field.search && (
                  <div className="sticky top-0 bg-white p-1">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setHighlightedIndex(0);
                      }}
                      placeholder="Search..."
                      className="px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                    />
                  </div>
                )}

                {/* OPTIONS */}
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(([val, label], idx) => (
                    <label
                      key={val}
                      data-index={idx}
                      className={`flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${valueArray.includes(val)
                          ? "bg-indigo-50 text-indigo-600 font-medium"
                          : highlightedIndex === idx
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"}`}
                    >
                      <input
                        id={`${key}-${val}`}
                        type="checkbox"
                        checked={valueArray.includes(val)}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...valueArray, val]
                            : valueArray.filter(v => v !== val);
                          formik.setFieldValue(key, next);
                          executeFieldMethod("onChange", field, `${key}-${val}`)
                        }}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
        );
      }


      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative">
            <select
              className={`${baseInputClasses} ${focusClasses} appearance-none cursor-pointer pr-12`}
              onFocus={() => setIsFocused(true)}
              name={key}
              id={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.setFieldValue(
                  key,
                  e.target.value === "" ? "" : e.target.value
                )
                executeFieldMethod("onChange", field, `${key}`)
              }
              }
              disabled={field.disabled}
            >
              <option value="" disabled>
                {field.placeholder || "Please select an option"}
              </option>


              {!isGroupedOptions(options) &&
                Object.entries(options).map(([val, label]) => (
                  <option key={val} value={val} className="py-2">
                    {label}
                  </option>
                ))}


              {isGroupedOptions(options) &&
                Object.entries(options).map(([group, opts]) => (
                  <optgroup key={group} label={group}>
                    {Object.entries(opts).map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </optgroup>
                ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 transition-colors duration-300 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          )}
        </div>
      );

    case "radioList":
    case "radio":

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className={`flex ${optionCount > 3 ? "flex-col" : ""} gap-2 ml-1`}>
            {Object.entries(options || {}).map(([val, label]) => (
              <label
                key={val}
                htmlFor={`${key}-${val}`}
                className="flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <input
                  id={`${key}-${val}`}
                  type="radio"
                  name={key}
                  checked={formik.values[key] === val}
                  value={val}
                  onChange={(e) => {
                    formik.setFieldValue(
                      key,
                      e.target.value === "" ? "" : e.target.value
                    )
                    executeFieldMethod("onChange", field, `${key}-${val}`)
                  }
                  }
                  onBlur={formik.handleBlur}
                  disabled={field.disabled}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                {label}
              </label>
            ))}
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
          )}
        </div>
      )


    case "checkbox": {

      const valueArray: string[] = formik.values[key];

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div className="flex flex-col gap-2 ml-1">
            {Object.entries(options || {}).map(([val, label]) => (
              <label
                key={val}
                className="flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <input
                  id={`${key}-${val}`}
                  type="checkbox"
                  checked={valueArray.includes(val)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...valueArray, val]
                      : valueArray.filter((v) => v !== val);

                    formik.setFieldValue(key, next);
                    executeFieldMethod("onChange", field, `${key}-${val}`)
                  }}
                  onBlur={formik.handleBlur}
                  disabled={field.disabled}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                {label}
              </label>
            ))}
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }


    case "tags": {
      const values: string[] = formik.values[key];
      const searchValue = search.trim();
      const normalizedOptions = Array.isArray(options)
        ? options
        : Object.entries(options || {}).map(([value, label]) => ({ value, label }));

      const addTag = (val: string) => {
        if (val && !values.includes(val)) {
          formik.setFieldValue(key, [...values, val]);
          setSearch("");
        }
      };

      const removeTag = (val: string) => {
        formik.setFieldValue(
          key,
          values.filter((v) => v !== val)
        );
      };

      const getLabel = (val: string) =>
        normalizedOptions.find((o) => o.value === val)?.label ?? val;

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div
            className={`${baseInputClasses} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`}
            onClick={() =>
              !field.disabled &&
              document.getElementById(`${key}-input`)?.focus()
            }
          >
            {/* Selected tags */}
            {values.map((val) => (
              <span
                key={val}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100"
              >
                <span className="text-indigo-700">{getLabel(val)}</span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!field.disabled) removeTag(val);
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  className="ml-1 text-indigo-500 hover:text-red-500 focus:outline-none"
                >
                  ×
                </button>
              </span>
            ))}

            {/* Input */}
            <input
              id={`${key}-input`}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") {
                  e.preventDefault();
                  addTag(searchValue);
                }
              }}
              placeholder={
                values.length === 0
                  ? field.placeholder || "Type and press Enter"
                  : ""
              }
              className="flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1"
              disabled={field.disabled}
            />
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const isMultiple = field.multiple === true;
      const files = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key]
          ? [formik.values[key]]
          : [];
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}

          </label>
          <div className="relative">

            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}

            <input
              id={key}
              type="file"
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              multiple={isMultiple}
              onChange={(e) => {
                const files = e.currentTarget.files;
                if (files) handleFileUpload(files);
                executeFieldMethod("onChange", field, `${key}`)
              }}
              onBlur={formik.handleBlur}

              placeholder={field.placeholder}
              disabled={field.disabled}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>



          {files.map((file) => {
            const name = file?.split("/").pop();
            if (!name) return null;

            return (
              <div key={file} className="mt-1">
                <span className="text-sm">{name}</span>
              </div>
            );
          })}

          {formik.touched[key] && formik.errors[key] &&

            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );


    case "json": {

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div className="relative">
            <textarea
              id={key}
              name={key}
              value={formik.values[key]}
              onChange={(e) => {
                formik.setFieldValue(
                  key,
                  e.target.value
                )
                executeFieldMethod("onChange", field, `${key}`)
              }
              }
              onBlur={formik.handleBlur}
              placeholder={field.placeholder || "Enter valid JSON"}
              disabled={field.disabled}
              className={`${baseInputClasses} ${focusClasses} min-h-[200px] font-mono text-sm resize-y`}
            />
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? "opacity-20" : ""
                }`}
              style={{ zIndex: -1, filter: "blur(8px)" }}
            />
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "date": {

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div className="relative">
            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}

            <input
              id={key}
              type="date"
              name={key}
              min={field.min}
              max={field.max}
              value={formik.values[key]}
              onChange={(e) => {
                formik.setFieldValue(
                  key,
                  e.target.value
                )
                executeFieldMethod("onChange", field, `${key}`)
              }
              }
              onBlur={formik.handleBlur}
              placeholder={field.placeholder}
              disabled={field.disabled}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""
                }`}
            />

            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? "opacity-20" : ""
                }`}
              style={{ zIndex: -1, filter: "blur(8px)" }}
            />
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "number":
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}

          </label>
          <div className="relative">

            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}

            <input

              id={key}
              type={field.type || "text"}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.setFieldValue(
                  key,
                  e.target.value
                )
                executeFieldMethod("onChange", field, `${key}`)
              }
              }
              step={field.step}
              placeholder={field.placeholder}
              disabled={field.disabled}
              min={field.min}
              max={field.max}


            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );

    default:

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}

          </label>
          <div className="relative">

            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}

            <input
              id={key}
              type={field.type || "text"}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={field.placeholder}
              disabled={field.disabled}
              step={field.step}
              minLength={field.minlength}
              maxLength={field.maxlength}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&

            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );
  }
}

