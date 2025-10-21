"use client";

import React, { useState } from "react";
import ImportTable from "@/app/dashboard/import-project/[projectId]/ImportTable";
import ImportActions from "./ImportActions";
import ImportModal from "./ImportModal";

export default function ImportProject() {
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
        <ImportActions />
      </div>

      {/* Task Table */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4">
        <ImportTable onEdit={handleEdit} />
      </div>

      {/* Edit Modal */}
      <ImportModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        project={editingProject}
        mode="edit"
      />
    </div>
  );
}
