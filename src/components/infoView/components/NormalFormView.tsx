import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { flatFields, intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import type { SimpleFormViewProps, SelectOptions } from "../InfoView.types.js";




export default function NormalFormView({
  title,
  fields,
  data,
  onSubmit = (values) => { },
  onCancel = () => { },
  methods = {},
  sqlOpsUrls,
  refid
}: SimpleFormViewProps) {
  const flatfields = flatFields(fields, sqlOpsUrls?.operation);

  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, SelectOptions>
  >({});

  const setOptionsForField = (name: string, options: SelectOptions) => {
    setFieldOptions(prev => ({
      ...prev,
      [name]: options,
    }));
  };





  const { initialValues, validationSchema } = React.useMemo(() => {
    const values: Record<string, any> = {};
    const schema: Record<string, Yup.AnySchema> = {};
    flatfields.forEach((field) => {
      intializeForm([field], values, schema, data);
    });

    return {
      initialValues: values,
      validationSchema: schema,
    };
  }, [flatfields, data]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    }
  })


  console.log("formik.values", formik.values);


  return (
    <div className="relative z-10 max-w-full  m-4">
      <div className="bg-white border border-gray-100 rounded-md animate-in fade-in duration-300">
        <form onSubmit={formik.handleSubmit} className="p-4  mx-auto">
          <div className="grid grid-flow-col auto-cols-max gap-4 items-end overflow-x-auto">
            {flatfields.map((field, index) => {
              if (isHidden(field.hidden) || field.type === "geolocation" || (field.vmode === "edit" && sqlOpsUrls?.operation === "create")) {
                return null;
              }

              return <div
                key={field?.name ?? `field-${index}`}

              >
                <FieldRenderer
                  refid={refid}
                  {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
                  field={field}
                  formik={formik}
                  methods={methods}
                  setFieldOptions={setOptionsForField}
                  {...(fieldOptions[field.name]
                    ? { optionsOverride: fieldOptions[field.name] }
                    : {})}
                />
              </div>
            })}

            <div className="pl-2">
              <div> &nbsp;</div>
              <button type="submit" className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Save
              </button>
              {Object.keys(formik.errors).length > 0 && <div> &nbsp;</div>}
            </div>

          </div>
          <div className="mt-8 flex justify-between space-x-3">
            <p className='text-sm text-gray-700'>All fields marked (*) are required</p>
          </div>
        </form>
      </div>

    </div>
  )
}

