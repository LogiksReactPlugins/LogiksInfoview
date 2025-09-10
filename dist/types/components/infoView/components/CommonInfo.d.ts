import { InfoViewField, InfoData } from '../InfoView.types.js';
interface CommonInfoProps {
    infoData: InfoData;
    commonInfo: {
        fields?: InfoViewField[];
        label: string;
        type: string;
    };
    hiddenFields?: string[];
}
export default function CommonInfo({ commonInfo, infoData, hiddenFields }: CommonInfoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommonInfo.d.ts.map