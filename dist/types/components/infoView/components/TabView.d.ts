import { ComponentType } from 'react';
import { InfoViewGroup, InfoViewField, InfoData, Infoview } from '../InfoView.types.js';
interface TabViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup, tabName: string) => React.ReactNode>;
    layoutConfig?: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    viewMode: string;
    sqlOpsUrls?: Record<string, any>;
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
    };
}
export default function TabView({ groups, methods, infoData, viewRenderers, isCommonInfo, layoutConfig, viewMode, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson }: TabViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabView.d.ts.map