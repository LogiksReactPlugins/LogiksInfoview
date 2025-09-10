import { default as React } from 'react';
import { InfoViewGroup, InfoData } from '../InfoView.types.js';
interface CardViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
}
export default function CardView({ groups, methods, infoData, viewRenderers, }: CardViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CardView.d.ts.map