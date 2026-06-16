import { ComponentType } from 'react';
import { InfoViewGroup, OptionItem, SqlEndpoints } from '../InfoView.types.js';
export default function SingleView({ tabObj, methods, tabName, sqlOpsUrls, refid, module_refid, setFieldOptions, fieldOptions, AttachmentPopup }: {
    tabObj: InfoViewGroup;
    methods: Record<string, Function>;
    tabName: string;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    module_refid: string | undefined;
    setFieldOptions: (fieldName: string, options: OptionItem[]) => void;
    fieldOptions: Record<string, OptionItem[]>;
    AttachmentPopup?: ComponentType<any> | undefined;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SingleView.d.ts.map