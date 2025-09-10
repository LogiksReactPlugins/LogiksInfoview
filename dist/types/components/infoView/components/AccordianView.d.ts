import { default as React } from 'react';
import { InfoViewGroup, InfoData } from '../InfoView.types.js';
interface AccordianViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
}
export default function AccordianView({ groups, methods, infoData, viewRenderers, }: AccordianViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordianView.d.ts.map