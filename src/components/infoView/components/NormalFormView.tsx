import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { buildChainMap, filterSavableValues, flatFields, intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import type { SimpleFormViewProps, FormField, OptionItem } from "../InfoView.types.js";
import CommonInfo from './CommonInfo.js';


export default function NormalFormView({
  title,
  fields,
  data,
  onSubmit = async (values) => { },
  onCancel = () => { },
  methods = {},
  sqlOpsUrls,
  refid,
  module_refid,
  buttons,
  button_labels,
  AttachmentPopup,
  parent_data
}: SimpleFormViewProps) {
  const flatfields = React.useMemo(() => {
    return flatFields(fields, sqlOpsUrls?.operation)
  }, [fields, sqlOpsUrls?.operation]);


  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, OptionItem[]>
  >({});

  const setOptionsForField = (name: string, options: OptionItem[]) => {
    setFieldOptions(prev => ({
      ...prev,
      [name]: options,
    }));
  };


  const [fieldLoading, setFieldLoading] = React.useState<
    Record<string, boolean>
  >({});

  const updateFieldLoading = (fieldName: string, loading: boolean) => {
    setFieldLoading(prev => ({
      ...prev,
      [fieldName]: loading,
    }));
  };


  const { commonFields, otherFields } = React.useMemo(() => {
    return flatfields.reduce(
      (acc, field) => {
        if (field.group === "common") acc.commonFields.push(field);
        else acc.otherFields.push(field);
        return acc;
      },
      { commonFields: [] as FormField[], otherFields: [] as FormField[] }
    );
  }, [flatfields]);


  const { initialValues, validationSchema } = React.useMemo(() => {
    console.log("dddd");

    const values: Record<string, any> = {};
    const schema: Record<string, Yup.AnySchema> = {};
    flatfields.forEach((field) => {
      intializeForm([field], values, schema, data, module_refid, sqlOpsUrls?.operation);
    });

    return {
      initialValues: values,
      validationSchema: schema,
    };
  }, [flatfields, data]);

  //console.log("fields", fields);

  const chainMap = React.useMemo(
    () => buildChainMap(flatfields),
    [flatfields]
  );



  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: async (values) => {
      try {

        let filteredValues = filterSavableValues(values, flatfields)
        const res = await onSubmit(filteredValues);
        console.log("res", res);

        formik.resetForm();
      } catch (error) {
        console.log("error", error);

      }
    }
  })

  //let visibleButtons = buttons ? Object.entries(buttons) : []


  // async function handleClick(method: string, val: Record<string, any>) {

  //   const methodFn = methods?.[method as keyof typeof methods];

  //   if (methodFn) {
  //     try {
  //       await methodFn();

  //     } catch (err) {
  //       console.error("Method execution failed:", err);

  //     }
  //     return
  //   }
  //   methods?.handleAction?.({ [method]: val }, formik.values)

  // }

  const resetForm = () => {
    formik.resetForm();
  }



  return (
    <>

      <div className="relative max-w-full">
        <div className="bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible">
          <form onSubmit={formik.handleSubmit} className="p-4  mx-auto">

            <div className='grid grid-cols-12 gap-4'>
              {otherFields.map((field) => {
                const hidden = isHidden(field.hidden);

                const wrapperClass = `col-span-12 md:col-span-6
    ${tailwindCols[toColWidth(Number(field.width))] || "lg:col-span-4"}
    ${hidden ? "hidden" : ""}
  `;
                if (field.type === "static" || field.type === "static2") {
                  const isPrimary = field.type === "static";

                  return (
                    <div
                      key={field?.name}
                      id={`wrapper-${field.name}`}
                      className="col-span-12"
                    >
                      <div
                        className={` bg-gray-100 ${isPrimary ? "mt-4" : "mt-3"}`}
                      >
                        <div className="flex items-center justify-between px-4 py-3">
                          <div className="flex items-center gap-3">

                            <h2
                              className={`${isPrimary ? "text-base " : "text-sm"} font-semibold text-gray-800`}
                            >
                              {field.label}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return <div
                  key={field?.name}
                  id={`wrapper-${field.name}`}
                  className={wrapperClass}
                >
                  <FieldRenderer
                    refid={refid}
                    module_refid={module_refid}
                    sqlOpsUrls={sqlOpsUrls}
                    field={field}
                    formik={formik}
                    methods={methods}
                    chainMap={chainMap}
                    setFieldOptions={setOptionsForField}
                    {...(fieldOptions[field.name]
                      ? { optionsOverride: fieldOptions[field.name] }
                      : {})}

                    fieldLoading={fieldLoading[field.name] ?? false}
                    setFieldLoading={updateFieldLoading}
                    AttachmentPopup={AttachmentPopup}
                    parent_data={parent_data}
                  />
                </div>
              })}

            </div>
            <div className="mt-8 flex justify-between space-x-3">
              <p className='text-sm text-gray-700'>All fields marked (*) are required</p>
              <div className='space-x-3'>
                {/* <button type="button" onClick={onCancel} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  {button_labels?.cancel || "Cancel"}
                </button> */}
                <button type="button" onClick={resetForm} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  {button_labels?.reset || "Reset"}
                </button>

                <button type="submit" className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  {button_labels?.submit || "Save"}
                </button>
              </div>
            </div>
          </form>

          {/* <div className="flex justify-end gap-2  p-3 border-t border-gray-100">
            {visibleButtons &&
              visibleButtons.map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => handleClick(key, val)}
                  className="px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {val.label}
                </button>
              ))}
          </div> */}
        </div>

      </div>
    </>
  )
}

