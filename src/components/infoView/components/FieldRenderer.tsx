import type { FieldRendererProps, FormField } from '../InfoView.types.js';
import useFieldRenderer from '../hooks/useFieldRenderer.js';
import { getOptionLabel, isGroupedOptions } from '../utils.js';
import FilePreviewTrigger from './FilePreviewTrigger.js';
import MultiSelect from './MultiSelect.js';
import PhotoAvatarRenderer from './PhotoAvatarRenderer.js';
import { DropdownPortal } from './PortalDropdown.js';


export default function FieldRenderer({
  field,
  formik,
  methods = {},
  sqlOpsUrls,
  refid,
  module_refid = "menuManager.main",
  optionsOverride,
  setFieldOptions
}: FieldRendererProps) {

  const {
    setHighlightedIndex, executeFieldMethod, handleFileUpload, handleKeyDown,
    setSearch, setOpen, setIsFocused, handleInputChange, handleSelect,
    handlePersist,
    optionCount, baseInputClasses, focusClasses, labelClasses, search, highlightedIndex,
    options, isDisabled, key, filteredOptions, open, listRef, triggerRef, isFocused, exactMatch
  } = useFieldRenderer({
    field, formik, methods, sqlOpsUrls,
    refid, module_refid,
    ...(optionsOverride && { optionsOverride }),
    ...(setFieldOptions && { setFieldOptions }),
  })

  const renderIcon = (field: FormField) => {
    if (field.icon) return <i className={field.icon} />;

    return null;
  };


  switch (field.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      // Formik stores ONLY the selected value (id)
      const value: string = formik.values[key] ?? "";
      // What user sees in the input
      const displayValue =
        search !== ""
          ? search
          : getOptionLabel(options, value) ?? String(value ?? "");

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div ref={triggerRef}>
            <input
              className={`${baseInputClasses} ${focusClasses}`}
              value={displayValue}
              placeholder={field.placeholder || "Type to search..."}
              onChange={handleInputChange}
              onBlur={() => { setTimeout(() => setOpen(false), 150); }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (exactMatch) {
                    const [val] = exactMatch;
                    formik.setFieldValue(key, val);
                    handlePersist(val, field, module_refid);
                  } else if (search.trim()) {
                    formik.setFieldValue(key, search.trim());
                    handlePersist(search.trim(), field, module_refid);
                  }
                  setOpen(false);
                  return;
                }
                // let existing handler handle arrows / escape etc
                handleKeyDown(e, true);
              }}
              disabled={isDisabled}
            />
          </div>

          <DropdownPortal anchorRef={triggerRef} open={open && !isDisabled}>
            <div
              ref={listRef}
              className="absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1"
            >
              {filteredOptions.length > 0 && exactMatch ? (
                filteredOptions.map(([val, label], idx) => (
                  <div
                    id={`${key}-${val}`}
                    key={val}
                    data-index={idx}
                    className={`px-3 py-2 cursor-pointer text-sm
                  ${highlightedIndex === idx
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                      }`}
                    onMouseDown={() => handleSelect(val)}
                  >
                    {label}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-400">
                  {`Press "ENTER" to ADD "${displayValue}" `}
                </div>
              )}
            </div>
          </DropdownPortal>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {

      if (field.multiple === true) {
        const valueArray: string[] = formik.values[key];
        return (
          <MultiSelect
            field={field}
            isDisabled={isDisabled}


            handleKeyDown={handleKeyDown}
            valueArray={valueArray}
            labelClasses={labelClasses}
            listRef={listRef}
            search={search}
            filteredOptions={filteredOptions}
            highlightedIndex={highlightedIndex}
            setSearch={setSearch}
            formik={formik}
            executeFieldMethod={executeFieldMethod}

            handlePersist={handlePersist}
            module_refid={module_refid}
            options={options}
            triggerRef={triggerRef}
            open={open}
            setOpen={setOpen}
          />
        );

      }

      console.log("open", open, key);


      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div

            className={`
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${isDisabled
                ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white border-gray-300 cursor-pointer"
              }
  `}

            ref={triggerRef}
            tabIndex={0}
            onClick={() => {
              setOpen(v => !v);
              setHighlightedIndex(0);
            }}


            onKeyDown={(e) => {
              if (isDisabled) return;
              handleKeyDown(e, true)
            }}

          >
            <span className="text-sm text-gray-700">
              {formik.values[key]
                ? getOptionLabel(options, formik.values[key]) ?? "Select option"
                : `Select ${field.label}`}
            </span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>


          {/* Dropdown body */}
          <DropdownPortal anchorRef={triggerRef} open={open}>
            <div
              ref={listRef}

              className="absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2">
              {/*  Search input */}
              {field.search && <div className="sticky top-0 bg-white p-1">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setHighlightedIndex(0);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, true)}
                  placeholder="Search..."
                  className="px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0"
                />
              </div>}

              {filteredOptions.length > 0 && <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  formik.setFieldValue(key, "");
                  setOpen(false);
                  handlePersist("", field, module_refid)
                  setSearch("");
                }}
                className={"px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50"}
              >
                Clear selection
              </div>
              }

              {/* Filtered options */}
              {filteredOptions.length > 0 ? (
                filteredOptions.map(([val, label], idx) => {
                  return <div
                    id={`${key}-${val}`}
                    key={val}
                    data-index={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      formik.setFieldValue(key, val);
                      handlePersist(val, field, module_refid)
                      setOpen(false);
                      setSearch("");
                      setHighlightedIndex(0);
                      executeFieldMethod("onChange", field, `${key}-${val}`)
                    }}
                    className={`px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${formik.values[key] === val
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : highlightedIndex === idx //  highlight state
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      }`}
                  >
                    {label}
                  </div>
                })
              ) : (
                <div className="px-2 py-1 text-gray-400 text-sm">No results</div>
              )}
            </div>
          </DropdownPortal>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
          )}
        </div>
      );
    }
 

    case "textarea":
      return (
        <>
          <div className="relative">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
              <textarea
                id={key}
                className={`${baseInputClasses} ${focusClasses} min-h-[120px] resize-none`}
                onFocus={() => setIsFocused(true)}
                name={key}
                value={formik.values[key]}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.setFieldValue(key, e.target.value);
                  handlePersist(e.target.value, field, module_refid)
                  executeFieldMethod("onChange", field, `${key}`)
                }}
                placeholder={field.placeholder}
                disabled={isDisabled}
              />
              {/* Animated border glow */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
                }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
            </div>

            {formik.touched[key] && formik.errors[key] &&
              <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
            }
          </div>
        </>
      );

    case "select":

      if (field.multiple === true) {
        const valueArray: string[] = formik.values[key];
        return (
          <MultiSelect
            field={field}
            isDisabled={isDisabled}

            handleKeyDown={handleKeyDown}
            valueArray={valueArray}
            labelClasses={labelClasses}
            listRef={listRef}
            search={search}
            filteredOptions={filteredOptions}
            highlightedIndex={highlightedIndex}
            setSearch={setSearch}
            formik={formik}
            executeFieldMethod={executeFieldMethod}

            handlePersist={handlePersist}
            module_refid={module_refid}
            options={options}
            triggerRef={triggerRef}
            open={open}
            setOpen={setOpen}
          />
        );

      }

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative">
            <select
              className={`${baseInputClasses} ${focusClasses} appearance-none ${!isDisabled ? "cursor-pointer" : ""} pr-12`}
              onFocus={() => setIsFocused(true)}
              name={key}
              id={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.setFieldValue(key, e.target.value);
                handlePersist(e.target.value, field, module_refid)
                executeFieldMethod("onChange", field, `${key}`)
              }}
              disabled={isDisabled}
            >
              {field?.["no-option"] !== "false" && !formik.values[key] && <option value="" disabled>
                {field?.["no-option"] || `Please select ${field.label}`}
              </option>}



              <option value="" className='text-gray-500'>Clear Selection</option>

              {!isGroupedOptions(options) &&
                Object.entries(options).map(([val, label]) => (
                  <option key={val} value={val} className="py-2">
                    {label}
                  </option>
                ))}

              {isGroupedOptions(options) &&
                Object.entries(options).map(([group, opts]) => (
                  <optgroup key={group} label={group}>
                    {Object.entries(opts).map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </optgroup>
                ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 transition-colors duration-300 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          )}
        </div>
      );

    case "radioList":
    case "radio":

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className={`flex ${optionCount > 3 ? "flex-col" : ""} gap-2 ml-1`}>
            {Object.entries(options || {}).map(([val, label]) => (
              <label
                key={val}
                htmlFor={`${key}-${val}`}
                className="flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <input
                  id={`${key}-${val}`}
                  type="radio"
                  name={key}
                  checked={formik.values[key] === val}
                  value={val}
                  onChange={(e) => {
                    formik.setFieldValue(key, e.target.value);
                    handlePersist(e.target.value, field, module_refid)
                    executeFieldMethod("onChange", field, `${key}-${val}`)
                  }
                  }
                  onBlur={formik.handleBlur}
                  disabled={isDisabled}
                  className={`h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${isDisabled ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `}
                />
                {label}
              </label>
            ))}
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">{String(formik.errors[key])}</span>
          )}
        </div>
      )

    case "checkbox": {
      const isMultiple = field.multiple === true;
      const value = formik.values[key];
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div className="flex flex-col gap-2 ml-1">
            {Object.entries(options || {}).map(([val, label]) => {
              const checked = isMultiple
                ? Array.isArray(value) && value.includes(val)
                : value === val;
              return <label
                key={val}
                className="flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <input
                  id={`${key}-${val}`}
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    let nextValue;

                    if (isMultiple) {
                      const current = Array.isArray(value) ? value : [];
                      nextValue = e.target.checked
                        ? [...current, val]
                        : current.filter(v => v !== val);
                    } else {
                      nextValue = e.target.checked ? val : "false";
                    }


                    formik.setFieldValue(key, nextValue);
                    handlePersist(nextValue, field, module_refid)
                    executeFieldMethod("onChange", field, `${key}-${val}`)
                  }}
                  onBlur={formik.handleBlur}
                  disabled={isDisabled}
                  className={`h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${isDisabled ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `}
                />
                {label}
              </label>
            })}
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500 ml-2">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "tags": {
      const values: string[] = formik.values[key];
      const searchValue = search.trim();
      const normalizedOptions = Array.isArray(options)
        ? options
        : Object.entries(options || {}).map(([value, label]) => ({ value, label }));

      const addTag = (val: string) => {
        if (isDisabled) return;
        if (val && !values.includes(val)) {
          let newValues = [...values, val];
          formik.setFieldValue(key, newValues);
          handlePersist(newValues, field, module_refid)
          setSearch("");
        }
      };

      const removeTag = (val: string) => {
        let value = values.filter((v) => v !== val)
        formik.setFieldValue(
          key,
          value
        );
        handlePersist(value, field, module_refid)
      };

      const getLabel = (val: string) =>
        normalizedOptions.find((o) => o.value === val)?.label ?? val;

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div
            className={`${baseInputClasses} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${isDisabled ? "pointer-events-none opacity-70" : ""}
            `
            }
            onClick={() =>
              !isDisabled &&
              document.getElementById(`${key}-input`)?.focus()
            }
          >
            {/* Selected tags */}
            {values.map((val) => (
              <span
                key={val}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100"
              >
                <span className="text-indigo-700">{getLabel(val)}</span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isDisabled) removeTag(val);
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  className="ml-1 text-indigo-500 hover:text-red-500 focus:outline-none"
                >
                  ×
                </button>
              </span>
            ))}

            {/* Input */}
            <input
              id={`${key}-input`}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") {
                  e.preventDefault();
                  addTag(searchValue);
                }
              }}
              placeholder={
                values.length === 0
                  ? field.placeholder || "Type and press Enter"
                  : ""
              }
              className="flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1"
              disabled={isDisabled}
            />
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "photo":
    case "avatar": {

      return (
        <PhotoAvatarRenderer
          formik={formik}
          field={field}
          sqlOpsUrls={sqlOpsUrls}
          module_refid={module_refid}

        />
      );
    }
    case "attachment":
    case "file":
      const isMultiple = field.multiple === true;
      const files = Array.isArray(formik.values[key])
        ? formik.values[key]
        : formik.values[key]
          ? [formik.values[key]]
          : [];
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative mb-1">
            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}
            <input
              id={key}
              type="file"
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              multiple={isMultiple}
              onChange={(e) => {
                const files = e.currentTarget.files;
                if (files) handleFileUpload(files);
                executeFieldMethod("onChange", field, key)
              }}
              onBlur={formik.handleBlur}
              placeholder={field.placeholder}
              disabled={isDisabled}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          <div className='flex flex-wrap gap-2'>
            {files.map((file) => {
              const name = file?.split("/").pop();
              return (
                <FilePreviewTrigger key={name} sqlOpsUrls={sqlOpsUrls} filePath={file} />
              );
            })}
          </div>

          {formik.touched[key] && formik.errors[key] &&
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );

    case "json": {
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div className="relative">
            <textarea
              id={key}
              name={key}
              value={formik.values[key]}
              onChange={(e) => {
                formik.setFieldValue(key, e.target.value);
                handlePersist(e.target.value, field, module_refid)
                executeFieldMethod("onChange", field, `${key}`)
              }
              }
              onBlur={formik.handleBlur}
              placeholder={field.placeholder || "Enter valid JSON"}
              disabled={isDisabled}
              className={`${baseInputClasses} ${focusClasses} min-h-[200px] font-mono text-sm resize-y`}
            />
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? "opacity-20" : ""
                }`}
              style={{ zIndex: -1, filter: "blur(8px)" }}
            />
          </div>

          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "date": {
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative"

          >
            {(
              <div className="absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <i className="fa-solid fa-calendar"></i>
              </div>
            )}
            <input
              id={key}
              type="date"
              name={key}
              min={field.min}
              max={field.max}
              value={formik.values[key] ?? ""}
              onChange={(e) => {
                formik.setFieldValue(key, e.target.value);
                handlePersist(e.target.value, field, module_refid)
                executeFieldMethod("onChange", field, `${key}`)
              }}
              onBlur={formik.handleBlur}
              placeholder={field.placeholder}
              disabled={isDisabled}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""
                }`}
            />
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? "opacity-20" : ""}`}
              style={{ zIndex: -1, filter: "blur(8px)" }}
            />
          </div>
          {formik.touched[key] && formik.errors[key] && (
            <span className="text-xs text-red-500">
              {String(formik.errors[key])}
            </span>
          )}
        </div>
      );
    }

    case "number":
      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative">
            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}
            <input
              id={key}
              type="number"
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.setFieldValue(key, e.target.value);
                handlePersist(e.target.value, field, module_refid)
                executeFieldMethod("onChange", field, `${key}`)
              }}
              step={field.step}
              placeholder={field.placeholder}
              disabled={isDisabled}
              min={field.min}
              max={field.max}
            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );

    default:

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative">
            {field.icon && (
              <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {renderIcon(field)}
              </div>
            )}
            <input
              id={key}
              type={field.type || "text"}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              value={formik.values[key]}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.setFieldValue(key, e.target.value);
                handlePersist(e.target.value, field, module_refid)
                executeFieldMethod("onChange", field, `${key}`)
              }}
              step={field.step}
              placeholder={field.placeholder}
              disabled={isDisabled}
              minLength={field.minlength}
              maxLength={field.maxlength}

            />
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-20' : ''
              }`} style={{ zIndex: -1, filter: 'blur(8px)' }}></div>
          </div>
          {formik.touched[key] && formik.errors[key] &&
            <span className="text-xs text-red-500">{String(formik.errors[key])}</span>
          }
        </div>
      );
  }
}

