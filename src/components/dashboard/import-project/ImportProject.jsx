"use client";

import React, { useState } from "react";
import ImportTable from "@/app/dashboard/import-project/[projectId]/ImportTable";
import ImportActions from "./ImportActions";
import ImportModal from "./ImportModal";

export default function ImportProject() {
  const [projects, setProjects] = useState([
  { id: 1, name: "PandaBot", desc: "IoT-based automation project", createdBy: "Nash", date: "2025-10-16" },
  { id: 2, name: "Na-ar-tap", desc: "RFID Attendance System", createdBy: "Ara", date: "2025-10-10" },
  { id: 3, name: "Obscura", desc: "Encryption and Decryption Calculator", createdBy: "Jamie", date: "2025-09-25" },
]);


  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);


  //handle adding a new project
  const handleAddProject = (newProject) => {
    const projectWithId = {
      id: Date.now(),
      ...newProject,
    };
    setProjects((prev) => [...prev, projectWithId]);
  };

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
    setProjects((prev) => 
    prev.map((p) =>
      (p.id === updatedProject.id ? updatedProject : p))
  );
    setEditingProject(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="-mx-1 pt-2 pb-4">
      {/* + New Task Action Card (untouched) */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4 mb-2">
        <ImportActions setProjects={setProjects} />
      </div>

      {/* Task Table */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4">
        <ImportTable projects={projects} onEdit={handleEdit}
        setProjects={setProjects} />
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
