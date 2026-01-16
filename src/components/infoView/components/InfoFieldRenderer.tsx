import React, { useState } from 'react';
import axios from 'axios';
import type { InfoFieldRendererProps, InfoViewField, SelectOptions, sqlQueryProps } from '../InfoView.types.js';
import { DEFAULT_LOGO } from '../constant.js';
import { fetchDataByquery, formatOptions, normalizeOptions, replacePlaceholders, resolveDisplayValue } from '../utils.js';


export default function InfoFieldRenderer({ field, data, methods = {}, sqlOpsUrls, refid }: InfoFieldRendererProps) {

  const key = field?.name;

  const baseInputClasses = `
    text-sm text-gray-600 break-words
  `;

  const labelClasses = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `;


  const [options, setOptions] = useState<SelectOptions>(
    field.options ?? {}
  );

  const flatOptions = React.useMemo(
    () => normalizeOptions(options),
    [options]
  );
  React.useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (field?.options) {
        setOptions(field.options);
        return;
      }

      let valueKey = field.valueKey ?
        field.valueKey :
        field.type === "dataSelector" ?
          "do_lists.value" : `${field.table}.value`;

      let labelKey = field.labelKey ? field.labelKey :
        field.type === "dataSelector" ?
          "do_lists.title" : `${field.table}.title`;

      const source = field?.source ?? {};

      // Case 1: Method source
      if (field.type === "dataMethod") {
        const methodName = field.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const result = await Promise.resolve(methodFn());
            const mapped = formatOptions(valueKey, labelKey, result, field.groupKey);
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


          const mapped = formatOptions(valueKey, labelKey, res, field.groupKey)

          if (isMounted) setOptions(mapped);

        } catch (err) {
          console.error("API execution failed:", err);
          if (isMounted) setOptions({});
        }
      }

      // Case 3: Sql source

      if (field.table || field.type === "dataSelector") {

        if (!sqlOpsUrls) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }

        try {

          let query: sqlQueryProps;

          if (field.type === "dataSelector") {
            query = {

              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: field.groupid ?? "",
              },
            };
          } else {

            if (!field.table || !field.columns) {
              console.error("Invalid SQL field config", field);
              return;
            }

            query = {

              table: field.table,
              cols: field.columns,
            };
          }

          //  Optional where — added only if present
          if (field.where && field.type !== "dataSelector") {
            query.where = refid
              ? replacePlaceholders(field.where, { refid })
              : field.where;
          }

          const res = await fetchDataByquery(sqlOpsUrls, query, field?.queryid);

          const mapped = formatOptions(valueKey, labelKey, res, field.groupKey);
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

