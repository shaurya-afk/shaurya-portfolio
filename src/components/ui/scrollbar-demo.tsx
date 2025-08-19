"use client";
import { CustomScrollbar } from "./custom-scrollbar";

export const ScrollbarDemo = () => {
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[#f5f5dc] mb-4">
        Custom Scrollbar Demo
      </h2>
      
      {/* Default scrollbar */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#f5f5dc]">Default Scrollbar</h3>
        <CustomScrollbar className="h-32 w-full border border-neutral-700 rounded-lg p-4">
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-2 bg-neutral-800 rounded text-[#f5f5dc]">
                Scrollable content item {i + 1}
              </div>
            ))}
          </div>
        </CustomScrollbar>
      </div>

      {/* Thin scrollbar */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#f5f5dc]">Thin Scrollbar</h3>
        <CustomScrollbar 
          size="thin" 
          className="h-32 w-full border border-neutral-700 rounded-lg p-4"
        >
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-2 bg-neutral-800 rounded text-[#f5f5dc]">
                Thin scrollbar item {i + 1}
              </div>
            ))}
          </div>
        </CustomScrollbar>
      </div>

      {/* Hover-only scrollbar */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#f5f5dc]">Hover-Only Scrollbar</h3>
        <CustomScrollbar 
          showOnHover 
          className="h-32 w-full border border-neutral-700 rounded-lg p-4"
        >
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-2 bg-neutral-800 rounded text-[#f5f5dc]">
                Hover to see scrollbar item {i + 1}
              </div>
            ))}
          </div>
        </CustomScrollbar>
      </div>

      {/* Horizontal scrollbar */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#f5f5dc]">Horizontal Scrollbar</h3>
        <CustomScrollbar className="h-32 w-full border border-neutral-700 rounded-lg p-4">
          <div className="flex space-x-4 w-max">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="p-4 bg-neutral-800 rounded text-[#f5f5dc] min-w-[200px]">
                Horizontal item {i + 1}
              </div>
            ))}
          </div>
        </CustomScrollbar>
      </div>
    </div>
  );
};
