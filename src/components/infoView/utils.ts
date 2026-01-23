import * as Yup from "yup";

import axios, { type AxiosResponse } from "axios";
import type { AutocompleteConfig, FileCategory, FlatOptions, FormField, GroupedOptions, InfoViewGroup, Infoview, SelectOptions, sqlQueryProps } from "./InfoView.types.js";
import { IMAGE_EXT, PDF_EXT, TEXT_EXT, VIDEO_EXT } from "./constant.js";

export function determineViewMode(json: Infoview) {

  return json.template ? json.template : 'tab'
}

export function groupFields(fields: Record<string, any>): Record<string, InfoViewGroup> {
  const grouped: Record<string, InfoViewGroup> = {};
  Object.entries(fields).forEach(([key, config]) => {

    const groupName = config.group || "Info";
    if (!grouped[groupName]) {
      grouped[groupName] = { label: groupName, type: "fields", fields: [] };
    }
    grouped[groupName]?.fields?.push({ name: key, ...config });
  });

  return grouped;
}
export const getGeoFieldKeys = (fields: Record<string, Omit<FormField, "name">>) => {
  return Object.entries(fields ?? {})
    .filter(([, field]: any) => field.type === "geolocation")
    .map(([key]) => key);
};

export async function fetchGeolocation(): Promise<string | null> {
  if (!("geolocation" in navigator)) {
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  }

  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          timeout: 30000,
          maximumAge: 120000,
        });
      }
    );

    const { latitude, longitude } = position.coords;
    return `${latitude},${longitude}`;
  } catch (error) {
    if (!(error instanceof GeolocationPositionError)) {
      throw new Error("Failed to get your location.");
    }

    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error("Please allow location access in browser settings.");
      case error.POSITION_UNAVAILABLE:
        throw new Error(
          "Unable to detect your location. Try connecting to Wi-Fi."
        );
      case error.TIMEOUT:
        throw new Error("Your device took too long to fetch GPS position.");
      default:
        throw new Error("Failed to get your location.");
    }
  }
}

export function transformedObject(originalObject: Record<string, any>, operation: string = "create") {

  const fields: Record<string, { label: string; required: boolean }> = {}

  Object.keys(originalObject).forEach((key) => {

    if (originalObject[key].vmode === "edit" && operation === "create") return;

    fields[key] = {
      label: key,
      required: originalObject[key].required ?? false
    }
  })
  return fields
}

export function flatFields(
  fields: Record<string, Omit<FormField, "name">>,
  operation: string = "create"
): FormField[] {
  return Object.entries(fields).filter(([, field]) => !(field.vmode === "edit" && operation === "create")).map(([key, field]) => ({
    ...field,
    name: key,
  }));
}


type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const tailwindGrid: Record<ColWidth, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
};

export const tailwindCols: Record<ColWidth, string> = {
  12: "lg:col-span-12",
  11: "lg:col-span-11",
  10: "lg:col-span-10",
  9: "lg:col-span-9",
  8: "lg:col-span-8",
  7: "lg:col-span-7",
  6: "lg:col-span-6",
  5: "lg:col-span-5",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
  2: "lg:col-span-2",
  1: "lg:col-span-1"
};

export function toColWidth(width: number | undefined): ColWidth {
  const allowed: ColWidth[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return allowed.includes(width as ColWidth) ? (width as ColWidth) : 6;
}

export function toGrid(width: number | undefined): ColWidth {
  const allowed: ColWidth[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return allowed.includes(width as ColWidth) ? (width as ColWidth) : 6;
}



export async function copyToClipboard(content: string) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(content);

    } catch (err) {
      throw err;
    }
  } else {
    // Fallback method for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');

    } catch (err) {
      throw err;
    }
    document.body.removeChild(textarea);
  }
}


export const replacePlaceholders = (
  input: any,
  vars: Record<string, string | number>
): any => {
  if (typeof input === "string") {
    return input.replace(/#(\w+)#/g, (_, k) =>
      vars[k] !== undefined ? String(vars[k]) : _
    );
  }

  if (Array.isArray(input)) {
    return input.map(v => replacePlaceholders(v, vars));
  }

  if (input && typeof input === "object") {
    return Object.fromEntries(
      Object.entries(input).map(([k, v]) => [
        replacePlaceholders(k, vars),
        replacePlaceholders(v, vars),
      ])
    );
  }

  return input;
};


export const normalizeToObject = (res: any): Record<string, any> | null => {
  const raw =
    Array.isArray(res?.data?.data)
      ? res.data.data[0]
      : Array.isArray(res?.data)
        ? res.data[0]
        : res?.data?.data ?? res?.data;

  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : null;
}

export const formatOptions = (
  valueKey: string,
  labelKey: string,
  items: any[],
  groupKey?: string
): SelectOptions => {
  if (!Array.isArray(items) || items.length === 0) return {};

  const resolvedGroupKey =
    groupKey ??
    (items[0] && typeof items[0] === "object" && "category" in items[0]
      ? "category"
      : undefined);

  // ---- flat options ----
  if (!resolvedGroupKey) {
    const mapped: FlatOptions = {};
    items.forEach(item => {
      const value = item[valueKey];
      const label = item[labelKey];
      if (value != null && label != null) {
        mapped[String(value)] = String(label);
      }
    });
    return mapped;
  }

  // ---- grouped options ----
  const grouped: GroupedOptions = {};

  items.forEach(item => {
    const group = item[resolvedGroupKey] ?? "Others";
    const value = item[valueKey];
    const label = item[labelKey];

    if (value == null || label == null) return;

    if (!grouped[group]) grouped[group] = {};
    grouped[group][String(value)] = String(label);
  });

  return grouped;
};



export function resolveDisplayValue(
  rawVal: unknown,
  options: FlatOptions
) {
  if (!options || Object.keys(options).length === 0) return rawVal;

  if (typeof rawVal === "number") {
    return options[String(rawVal)] ?? rawVal;
  }

  if (typeof rawVal === "string") {
    const parts = rawVal.split(",").map(v => v.trim());

    const labels = parts
      .map(v => options[v])
      .filter(Boolean);

    return labels.length ? labels.join(", ") : rawVal;
  }

  return rawVal;
}




export const isHidden = (hidden?: boolean | string): boolean =>
  hidden === true || hidden === "true";
export const intializeForm = (
  formFields: FormField[],
  initialValues: Record<string, any>,
  validationSchema: Record<string, Yup.AnySchema>,
  data?: Record<string, any>
) => {
  formFields.forEach((field) => {
    const name = field?.name;
    if (!name) return;

    let value = data?.[name];



    if (value === undefined || value === null) {
      value = field.default;
    }

    // ---------- Initial Values (NORMALIZED) ----------


    if (field.multiple === true || field.type === "checkbox" || field.type === "tags") {
      initialValues[name] =
        Array.isArray(value)
          ? value
          : typeof value === "string"
            ? value.split(",").map(v => v.trim()).filter(Boolean)
            : [];
    }



    else if (field.type === "json") {
      initialValues[name] =
        typeof value === "object" && value !== null
          ? JSON.stringify(value, null, 2)
          : value ?? "";
    }

    else if (field.type === "date") {
      initialValues[name] =
        typeof value === "string" ? value.slice(0, 10) : "";
    }

    else if (field.type === "time") {
      if (typeof value === "string") {
        if (value.includes("T")) {
          // ISO datetime → extract time
          initialValues[name] = value.slice(11, 16);
        } else {
          // HH:mm or HH:mm:ss
          initialValues[name] = value.slice(0, 5);
        }
      } else {
        initialValues[name] = "";
      }
    }

    else if (name === "blocked" || name === "blacklist") {
      initialValues[name] = String(value ?? "false");
    }

    else {
      initialValues[name] = value ?? "";
    }

    // ---------- Validation ----------
    let validator: Yup.AnySchema;

    if (field.type === "file") {
      validator = field.multiple
        ? Yup.array().of(Yup.mixed<File>())
        : Yup.mixed<File>();
    }

    else if (field.multiple === true || field.type === "checkbox" || field.type === "tags") {
      validator = Yup.array().of(Yup.string());
    }
    else if (field.type === "email") {
      validator = Yup.string().email("Invalid email");
    }
    else if (field.type === "number") {
      validator = Yup.number().typeError("Must be a number");
    }
    else if (field.type === "json") {
      validator = Yup.string().test("json", "Invalid JSON", (v) => {
        if (!v) return true;
        try {
          JSON.parse(v);
          return true;
        } catch {
          return false;
        }
      });
    }
    else {
      validator = Yup.string();
    }

    if (field.required) {
      validator = validator.required(
        field.error_message || `${field.label || name} is required`
      );
    }

    // ---------- Direct Regex ----------
    if (field?.validate?.regex && typeof field.validate.regex === "string") {
      validator = (validator as Yup.StringSchema).matches(
        new RegExp(field?.validate?.regex),
        field?.error_message || "Invalid input format"
      );
    }


    if (field?.validate) {
      Object.entries(field.validate).forEach(([rule, val]) => {
        switch (rule) {
          case "email":
            if (val) validator = (validator as Yup.StringSchema).email("Invalid email format");
            break;

          case "mobile":
            validator = (validator as Yup.StringSchema).matches(
              /^[1-9][0-9]*$/,
              "Invalid mobile number format"
            );
            break;

          case "regex":
            validator = (validator as Yup.StringSchema).matches(
              new RegExp(val as string),
              `Must match pattern: ${val}`
            );
            break;

          case "date":
            validator = Yup.date()
              .typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)")
              .transform((value, originalValue) => {
                if (typeof originalValue === "string") {
                  const normalized = originalValue.replace(/-/g, "/");
                  const [d, m, y] = normalized.split("/");
                  if (d && m && y) {
                    return new Date(`${y}-${m}-${d}`);
                  }
                }
                return value;
              });
            break;

          case "time":
            validator = (validator as Yup.StringSchema).matches(
              /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
              "Invalid time format (HH:MM)"
            );
            break;

          case "timesec":
            validator = (validator as Yup.StringSchema).matches(
              /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
              "Invalid time format (HH:MM:SS)"
            );
            break;

          case "number":
          case "numeric":
            validator = Yup.number().typeError("Must be numeric");
            break;

          case "float":
          case "decimal":
            validator = Yup.number()
              .typeError("Must be a decimal")
              .transform((val, original) => {
                if (original === undefined || original === null || original === "") return undefined;
                const num = Number(original);
                if (isNaN(num)) return val;
                if (typeof val === "number" && !isNaN(val)) {
                  // format to given decimal places if val is numeric
                  const decimals = Number(val);
                  return Number.isInteger(decimals) ? Number(num.toFixed(decimals)) : num;
                }
                return num;
              });
            break;

          case "alphanumeric":
            validator = (validator as Yup.StringSchema).matches(
              /^[a-z0-9]+$/i,
              "Must be alphanumeric"
            );
            break;

          case "alpha":
            validator = (validator as Yup.StringSchema).matches(
              /^[a-zA-Z]+$/,
              "Must contain only letters"
            );
            break;

          case "upper":
            validator = (validator as Yup.StringSchema).transform((val) =>
              val ? val.toUpperCase() : val
            );
            break;

          case "lower":
            validator = (validator as Yup.StringSchema).transform((val) =>
              val ? val.toLowerCase() : val
            );
            break;

          case "length-min": {
            const min = Number(val);
            if (!isNaN(min)) {
              validator = (validator as Yup.StringSchema).min(min, `Minimum length is ${min}`);
            }
            break;
          }

          case "length-max": {
            const max = Number(val);
            if (!isNaN(max)) {
              validator = (validator as Yup.StringSchema).max(max, `Maximum length is ${max}`);
            }
            break;
          }

          default:
            break;
        }
      });
    }

    validationSchema[name] = validator;
  });
};



export const isGroupedOptions = (
  options: SelectOptions
): options is GroupedOptions => {
  if (!options || typeof options !== "object") return false;

  return Object.values(options).every(
    v => typeof v === "object" && v !== null
  );
};

export function isAutocompleteConfig(ac: unknown): ac is AutocompleteConfig {
  return (
    typeof ac === "object" &&
    ac !== null &&
    typeof (ac as any).target === "string" &&
    typeof (ac as any).src === "object" &&
    (ac as any).src !== null &&
    typeof (ac as any).src.table === "string"
  );
}

export function getSearchColumns(columns: string): string[] {
  return columns
    .split(",")
    .map(c => c.trim())
    .map(c => {
      const match = c.match(/^(.+?)\s+as\s+.+$/i);
      return match ? match[1]?.trim() : c;
    })
    .filter((c): c is string => Boolean(c));
}

export const getOptionLabel = (
  options: SelectOptions,
  value: string
): string | undefined => {
  if (!options || value == null) return;

  const key = String(value);
  const first = Object.values(options)[0];

  // flat
  if (typeof first === "string") {
    return (options as FlatOptions)[key];
  }

  // grouped
  for (const group of Object.values(options as GroupedOptions)) {
    if (key in group) {
      return group[key];
    }
  }

  return;
};

type FlatEntry = [string, string];



export const flattenOptions = (options: SelectOptions): FlatEntry[] => {
  if (!options) return [];

  //  array options: [{ value, title/label }]
  if (Array.isArray(options)) {
    return options.map(
      (o): FlatEntry => [
        String(o.value),
        String(o.title ?? o.label ?? o.value),
      ]
    );
  }

  const values = Object.values(options);
  if (!values.length) return [];

  const first = values[0];

  //  flat object: { value: label }
  if (typeof first === "string") {
    return Object.entries(options as Record<string, string>)
      .map(([v, l]): FlatEntry => [String(v), l]);
  }

  // grouped object: { group: { value: label } }
  return Object.values(options as Record<string, Record<string, string>>)
    .flatMap(group =>
      Object.entries(group).map(
        ([v, l]): FlatEntry => [String(v), l]
      )
    );
};



export async function fetchDataByquery(
  sqlOpsUrls: Record<string, any>,
  query: Record<string, any> | undefined,
  querid: string | undefined,
  refid: string | undefined = undefined,
  module_refid: string | undefined = undefined,
  filter: Record<string, any> = {}
): Promise<AxiosResponse<any>> {
  try {

    let queryId = querid;

    if (!queryId) {
      const resQueryId = await axios({
        method: "POST",
        url: sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery,
        data: { "query": query, "srcid": module_refid },
        headers: {
          "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
        },
      });
      queryId = resQueryId.data.queryid;
    }

    const res = await axios({
      method: "POST",
      url: sqlOpsUrls.baseURL + sqlOpsUrls.runQuery,
      data: {
        "queryid": queryId,
        "filter": filter,
        "refid": refid,
        "page": 0,
        "limit": 10000
      },
      headers: {
        "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
      },
    });

    return res
  } catch (error) {
    throw error;
  }
}

export function normalizeOptions(
  options?: SelectOptions
): FlatOptions {
  if (!options) return {};

  if (!isGroupedOptions(options)) {
    return options;
  }

  return Object.values(options).reduce<FlatOptions>((acc, group) => {
    Object.assign(acc, group);
    return acc;
  }, {});
}
type Row = Record<string, unknown>;

export const normalizeRowSafe = (row: Row): Row => {
  const result: Row = {};

  for (const [key, value] of Object.entries(row)) {
    const normalizedKey = key.includes(".")
      ? key.split(".").pop()!
      : key;

    if (normalizedKey in result) {
      console.warn(`Duplicate key after normalization: ${normalizedKey}`);
      continue;
    }

    result[normalizedKey] = value;
  }

  return result;
};


// utils/runAjaxChain.ts



export async function runAjaxChain({
  field,
  value,
  sqlOpsUrls,
  setFieldOptions,
}: {
  field: any;
  value: any;
  sqlOpsUrls: any;
  setFieldOptions: (name: string, options: SelectOptions) => void;
}) {
  if (!field.ajaxchain || !value || !sqlOpsUrls) return;

  const chains = Array.isArray(field.ajaxchain)
    ? field.ajaxchain
    : [field.ajaxchain];

  for (const chain of chains) {
    const src = chain.src;
    if (!src) continue;

    let query: sqlQueryProps | undefined;

    if (!src.queryid) {
      const resolvedWhere = replacePlaceholders(src.where ?? {}, { refid: value });
      query = {
        ...src,
        table: src.table,
        cols: src.columns,
        where: resolvedWhere,
      };
    }

    const { data: res } = await fetchDataByquery(
      sqlOpsUrls,
      query,
      src.queryid,
      value
    );

    const rawItems = Array.isArray(res?.data?.data)
      ? res.data.data
      : Array.isArray(res?.data)
        ? res.data
        : res;

    const normalized = Array.isArray(rawItems)
      ? rawItems.map(normalizeRowSafe)
      : [];

    const mapped = formatOptions(
      field.valueKey ?? "value",
      field.labelKey ?? "title",
      normalized,
      field.groupKey
    );

    setFieldOptions(chain.target, mapped);
  }
}




export function decodeSignature(
  val: any
): Array<{ d: string; color: string; width: number }> | null {
  if (!val || val.type !== "Buffer" || !Array.isArray(val.data)) return null;

  try {
    const decoded = new TextDecoder().decode(new Uint8Array(val.data));
    const parsed = JSON.parse(decoded);

    if (Array.isArray(parsed) && parsed[0]?.d) {
      return parsed;
    }

    return null;
  } catch {
    return null;
  }
}

export function getFileExtension(path = "") {
  return path.split(".").pop()?.toLowerCase() ?? "";
}

export function getMimeCategory(ext: string) {
  if (IMAGE_EXT.includes(ext)) return "image";
  if (VIDEO_EXT.includes(ext)) return "video";
  if (PDF_EXT.includes(ext)) return "pdf";
  if (TEXT_EXT.includes(ext)) return "text";
  return "other";
}

export const fileIconClassMap: Record<FileCategory, string> = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
};




