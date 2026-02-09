import { ComponentType } from 'react';
import { InfoViewGroup, InfoData, SqlEndpoints, SelectOptions, InfoviewJson } from '../InfoView.types.js';
interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Record<string, Function>;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    infoViewJson: InfoviewJson;
    fieldOptions: Record<string, SelectOptions>;
    setFieldOptions: (fieldName: string, options: SelectOptions) => void;
    components?: Record<string, ComponentType<any>>;
}
export default function AccordianView({ groups, methods, infoData, viewRenderers, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson, fieldOptions, setFieldOptions, components }: AccordianViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordianView.d.ts.map