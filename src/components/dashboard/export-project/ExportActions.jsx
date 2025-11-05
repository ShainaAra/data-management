"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import ExportModal from "./ExportModal";

export default function ExportActions({ onAddProject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (data) => {
    const newProject = {
      id: Date.now(),
      name: data?.name || "Untitled Project",
      desc: data?.desc || "",
      createdBy: "User",
      date: new Date().toISOString().split("T")[0],
    };

    // Call parent’s handler instead of setProjects
    onAddProject(newProject);

    console.log("New project added:", newProject);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Container for Title + Actions */}
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-gray-800">
          Export Project
        </h2>

        {/* Action box - original content */}
        <div className="flex items-center justify-between gap-4">
          {/* Search box */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 py-2 w-[420px]">
            <Search size={18} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white rounded-md px-3 py-1 text-sm hover:bg-blue-700"
            >
              + New Export Project
            </button>
          </div>
        </div>
      </div>
    
      <ExportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        mode="add"
      />
    </>
  );
}