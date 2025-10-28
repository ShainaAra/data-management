"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MoreVertical, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ImportTable() {
  const router = useRouter();
  const [openDialogId, setOpenDialogId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [openSaveDialog, setOpenSaveDialog] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, 
      name: "PandaBot", 
      desc: "IoT-based automation project", 
      createdBy: "Nash", 
      date: "2025-10-16" },

    { id: 2, 
      name: "Na-ar-tap", 
      desc: "RFID Attendance System", 
      createdBy: "Ara", 
      date: "2025-10-10" },

    { id: 3, 
      name: "Obscura", 
      desc: "Encryption and Decryption Calculator", 
      createdBy: "Jamie", 
      date: "2025-09-25" },
  ]);

  const handleView = (project) => {
    router.push(`/dashboard/import-project/${project.id}`);
  };

  const handleEditClick = (project) => {
    setProjectToEdit({ ...project });
    setIsEditModalOpen(true);
  };

  const handleSaveConfirm = () => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectToEdit.id ? projectToEdit : p))
    );
    setIsEditModalOpen(false);
    setOpenSaveDialog(false);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setOpenDialogId(null);
  };

  return (
    <>
      <div className="overflow-x-auto 
                      rounded-2xl 
                      shadow-sm 
                      border border-gray-200 
                      bg-white">

        <table className="min-w-full border-collapse">
          
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">
                <Checkbox aria-label="Select all projects" />
              </th>
              <th className="px-4 py-3 text-left font-semibold">Project Name</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
              <th className="px-4 py-3 text-left font-semibold">Created By</th>
              <th className="px-4 py-3 text-left font-semibold">Created Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            {projects.map((project) => (
              <tr key={project.id} className="border-t hover:bg-gray-50 transition">

                <td className="px-4 py-3">
                  <Checkbox aria-label={`Select ${project.name}`} />
                </td>

                <td className="px-4 py-3 font-medium">{project.name}</td>
                <td className="px-4 py-3">{project.desc}</td>
                <td className="px-4 py-3">{project.createdBy}</td>
                <td className="px-4 py-3">{project.date}</td>
                <td className="px-4 py-3 text-right">

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40">

                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={() => handleView(project)}>
                    View Details
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => handleEditClick(project)}>
                    Edit
                  </DropdownMenuItem>

                  {/* Delete with AlertDialog */}
                  <AlertDialog open={openDialogId === project.id} onOpenChange={() => setOpenDialogId(project.id)}>

                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem
                        onSelect={(e) => {
                          e.preventDefault();
                          setOpenDialogId(project.id);
                        }}
                        className="text-red-600 focus:text-red-600"
                      >
                        Delete
                      </DropdownMenuItem>
                    </AlertDialogTrigger>

                    <AlertDialogContent>

                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Project</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete <strong>{project.name}</strong>? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpenDialogId(null)}>Cancel</AlertDialogCancel>

                        <AlertDialogAction
                          className="bg-red-600 text-white hover:bg-red-700"
                          onClick={() => handleDelete(project.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>

                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

      {/* Edit Modal */}
      {isEditModalOpen && projectToEdit && (
        <div className="fixed inset-0 
                        flex items-center 
                        justify-center 
                        bg-black/40 z-50">

          <div className="bg-white p-6 
                            rounded-2xl 
                            shadow-lg 
                            w-full max-w-md 
                            relative">
                              
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute 
                         top-3 right-3 
                         text-gray-400 
                         hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold mb-4">Edit Project</h2>

            <div className="space-y-3">

              <div>
                <label className="block text-sm font-medium mb-1">Project Name</label>
                <Input
                  value={projectToEdit.name}
                  onChange={(e) =>
                    setProjectToEdit({ ...projectToEdit, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={projectToEdit.desc}
                  onChange={(e) =>
                    setProjectToEdit({ ...projectToEdit, desc: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">

                <Button
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>

                {/* Save Changes Alert */}
                <AlertDialog open={openSaveDialog} onOpenChange={setOpenSaveDialog}>

                  <AlertDialogTrigger asChild>
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Save Changes
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>

                    <AlertDialogHeader>

                      <AlertDialogTitle>Confirm Save</AlertDialogTitle>

                      <AlertDialogDescription>
                        Are you sure you want to save the changes to{" "}
                        <strong>{projectToEdit.name}</strong>?
                      </AlertDialogDescription>
                      
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleSaveConfirm}>
                        Yes, Save Changes
                      </AlertDialogAction>
                    </AlertDialogFooter>

                  </AlertDialogContent>

                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
