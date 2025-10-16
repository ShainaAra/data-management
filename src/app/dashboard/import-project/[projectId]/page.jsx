"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const isEditMode = searchParams.get("edit") === "true";
  const [project, setProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    createdBy: "",
    date: "",
  });

  // dummy dataset for demo
  const dummyData = [
    { id: 1, name: "PandaBot", desc: "IoT-based automation project", createdBy: "Nash", date: "2025-10-16" },
    { id: 2, name: "Na-ar-tap", desc: "RFID Attendance System", createdBy: "Ara", date: "2025-10-10" },
    { id: 3, name: "Obscura", desc: "Encryption and Decryption Calculator", createdBy: "Jamie", date: "2025-09-25" },
  ];

  // load project details
  useEffect(() => {
    if (isNaN(Number(projectId))) {
      router.replace("/dashboard/import-project");
      return;
    }

    const found = dummyData.find((p) => p.id.toString() === projectId);
    if (!found) {
      router.replace("/dashboard/import-project");
      return;
    }

    setProject(found);
    setFormData({
      name: found.name,
      desc: found.desc,
      createdBy: found.createdBy,
      date: found.date,
    });
  }, [projectId]);

  // handle Save (mock for now)
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated project:", formData);
    router.push(`/dashboard/import-project/${projectId}`);
  };

  // handle Delete
  const handleDelete = () => {
    console.log("Deleted project:", projectId);
    router.push("/dashboard/import-project");
  };

  if (!project) {
    return <div className="p-6 text-gray-600">Loading project details...</div>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link
        href="/dashboard/import-project"
        className="flex items-center gap-2 
                 text-blue-600 
                 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      {/* view mode */}
      {!isEditMode ? (
        <>
          <h1 className="text-2xl font-semibold mb-6">{project.name}</h1>

          <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border">
            <p>
              <strong>Project ID:</strong> {project.id}
            </p>

            <p>
              <strong>Project Name:</strong> {project.name}
            </p>

            <p>
              <strong>Description:</strong> {project.desc}
            </p>

            <p>
              <strong>Created By:</strong> {project.createdBy}
            </p>

            <p>
              <strong>Created Date:</strong> {project.date}
            </p>
          </div>

          {/* actions below */}
          <div className="mt-6 flex justify-end gap-3">
            <Button
              onClick={() =>
                router.push(`/dashboard/import-project/${project.id}?edit=true`)
              }
              className="bg-black text-white hover:bg-gray-800"
            >
              Edit
            </Button>

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
        </>
      ) : (
        /* edit mode*/
        <form
          onSubmit={handleSave}
          className="bg-white p-6 rounded-xl shadow-sm border space-y-4">

          <h1 className="text-2xl font-semibold mb-2">Edit Project</h1>

          <div>
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Created By</label>
            <Input
              value={formData.createdBy}
              onChange={(e) =>
                setFormData({ ...formData, createdBy: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Created Date</label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                router.push(`/dashboard/import-project/${projectId}`)
              }
            >
              Cancel
            </Button>

            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Save Changes
            </Button>
            
          </div>
        </form>
      )}
    </div>
  );
}
