import { default as React, ComponentType, ReactNode } from 'react';
import { InfoViewGroup, InfoData, SqlEndpoints, InfoviewJson, Toast, OptionItem } from '../InfoView.types.js';
interface CardViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Toast | undefined;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoViewJson: InfoviewJson;
    fieldOptions: Record<string, OptionItem[]>;
    setFieldOptions: (fieldName: string, options: OptionItem[]) => void;
    components?: Record<string, ComponentType<any> | ReactNode>;
    AttachmentPopup?: ComponentType<any> | undefined;
}
export default function CardView({ groups, methods, infoData, viewRenderers, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson, fieldOptions, setFieldOptions, components, AttachmentPopup }: CardViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CardView.d.ts.map