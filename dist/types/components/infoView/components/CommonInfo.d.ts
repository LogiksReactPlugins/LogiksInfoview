import { FormField, InfoData, SqlEndpoints, OptionItem } from '../InfoView.types.js';
interface CommonInfoProps {
    infoData: InfoData;
    sqlOpsUrls: SqlEndpoints;
    commonInfo: {
        fields?: FormField[];
        label: string;
        type: string;
    };
    methods: Record<string, Function>;
    hiddenFields?: string[];
    fieldOptions: Record<string, OptionItem[]>;
    setFieldOptions: (fieldName: string, options: OptionItem[]) => void;
    refid: string;
    module_refid: string | undefined;
}
export default function CommonInfo({ commonInfo, infoData, hiddenFields, sqlOpsUrls, setFieldOptions, fieldOptions, module_refid, refid, methods }: CommonInfoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommonInfo.d.ts.map