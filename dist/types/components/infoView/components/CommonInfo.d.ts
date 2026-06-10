import { FormField, InfoData, SqlEndpoints, SelectOptions } from '../InfoView.types.js';
import { ComponentType } from 'react';
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
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (fieldName: string, options: SelectOptions) => void;
    refid: string;
    module_refid: string | undefined;
    AttachmentPopup?: ComponentType<any> | undefined;
}
export default function CommonInfo({ commonInfo, infoData, hiddenFields, sqlOpsUrls, setFieldOptions, fieldOptions, module_refid, refid, methods, AttachmentPopup }: CommonInfoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommonInfo.d.ts.map