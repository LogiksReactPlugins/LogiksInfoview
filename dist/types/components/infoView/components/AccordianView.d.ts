import { ComponentType } from 'react';
import { InfoViewGroup, InfoViewField, InfoData, Infoview, SqlEndpoints } from '../InfoView.types.js';
interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    sqlOpsUrls?: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Record<string, Function>;
    handleAction?: Function;
    infoViewJson: {
        script?: string;
        fields: Record<string, Omit<InfoViewField, "name">>;
        infoview?: Infoview;
        source?: Record<string, any>;
        endPoints?: Record<string, any>;
        module_refid?: string | undefined;
    };
}
export default function AccordianView({ groups, methods, infoData, viewRenderers, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson }: AccordianViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordianView.d.ts.map