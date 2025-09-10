import { default as React } from 'react';
import { InfoViewGroup, InfoData } from '../InfoView.types.js';
interface TabViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    layoutConfig?: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    viewMode: string;
}
export default function TabView({ groups, methods, infoData, viewRenderers, isCommonInfo, layoutConfig, viewMode }: TabViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabView.d.ts.map