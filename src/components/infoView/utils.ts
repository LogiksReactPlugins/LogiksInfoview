
import type { InfoViewGroup, Infoview } from "./InfoView.types.js";

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
