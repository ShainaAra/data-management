"use client";

import React, { useState } from "react";
import ExportTable from "@/app/dashboard/export-project/[projectId]/ExportTable";
import ExportActions from "./ExportActions";
import ExportModal from "./ExportModal";

export default function ExportProject() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Open edit modal with selected project
  const handleEdit = (project) => {
    setEditingProject(project);
    setIsEditModalOpen(true);
  };

  // Close modal
  const handleCloseEditModal = () => {
    setEditingProject(null);
    setIsEditModalOpen(false);
  };

  // Save edits
  const handleSaveEdit = (updatedProject) => {
    console.log("Edited project:", updatedProject);
    setEditingProject(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="-mx-1 pt-2 pb-4">
      {/* + New Task Action Card (untouched) */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4 mb-2">
        <ExportActions />
      </div>

      {/* Task Table */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4">
        <ExportTable onEdit={handleEdit} />
      </div>

      {/* Edit Modal */}
      <ExportModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        project={editingProject}
        mode="edit"
      />
    </div>
  );
}
