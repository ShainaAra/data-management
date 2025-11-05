"use client";

import React, { useState } from "react";
import ExportTable from "@/app/dashboard/export-project/[projectId]/ExportTable";
import ExportActions from "./ExportActions";
import ExportModal from "./ExportModal";

export default function ExportProject() {
  const [projects, setProjects] = useState([
    { id: 1, name: "PandaBot", desc: "IoT-based automation project", createdBy: "Nash", date: "2025-10-16" },
    { id: 2, name: "Na-ar-tap", desc: "RFID Attendance System", createdBy: "Ara", date: "2025-10-10" },
    { id: 3, name: "Obscura", desc: "Encryption and Decryption Calculator", createdBy: "Jamie", date: "2025-09-25" },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleAddProject = (newProject) => {
    setProjects((prev) => [...prev, { id: Date.now(), ...newProject }]);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditingProject(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEdit = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
    setEditingProject(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="-mx-1 pt-2 pb-4 space-y-4">
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4 mb-2">
        {/* Pass setProjects to allow adding */}
        <ExportActions onAddProject={handleAddProject} />
      </div>

      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4">
        {/* Pass projects and setProjects for table operations */}
        <ExportTable projects={projects} setProjects={setProjects} onEdit={handleEdit} />
      </div>

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
