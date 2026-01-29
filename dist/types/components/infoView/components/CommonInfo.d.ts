import { InfoViewField, InfoData, SqlEndpoints } from '../InfoView.types.js';
interface CommonInfoProps {
    infoData: InfoData;
    sqlOpsUrls: SqlEndpoints;
    commonInfo: {
        fields?: InfoViewField[];
        label: string;
        type: string;
    };
    hiddenFields?: string[];
}
export default function CommonInfo({ commonInfo, infoData, hiddenFields, sqlOpsUrls }: CommonInfoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommonInfo.d.ts.map