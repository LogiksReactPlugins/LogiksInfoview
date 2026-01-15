
import type { FlatOptions, FormField, GroupedOptions, InfoViewGroup, Infoview, SelectOptions } from "./InfoView.types.js";

export function determineViewMode(json: Infoview) {

  return json.template ? json.template : 'tab'
}

export function groupFields(fields: Record<string, any>): Record<string, InfoViewGroup> {
  const grouped: Record<string, InfoViewGroup> = {};
  Object.entries(fields).forEach(([key, config]) => {

    const groupName = config.group || "General";
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

export function transformedObject(originalObject: Record<string, any>,operation:string = "create") {

  const fields: Record<string, { label: string; required: boolean }> = {}

  Object.keys(originalObject).forEach((key) => {

    if (originalObject[key].vmode === "edit" && operation==="create") return;

    fields[key] = {
      label: key,
      required: originalObject[key].required ?? false
    }
  })
  return fields
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
  res: any
): FlatOptions => {
  const items = Array.isArray(res?.data?.data)
    ? res.data.data
    : Array.isArray(res?.data)
      ? res.data
      : res;

  if (!Array.isArray(items) || items.length === 0) {
    return {};
  }

  // ---- flat options ----

    const mapped: FlatOptions = {};
    items.forEach((item: any) => {
      if (item[valueKey] != null && item[labelKey] != null) {
        mapped[item[valueKey]] = item[labelKey];
      }
    });
    return mapped;
  


};

export function resolveDisplayValue(
  rawVal: unknown,
  options: Record<string, string>
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




