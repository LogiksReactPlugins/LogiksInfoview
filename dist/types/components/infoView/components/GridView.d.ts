import { ComponentType } from 'react';
import { Infoview, InfoViewField, InfoViewGroup } from '../InfoView.types.js';
export default function GridView({ tabObj, methods, tabName, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson }: {
    tabObj: InfoViewGroup;
    methods: Record<string, Function>;
    tabName: string;
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
        buttons?: Record<string, any>;
        actions?: Record<string, any>;
        module_refid?: string | undefined;
    };
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GridView.d.ts.map