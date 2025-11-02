"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ExportEditForm({ project, setProject, setIsEditMode }) {
  const [formData, setFormData] = useState({ ...project });
  const [showConfirm, setShowConfirm] = useState(false);

  // Final save confirmation
  const handleConfirmSave = () => {
    setProject({
      ...project,
      name: formData.name,
      desc: formData.desc,
    });
    setIsEditMode(false);
    setShowConfirm(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      {/* Project Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Project Name</label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <Textarea
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          required
        />
      </div>

      {/* Created By (read-only) */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Created By
        </label>
        <Input
          value={formData.createdBy}
          disabled
          className="bg-gray-100 text-gray-600 cursor-not-allowed"
        />
      </div>

      {/* Created Date (read-only) */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Created Date
        </label>
        <Input
          type="date"
          value={formData.date}
          disabled
          className="bg-gray-100 text-gray-600 cursor-not-allowed"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsEditMode(false)}
        >
          Cancel
        </Button>

        <Button
          type="button"
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setShowConfirm(true)}
        >
          Save Changes
        </Button>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save changes?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to save the updates to this project?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmSave}>
              Yes, Save Changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
}
