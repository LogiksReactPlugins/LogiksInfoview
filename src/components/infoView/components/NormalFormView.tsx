import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import FieldRenderer from './FieldRenderer.js';
import { buildChainMap, filterSavableValues, flatFields, intializeForm, isHidden, tailwindCols, toColWidth } from '../utils.js';
import type { SimpleFormViewProps, SelectOptions, OptionItem } from "../InfoView.types.js";




export default function NormalFormView({
  title,
  fields,
  data,
  onSubmit = async (values) => { },
  onCancel = () => { },
  methods = {},
  sqlOpsUrls,
  refid,
  module_refid
}: SimpleFormViewProps) {
  const flatfields = flatFields(fields, sqlOpsUrls?.operation);

  const [fieldOptions, setFieldOptions] = React.useState<
    Record<string, OptionItem[]>
  >({});

  const setOptionsForField = (name: string, options: OptionItem[]) => {
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

  console.log("initialValues",initialValues);
   console.log("flatfields",flatfields);
   console.log("data",data);
   

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: async (values) => {
      try {
       
        console.log("valuessssss",values);
        
        
        let filteredValues = filterSavableValues(values, flatfields);
         console.log("filteredValues in",filteredValues);
        const res = await onSubmit(filteredValues);
        formik.resetForm();
      } catch (error) {
        console.log("error", error);
      }

    }
  })

  let filteredValues = filterSavableValues(formik.values, flatfields);
  console.log("filteredValues outs",filteredValues);
  
  



 

  function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    formik.resetForm();
  }

  const chainMap = React.useMemo(
    () => buildChainMap(flatfields),
    [flatfields]
  );

  return (
    <div className="relative  max-w-full ">
      <div className="bg-white border border-gray-100 rounded-md animate-in fade-in duration-300">
        <form onSubmit={formik.handleSubmit} className="p-4  mx-auto">
          <div className="grid grid-flow-col auto-cols-max gap-4  overflow-x-auto">
            {flatfields.map((field) => {
              const hidden = isHidden(field.hidden);

              const wrapperClass = `${hidden ? "hidden" : ""}`;

              return <div

                key={field?.name}
                id={`wrapper-${field.name}`}
                className={wrapperClass}

              >
                <FieldRenderer
                  refid={refid}
                  module_refid={module_refid}
                  sqlOpsUrls={sqlOpsUrls}
                  chainMap={chainMap}
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

            <div className="">
              <div> &nbsp;</div>
              <button type="button" onClick={handleReset} className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Reset
              </button>
              {Object.keys(formik.errors).length > 0 && <div> &nbsp;</div>}
            </div>

            <div className="">
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

