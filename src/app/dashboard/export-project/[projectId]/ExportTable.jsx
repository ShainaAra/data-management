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

export default function ExportTable({ projects, setProjects }) {
  const router = useRouter();
  const [openDialogId, setOpenDialogId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [openSaveDialog, setOpenSaveDialog] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);

  const handleSelectAll = (checked) => {
    setSelectedProjects(checked ? projects.map((p) => p.id) : []);
  };

  const handleSelectOne = (id, checked) => {
    setSelectedProjects((prev) =>
      checked ? [...prev, id] : prev.filter((pid) => pid !== id)
    );
  };

  const allChecked = selectedProjects.length === projects.length && projects.length > 0;
  const partiallyChecked = selectedProjects.length > 0 && selectedProjects.length < projects.length;

  const handleView = (project) => router.push(`/dashboard/export-project/${project.id}`);

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
    setSelectedProjects((prev) => prev.filter((pid) => pid !== id));
  };

  return (
    <>
      <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200 bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">
                <Checkbox
                  aria-label="Select all projects"
                  checked={allChecked}
                  indeterminate={partiallyChecked}
                  onCheckedChange={handleSelectAll}
                />
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
                  <Checkbox
                    aria-label={`Select ${project.name}`}
                    checked={selectedProjects.includes(project.id)}
                    onCheckedChange={(checked) => handleSelectOne(project.id, checked)}
                  />
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
                              Are you sure you want to delete{" "}
                              <strong>{project.name}</strong>? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>

                          <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setOpenDialogId(null)}>
                              Cancel
                            </AlertDialogCancel>
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
    </>
  );
}
