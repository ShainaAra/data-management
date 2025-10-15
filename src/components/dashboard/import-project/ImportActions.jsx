"use client";

import React from "react";
import { Search } from "lucide-react"; // optional icon lib....replace/remove if not installed

export default function ImportActions() {
  return (
    <div className="flex 
                    items-center 
                    justify-between 
                    gap-4">

      {/* search box */}
      <div className="flex 
                      items-center 
                      gap-3 
                      border border-gray-300 
                      rounded-md 
                      px-3 py-2 w-[420px]">

        <Search size={18} className="text-gray-600" />

        <input
          type="text"
          placeholder="Search..."
          className="outline-none 
                     w-full text-sm"
        />
      </div>

      {/* buttons right side */}
      <div className="flex items-center gap-3">
        <button className="border border-gray-300 
                           rounded-md 
                           px-3 py-1 
                           text-sm 
                           hover:bg-gray-100">
          Task History
        </button>

        <label className="flex 
                          items-center 
                          gap-2 border border-gray-300 
                          rounded-md 
                          px-3 py-1 
                          text-sm 
                          hover:bg-gray-100 
                          cursor-pointer">

          <input type="checkbox" className="accent-blue-600" />
          Completed Tasks
        </label>

        <button className="bg-blue-600 
                           text-white 
                           rounded-md 
                           px-3 py-1 
                           text-sm 
                           hover:bg-blue-700">
          + New
        </button>
      </div>
    </div>
  );
}
