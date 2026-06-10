import { ComponentType, ReactNode } from 'react';
import { InfoViewGroup, InfoData, SqlEndpoints, SelectOptions, InfoviewJson, Toast } from '../InfoView.types.js';
interface AccordianViewProps {
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
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (fieldName: string, options: SelectOptions) => void;
    components?: Record<string, ComponentType<any> | ReactNode>;
    AttachmentPopup?: ComponentType<any> | undefined;
}
export default function AccordianView({ groups, methods, infoData, viewRenderers, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson, fieldOptions, setFieldOptions, components, AttachmentPopup }: AccordianViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordianView.d.ts.map