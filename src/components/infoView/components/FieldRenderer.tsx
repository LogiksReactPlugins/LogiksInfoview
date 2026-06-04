import type { FieldRendererProps, FormField } from '../InfoView.types.js';
import useFieldRenderer from '../hooks/useFieldRenderer.js';
import { fetchGeolocation, getMaxDate, getOptionLabel, isGroupedOptions } from '../utils.js';
import CustomSelect from './CustomSelect.js';
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
  setFieldOptions,
  fieldLoading,
  setFieldLoading
}: FieldRendererProps) {

  const {
    setHighlightedIndex, executeFieldMethod, handleFileUpload, handleKeyDown,
    setSearch, setOpen, setIsFocused, handleInputChange, handleSelect,
    handlePersist, setLoading, removeFile,
    optionCount, baseInputClasses, focusClasses, labelClasses, search, highlightedIndex,
    options, isDisabled, key, filteredOptions, open, listRef, triggerRef, isFocused, exactMatch, loading
  } = useFieldRenderer({
    field, formik, methods, sqlOpsUrls,
    refid, module_refid,
    ...(setFieldLoading && { setFieldLoading }),
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
                  setSearch("")
                  return;
                }
                // let existing handler handle arrows / escape etc
                handleKeyDown(e, true);
              }}
              disabled={isDisabled}
            />
            {(loading || fieldLoading) && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <i className="fa-solid fa-spinner fa-spin text-gray-900" />
              </div>
            )}
          </div>

          <DropdownPortal anchorRef={triggerRef} open={open && !isDisabled}>
            <div
              ref={listRef}
              className=" w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1"
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
            loading={loading || !!fieldLoading}
          />
        );

      }

      return (
        <CustomSelect
          field={field}
          isDisabled={isDisabled}
          handleKeyDown={handleKeyDown}
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
          loading={loading || !!fieldLoading}

        />
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
            loading={loading || !!fieldLoading}
          />
        );

      }

      if (field.search) {
        return (
          <CustomSelect
            field={field}
            isDisabled={isDisabled}
            handleKeyDown={handleKeyDown}
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
            loading={loading || !!fieldLoading}

          />
        )
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
              {(loading || fieldLoading) ? (
                <i className="fa-solid fa-spinner fa-spin text-gray-900"></i>
              ) : (
                <svg
                  className="w-5 h-5 transition-colors duration-300 text-gray-400"
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
              )}
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

    case "camera":
    case "camera2":
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
      const max = field.max !== undefined ? Number(field.max) : Infinity;
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
             {loading && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                  <i className="fa-solid fa-spinner fa-spin text-gray-900" />
                </div>
              )}
            <input
              id={key}
              type="file"
              accept={field.accept}
              className={`${baseInputClasses} ${focusClasses} ${field.icon ? "pl-9" : ""} `}
              onFocus={() => setIsFocused(true)}
              name={key}
              multiple={isMultiple}
              onChange={(e) => {
                const selectedFiles = e.currentTarget.files;
                const fileArray = Array.from(e.currentTarget.files || [])
                const total = files.length + fileArray.length;
                if (total > max) {
                  alert(`You can upload maximum ${max} file(s)`);
                  e.currentTarget.value = "";
                  return;
                }
                if (selectedFiles) handleFileUpload(selectedFiles);
                executeFieldMethod("onChange", field, key);
                e.currentTarget.value = "";
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

              return (

                <div key={file} className="relative group">
                  <FilePreviewTrigger
                    sqlOpsUrls={sqlOpsUrls}
                    filePath={file}
                  />

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition"
                  >
                    ×
                  </button>
                </div>
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
      const maxDate = getMaxDate(field.max);
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
              max={maxDate}
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

    case "geolocation": {
      const value = formik.values[key] || "";

      const handleFetchLocation = async () => {
        try {

          const geo = await fetchGeolocation();

          formik.setFieldValue(key, geo);
          handlePersist(geo, field, module_refid);
        } catch (err) {
          console.error(err);
          formik.setFieldError(key, "Failed to fetch location");
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="relative">
          <label className={labelClasses}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <div className="relative">
            <input
              type="text"
              value={value}
              readOnly
              className={`${baseInputClasses} ${focusClasses}`}
              placeholder="Click to fetch location"
            />

            <button
              type="button"
              onClick={handleFetchLocation}
              disabled={loading}
              className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            >
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin text-red-500"></i>
              ) : (
                <i className="fa-solid fa-location-dot text-red-600 hover:text-red-700"></i>
              )}
            </button>
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

