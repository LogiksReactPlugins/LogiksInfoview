import { ComponentType } from 'react';
import { InfoData, Infoview, FormField, InfoViewGroup, Toast } from '../InfoView.types.js';
export default function GridView({ tabObj, methods, tabName, sqlOpsUrls, refid, Reports, toast, handleAction, infoViewJson, AttachmentPopup }: {
    tabObj: InfoViewGroup;
    methods: Record<string, Function>;
    tabName: string;
    sqlOpsUrls: Record<string, any>;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Toast | undefined;
    handleAction?: (action: Record<string, any>, data: InfoData) => void;
    AttachmentPopup?: ComponentType<any> | undefined;
    infoViewJson: {
        script?: string;
        fields: Record<string, Omit<FormField, "name">>;
        infoview?: Infoview;
        source?: Record<string, any>;
        endPoints?: Record<string, any>;
        buttons?: Record<string, any>;
        actions?: Record<string, any>;
        module_refid?: string | undefined;
    };
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GridView.d.ts.map