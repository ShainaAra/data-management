"use client";

import React from "react";
import { X } from "lucide-react";

export default function ExportEditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Export</h2>
          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Project Name</label>
            <input className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea className="w-full border rounded-md p-2" rows="3" />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 border rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
