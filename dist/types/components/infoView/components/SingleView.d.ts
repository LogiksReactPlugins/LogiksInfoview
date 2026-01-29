import { InfoViewGroup, SqlEndpoints } from '../InfoView.types.js';
export default function SingleView({ tabObj, methods, tabName, sqlOpsUrls, refid, module_refid }: {
    tabObj: InfoViewGroup;
    methods: Record<string, Function>;
    tabName: string;
    sqlOpsUrls: SqlEndpoints;
    refid: string;
    module_refid: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SingleView.d.ts.map