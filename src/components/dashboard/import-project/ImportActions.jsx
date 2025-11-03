"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import ImportModal from "./ImportModal";

export default function ImportActions({ setProjects }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ When user saves from the modal
  const handleSave = (data) => {
    const newProject = {
      id: Date.now(),
      name: data?.name || "Untitled Project",
      desc: data?.desc || "",
      createdBy: "User",
      date: new Date().toISOString().split("T")[0],
    };

    // ✅ Add new project to table
    setProjects((prev) => [...prev, newProject]);

    console.log("✅ New project added:", newProject);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Action box */}
      <div className="flex items-center justify-between gap-4">
        {/* Search box */}
        <div
          className="flex items-center gap-3 
                      border border-gray-300 
                      rounded-md 
                      px-3 py-2 w-[420px]"
        >
          <Search size={18} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <label
            className="flex items-center gap-2 border border-gray-300 
                       rounded-md px-3 py-1 text-sm 
                       hover:bg-gray-100 cursor-pointer"
          >
            <input type="checkbox" className="accent-blue-600" />
            Completed Tasks
          </label>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white rounded-md px-3 py-1 
                       text-sm hover:bg-blue-700"
          >
            + New Project
          </button>
        </div>
      </div>

      {/* Modal */}
      <ImportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        mode="add"
      />
    </>
  );
}
