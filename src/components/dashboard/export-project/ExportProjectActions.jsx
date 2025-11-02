"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function ExportProjectActions({ projectId, onEditToggle }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    onEditToggle?.(); // optional callback to let parent know edit mode changed
  };

  const handleDelete = () => {
    console.log(`Deleted project with ID: ${projectId}`);
  };

  return (
    <div className="flex justify-end gap-3 pt-6">
      <Button variant="secondary" onClick={handleEdit}>
        {isEditing ? "Cancel Edit" : "Edit"}
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              project and remove it from your list.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
          
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
