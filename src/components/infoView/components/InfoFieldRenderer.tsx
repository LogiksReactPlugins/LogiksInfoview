import React, { useState } from 'react';
import type { InfoFieldRendererProps } from '../InfoView.types.js';
import { DEFAULT_LOGO } from '../constant.js';


export default function InfoFieldRenderer({ field, data }: InfoFieldRendererProps) {

  const key = field?.name;

  const baseInputClasses = `
    text-sm text-gray-600 break-words
  `;

  const labelClasses = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `;


  return (
    <div className="px-3 py-2 bg-gray-50 rounded-lg">
      <label className={labelClasses}>{field?.label}</label>
      <div className="relative">

        {(key.toLowerCase().includes("avatar") || key.toLowerCase().includes("logo")) ? (
          <img
            src={String(data?.[key])}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover border"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = DEFAULT_LOGO;
            }}

          />
        ) : (
          <p className={baseInputClasses}>
            {typeof data?.[key] === "object" ? JSON.stringify(data?.[key]) : String(data?.[key] ?? "")}
          </p>
        )}

      </div>

    </div>
  );

}

