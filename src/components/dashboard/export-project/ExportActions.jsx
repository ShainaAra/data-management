"use client";

import React from "react";
import { Search } from "lucide-react";

export default function ExportActions({ onExportClick }) {
  return (
    <div className="flex items-center justify-between gap-4">

      {/* Search Bar */}
      <div className="flex items-center gap-3 
                        border border-gray-300 
                        rounded-md 
                        px-3 py-2 w-[420px]">

        <Search size={18} className="text-gray-600" />
        
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-sm"
        />
      </div>

      {/* Export Now Button */}
      <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 
                       text-white 
                       rounded-md 
                       px-3 py-1 
                       text-sm 
                       hover:bg-blue-700">
             Create New Project
          </button>
    </div>
  );
}
