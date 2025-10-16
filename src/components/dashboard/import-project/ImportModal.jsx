"use client";

import React from "react";
import { X } from "lucide-react";

export default function ImportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 
                 bg-white/70 
                 backdrop-blur-[2px] 
                 flex items-center 
                 justify-center z-50 
                 transition-all 
                 duration-300 
                 ease-in-out 
                 animate-fadeIn"
    >
      <div
        className="bg-white 
                   rounded-lg 
                   shadow-lg 
                   w-full max-w-md 
                   p-6 relative 
                   transform transition-all 
                   duration-300 scale-95 
                   animate-zoomIn"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 
                   text-gray-500 
                   hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg 
                       font-semibold mb-4 
                       text-gray-800">
          Import Project
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-3">

          {/* Upload File */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Upload File
            </label>

            <input
              type="file"
              className="mt-1 w-full border 
                      border-gray-300 
                        rounded-md 
                        px-3 py-2 
                        text-sm"
            />
          </div>

          {/* Project Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              className="mt-1 w-full 
                         border border-gray-300 
                         rounded-md 
                         px-3 py-2 
                         text-sm"
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              rows="3"
              className="mt-1 w-full 
                         border border-gray-300 
                         rounded-md px-3 py-2 
                         text-sm resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 
                         rounded-md 
                         px-4 py-2 
                         text-sm 
                         hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 
                         text-white 
                         rounded-md 
                         px-4 py-2 
                         text-sm 
                         hover:bg-blue-700"
            >
              Import
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}
