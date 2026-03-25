import React, { useState } from 'react';
import axios from 'axios';
import type { InfoFieldRendererProps, SelectOptions, sqlQueryProps } from '../InfoView.types.js';
import { decodeSignature, formatOptions, normalizeOptions, normalizeRowSafe, replacePlaceholders, resolveDisplayValue, sanitizeHtml } from '../utils.js';
import FilePreviewTrigger from './FilePreviewTrigger.js';
import { fetchDataByquery, runAjaxChain } from '../service.js';



export default function InfoFieldRenderer({
  field,
  data,
  methods = {},
  sqlOpsUrls,
  refid,
  module_refid,
  optionsOverride,
  setFieldOptions }: InfoFieldRendererProps) {

  const key = field?.name;

  const baseInputClasses = `
    text-sm text-gray-600 break-words capitalize
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

      let opts = field?.options;

      if (opts && (
        (Array.isArray(opts) && opts.length > 0) ||
        (!Array.isArray(opts) && Object.keys(opts).length > 0)
      )) {
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

            const rawItems = Array.isArray(res.data?.results?.options) ?
              res.data?.results?.options : Array.isArray(res?.data?.data)
                ? res.data.data
                : Array.isArray(res.data?.results)
                  ? res.data?.results :
                  Array.isArray(res?.data)
                    ? res.data
                    : res;

            if (
              typeof rawItems === "object" &&
              !Array.isArray(rawItems)
            ) {
              const values = Object.values(rawItems);
              if (values.length && typeof values[0] === "string") {
                setOptions(rawItems as SelectOptions);
                return;
              }
            }

            const normalizedItems = Array.isArray(rawItems)
              ? rawItems.map(normalizeRowSafe)
              : [];
            const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey);
            if (isMounted) setOptions(mapped);
            return;
          } catch (err) {
            console.error("Method execution failed:", err);
            if (isMounted) setOptions({});
            return;
          }
        } else {
          if (isMounted) setOptions({});
          return;
        }
      }

      // Case 2: API source
      if (source.type === "api" && source.endpoint) {

        try {
          const config = {
            method: source.method || "GET",
            url: sqlOpsUrls?.baseURL + source.endpoint,

            headers: {
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            ...(source.method === "GET"
              ? { params: { refid: source.refid } }
              : { data: { refid: source.refid } }),
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
          if (
            typeof rawItems === "object" &&
            !Array.isArray(rawItems)
          ) {
            const values = Object.values(rawItems);
            if (values.length && typeof values[0] === "string") {
              setOptions(rawItems as SelectOptions);
              return;
            }
          }
          const normalizedItems = Array.isArray(rawItems)
            ? rawItems.map(normalizeRowSafe)
            : [];

          const mapped = formatOptions(valueKey, labelKey, normalizedItems, field.groupKey)

          if (isMounted) setOptions(mapped);
          return

        } catch (err) {
          console.error("API execution failed:", err);
          if (isMounted) setOptions({});
          return
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

          if (
            typeof rawItems === "object" &&
            !Array.isArray(rawItems)
          ) {
            const values = Object.values(rawItems);
            if (values.length && typeof values[0] === "string") {
              setOptions(rawItems as SelectOptions);
              return;
            }
          }

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

  const rawVal = field?.name ? data?.[field.name] : undefined;

  //console.log("field?.name ,Val",field?.name,rawVal);


  React.useEffect(() => {
    if (ranRef.current) return;
    if (!setFieldOptions || !rawVal) return;

    ranRef.current = true;

    runAjaxChain({
      field,
      value: rawVal,
      sqlOpsUrls,
      setFieldOptions,
      values: data ?? {}
    });
  }, [rawVal, sqlOpsUrls, setFieldOptions]);




  let displayVal;

  if (typeof rawVal === "string") {
    if (field.type === "date") {
      displayVal = rawVal.split("T")[0];
    } else if (field.type === "time") {
      displayVal = rawVal.includes("T")
        ? rawVal.slice(11, 16)
        : rawVal.slice(0, 5);
    } else {
      displayVal = resolveDisplayValue(rawVal, flatOptions);
    }
  } else {
    displayVal = resolveDisplayValue(rawVal, flatOptions);
  }


  const renderValue =
    displayVal == null
      ? ""
      : typeof displayVal === "string" || typeof displayVal === "number"
        ? displayVal
        : JSON.stringify(displayVal);


  const signature = decodeSignature(rawVal);
  const safeHtml =
    field.type === "richtextarea" && typeof renderValue === "string"
      ? sanitizeHtml(renderValue)
      : null;

  return (
    <div className="px-3 py-2 bg-gray-50 rounded-lg">
      <label className={labelClasses}>{field?.label}</label>
      <div className="relative">

        {signature ? (
          signature.type === "drawn" ? (
            <svg viewBox="0 0 300 150" className="h-24 w-full border bg-white rounded">
              {signature.paths.map((p, i) => (
                <path
                  key={i}
                  d={p.d}
                  stroke={p.color || "#000"}
                  strokeWidth={p.width || 2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
            </svg>
          ) : signature.type === "text" ? (
            <svg viewBox="0 0 300 150" className="h-24 w-full border bg-white rounded">
              <text
                x="10"
                y="100"
                fontSize={signature.data.style?.fontSize || 32}
                fontFamily={signature.data.style?.fontFamily || "cursive"}
                fill={signature.data.style?.textColor || "#000"}
              >
                {signature.data.text}
              </text>
            </svg>
          ) : signature.type === "html" ? (
            <div
              className="border bg-white rounded p-2 text-sm"
              dangerouslySetInnerHTML={{ __html: signature.html }}
            />
          ) : (
            <img
              src={signature.src}
              alt="signature"
              className="h-24 object-contain border bg-white rounded"
            />
          )
        ) : (field.type === "file" || field.type === "camera"  || field.type === "camera2" || field.type === "attachement" || field.type === "photo" || field.type === "avatar") && displayVal ? (
          <div className="flex flex-wrap gap-2">
            {String(displayVal)
              .split(",")
              .map((path) => path.trim())
              .filter(Boolean)
              .map((path) => (
                <FilePreviewTrigger
                  key={path}
                  sqlOpsUrls={sqlOpsUrls}
                  filePath={path}
                />
              ))}
          </div>
        ) : field.type === "richtextarea" ? (
          <div
            className="tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm"
            dangerouslySetInnerHTML={{ __html: safeHtml ?? "" }}
          />
        ) : (
          <p className={baseInputClasses}>{renderValue}</p>
        )}

      </div>

    </div>
  );

}

