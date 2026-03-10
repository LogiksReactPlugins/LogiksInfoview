import { FormikProps } from 'formik';
import { FormField, SqlEndpoints } from '../InfoView.types.js';
type PhotoAvatarRendererProps = {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    sqlOpsUrls?: SqlEndpoints | undefined;
    module_refid?: string | undefined;
};
export default function PhotoAvatarRenderer({ formik, field, sqlOpsUrls, module_refid }: PhotoAvatarRendererProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PhotoAvatarRenderer.d.ts.map