import React from 'react'
import type { FieldRendererProps } from '../InfoView.types.js'

export default function FieldRenderer({
  field,
  formik,
  methods = {},
  sqlOpsUrls,
  refid,
  optionsOverride,
  setFieldOptions
}: FieldRendererProps) {
  return (
    <div>FieldRenderer</div>
  )
}
