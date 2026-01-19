import React, { useState } from 'react';
import axios from 'axios';
import type { InfoFieldRendererProps, InfoViewField, SelectOptions, sqlQueryProps } from '../InfoView.types.js';
import { DEFAULT_LOGO } from '../constant.js';
import { fetchDataByquery, formatOptions, normalizeOptions, normalizeRowSafe, replacePlaceholders, resolveDisplayValue, runAjaxChain } from '../utils.js';


export default function InfoFieldRenderer({
  field,
  data,
  methods = {},
  sqlOpsUrls,
  refid, module_refid, optionsOverride, setFieldOptions }: InfoFieldRendererProps) {

  const key = field?.name;

  const baseInputClasses = `
    text-sm text-gray-600 break-words
  `;

  const labelClasses = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `;


  const [options, setOptions] = useState<SelectOptions>(
    optionsOverride ?? field.options ?? {}
  );
  const ranRef = React.useRef(false);

  React.useEffect(() => {
    if (!optionsOverride) return;
    setOptions(optionsOverride);
  }, [optionsOverride]);

  const flatOptions = React.useMemo(
    () => normalizeOptions(options),
    [options]
  );
  React.useEffect(() => {
    let isMounted = true;
    let valueKey = field.valueKey ?? "value";

    let labelKey = field.labelKey ?? "title";

    const fetchData = async () => {
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

          const res = await fetchDataByquery(sqlOpsUrls, query, field?.queryid, module_refid);

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

  const fieldValue = field?.name ? data?.[field.name] : undefined;

  React.useEffect(() => {
    if (ranRef.current) return;
    if (!setFieldOptions || !fieldValue) return;

    ranRef.current = true;

    runAjaxChain({
      field,
      value: fieldValue,
      sqlOpsUrls,
      setFieldOptions,
    });
  }, [fieldValue, sqlOpsUrls, setFieldOptions]);


  const rawVal =
    typeof key === "string" ? data?.[key] : undefined;

  const displayVal =
    typeof rawVal === "string"
      ? field.type === "date"
        ? rawVal.split("T")[0]
        : field.type === "time"
          ? rawVal.includes("T")
            ? rawVal.slice(11, 16)
            : rawVal.slice(0, 5)
          : resolveDisplayValue(rawVal, flatOptions)
      : resolveDisplayValue(rawVal, flatOptions);

  const isImageField =
    typeof key === "string" &&
    (key.toLowerCase().includes("avatar") ||
      key.toLowerCase().includes("logo"));


  const renderValue =
    displayVal == null
      ? ""
      : typeof displayVal === "string" || typeof displayVal === "number"
        ? displayVal
        : JSON.stringify(displayVal);

  return (
    <div className="px-3 py-2 bg-gray-50 rounded-lg">
      <label className={labelClasses}>{field?.label}</label>
      <div className="relative">

        {isImageField ? (
          <img
            src={String(displayVal)}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover border"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = DEFAULT_LOGO;
            }}

          />
        ) : (
          <p className={baseInputClasses}>
            {renderValue}
          </p>
        )}

      </div>

    </div>
  );

}

