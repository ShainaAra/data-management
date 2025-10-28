"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import ExportEditModal from "./ExportEditModal";
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
    <div className="space-y-6">
      {/* ================= Author Section ================= */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Author: {project.createdBy}
          </h2>

          <div className="flex items-center gap-4 mt-3">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-lg font-semibold text-blue-700 shadow-inner">
              {project.createdBy.charAt(0)}
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                {project.createdBy}
              </h3>
              <p className="text-gray-500 text-sm">
                {project.createdBy.toLowerCase().replace(/\s+/g, ".")}@aretex.com
              </p>
            </div>
          </div>
        </div>

        {/* Edit & Delete Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setIsEditOpen(true)}
            className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700"
          >
            Edit
          </button>

          <AlertDialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
            <AlertDialogTrigger asChild>
              <button className="bg-red-600 text-white rounded-md px-4 py-2 text-sm hover:bg-red-700">
                Delete
              </button>
            </AlertDialogTrigger>

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
      </div>

      {/* ================= Project Info Fields ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p className="text-sm text-gray-500 mb-1">Project ID</p>
          <p className="text-base font-medium text-gray-800">{project.id}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p className="text-sm text-gray-500 mb-1">Project Name</p>
          <p className="text-base font-medium text-gray-800">{project.name}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 md:col-span-2">
          <p className="text-sm text-gray-500 mb-1">Project Description</p>
          <p className="text-base font-medium text-gray-800">{project.desc}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p className="text-sm text-gray-500 mb-1">Created Date</p>
          <p className="text-base font-medium text-gray-800">{project.date}</p>
        </div>
      </div>

      {/* ================= Edit Modal ================= */}
      <ExportEditModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
    </div>
  );
}
