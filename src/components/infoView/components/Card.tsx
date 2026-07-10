import { useState } from 'react';
import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

export default function Card({ title, children }: CardProps) {


    return (
      <div className="group relative h-full">
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg overflow-hidden">

                {/* Header with gradient background */}
                <button

                    className="w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 "
                >
                    <div className="flex items-center space-x-3">
                        {/* Animated dot indicator */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 bg-action`}></div>
                        <h3 className="text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            {title}
                        </h3>
                    </div>


                </button>

                {/* Content with smooth slide animation */}
              <div className="flex-1 flex flex-col min-h-0 transition-all duration-500 ease-in-out">
    <div className="flex-1 flex flex-col min-h-0 px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white">
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
            {children}
        </div>
    </div>
</div>
            </div>
        </div>
    );
};

;
