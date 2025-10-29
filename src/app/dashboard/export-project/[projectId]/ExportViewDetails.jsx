"use client";

import React, { useState } from "react";
import ExportHeader from "./ExportHeader";
import ExportEditModal from "@/components/dashboard/export-project/ExportEditModal";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function ExportViewDetails({ project }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <ExportHeader
        title="Export Page Overview"
        project={project}
        onEdit={() => setIsEditOpen(true)}
        onDelete={() => setIsDeleteConfirmOpen(true)}
      />

      {/* Author Section */}
      <div className="flex items-center mb-6">
        <div
          className="w-16 h-16 rounded-full 
                     bg-blue-100 flex items-center 
                     justify-center text-lg 
                     font-bold text-blue-700"
        >
          {project.createdBy.charAt(0)}
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-800">
            {project.createdBy}
          </h3>
          <p className="text-gray-500 text-sm">
            {project.createdBy.toLowerCase().replace(/\s+/g, ".")}@aretex.com
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-3 bg-gray-50">
          <p className="text-sm text-gray-500">Project ID</p>
          <p className="text-base font-medium text-gray-800">{project.id}</p>
        </div>

        <div className="border rounded-lg p-3 bg-gray-50">
          <p className="text-sm text-gray-500">Project Name</p>
          <p className="text-base font-medium text-gray-800">{project.name}</p>
        </div>

        <div className="border rounded-lg p-3 bg-gray-50 md:col-span-2">
          <p className="text-sm text-gray-500">Project Description</p>
          <p className="text-base font-medium text-gray-800">{project.desc}</p>
        </div>

        <div className="border rounded-lg p-3 bg-gray-50">
          <p className="text-sm text-gray-500">Created Date</p>
          <p className="text-base font-medium text-gray-800">{project.date}</p>
        </div>
      </div>

      {/* Edit Modal */}
      <ExportEditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />

      {/* Delete Confirmation */}
      <AlertDialog
        open={isDeleteConfirmOpen}
        onOpenChange={setIsDeleteConfirmOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Export Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <strong>{project.name}</strong>? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => setIsDeleteConfirmOpen(false)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
