"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowLeft } from "lucide-react";

export default function ExportHeader({ project, onEdit }) {
  const router = useRouter();

  const handleDelete = () => {
    console.log(`Deleted export project: ${project?.name}`);
    router.push("/dashboard/export-project");
  };

  return (
    <div className="mb-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mt-6">
        {/* Header Title */}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Export Page Overview
        </h2>

        {/* Action Buttons */}
        <div className="space-x-2">
          {/* Edit Button */}
          <Button
            onClick={onEdit}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Edit
          </Button>

          {/* Delete Button with Confirmation Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 text-white hover:bg-red-700">
                Delete
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Export Project</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this project? This action
                  cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 text-white hover:bg-red-700"
                  onClick={handleDelete}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
