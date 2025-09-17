import { useState } from 'react';
import type { ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  isFirst?: boolean; // 👈 now it's valid
}

export default function Accordion({ title, children, isFirst }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <div className={`group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen`}>
      {/* Decorative gradient line */}


      <div className="flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ">
        {/* Header with gradient background */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 "
        >
          <div className="flex items-center space-x-3">
            {/* Animated dot indicator */}
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isOpen
              ? 'bg-action'
              : 'bg-gray-300'
              }`}></div>
            <h3 className="text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>

          {/* Animated chevron with glow effect */}
          <div className={`relative transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${isOpen ? 'bg-action opacity-30' : 'bg-transparent opacity-0'
              }`}></div>
            <svg
              className="relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Content with smooth slide animation */}
        <div
          className={`flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0">
            <div className="space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

;
