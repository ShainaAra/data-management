

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

export default function ProjectHeader({ project, setIsEditMode, onEdit }) {
  const router = useRouter(); // Ensure we have access to the router instance

  const handleDelete = () => {
    // Simulate deletion (backend logic will be added later)
    console.log(`Deleted project: ${project.name}`);

    // Redirect back to main task table page
    router.push("/dashboard/import-project");
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Author: {project.createdBy}
      </h2>

      <div className="space-x-2">
        {/* Edit Button */}
        <Button
          onClick={onEdit}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit
        </Button>

        {/* Delete Button with Alert Dialog */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Delete
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>

            <AlertDialogHeader>
              <AlertDialogTitle>Delete Project</AlertDialogTitle>

              <AlertDialogDescription>
                Are you sure you want to delete this project? This action cannot
                be undone.
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
  );
}
