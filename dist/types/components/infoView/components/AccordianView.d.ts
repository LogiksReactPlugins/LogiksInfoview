import { default as React } from 'react';
import { InfoViewGroup, InfoData } from '../InfoView.types.js';
interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    sqlOpsUrls?: Record<string, any>;
    refid: string;
}
export default function AccordianView({ groups, methods, infoData, viewRenderers, sqlOpsUrls, refid }: AccordianViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordianView.d.ts.map