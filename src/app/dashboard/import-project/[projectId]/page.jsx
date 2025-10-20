"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Pencil, Trash } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const router = useRouter();

  const [project, setProject] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    createdBy: "",
    date: "",
  });

  // Dummy dataset
  const dummyData = [
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
  ];

  const [dummyFiles, setDummyFiles] = useState([
    { id: 1, 
      entity: "Student Data", 
      fileUploaded: "students.csv", 
      createdDate: "2025-10-12", 
      format: "CSV", 
      description: "Contains student attendance logs." },

    { id: 2, 
      entity: "RFID Logs", 
      fileUploaded: "rfid_logs.xlsx", 
      createdDate: "2025-10-14", 
      format: "XLSX", 
      description: "Records of RFID scans." },

    { id: 3, 
      entity: "Sensor Config", 
      fileUploaded: "config.json", 
      createdDate: "2025-10-15", 
      format: "JSON", 
      description: "Configuration for IoT sensors." },
  ]);

  const [editFile, setEditFile] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  useEffect(() => {
    const found = dummyData.find((p) => p.id.toString() === projectId);
    if (!found) {
      router.replace("/dashboard/import-project");
      return;
    }
    setProject(found);
    setFormData(found);
  }, [projectId]);

  const handleSave = (e) => {
    e.preventDefault();
    setProject(formData);
    setIsEditMode(false);
  };

  const handleDeleteProject = () => {
    router.push("/dashboard/import-project");
  };

  const handleFileDelete = (id) => {
    setDummyFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleFileEditSave = (e) => {
    e.preventDefault();
    setDummyFiles((prev) =>
      prev.map((file) => (file.id === editFile.id ? editFile : file))
    );
    setEditFile(null);
  };

  const [formDataImport, setFormDataImport] = useState({
    entity: "",
    fileUploaded: "",
    createdDate: "",
    format: "",
    description: "",
  });

  const handleFileImport = (e) => {
    e.preventDefault();
    const newFile = {
      id: dummyFiles.length + 1,
      ...formDataImport,
    };
    setDummyFiles([...dummyFiles, newFile]);
    setFormDataImport({
      entity: "",
      fileUploaded: "",
      createdDate: "",
      format: "",
      description: "",
    });
    setIsImportModalOpen(false);
  };

  if (!project)
    return <div className="p-6 text-gray-600">Loading project details...</div>;

  return (
    <div className="-mx-1 mt-4">
      <div className="border border-blue-400 
                    bg-white rounded-md 
                    shadow-sm p-10 w-full">

        <Link
          href="/dashboard/import-project"
          className="flex items-center gap-2 
                   text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <Card className="border-none shadow-none">
          <CardContent className="p-0">




{/* Header/Author/Edit/Delete */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold text-gray-800">
            Author: {project.createdBy}
          </h2>

              {!isEditMode && (
                <div className="space-x-2">
                  <Button
                    onClick={() => setIsEditMode(true)}
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
                          Are you sure you want to delete this project? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>

                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                        <AlertDialogAction
                          className="bg-red-600 text-white hover:bg-red-700"
                          onClick={handleDeleteProject}
                        >
                          Delete
                        </AlertDialogAction>

                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}
            </div>
            

{/* author section after header */}
        <div className="flex items-center mb-6">
            <div className="w-16 h-16 
                            rounded-full 
                            bg-blue-100 
                            flex items-center 
                            justify-center 
                            text-lg 
                            font-bold 
                            text-blue-700">

                {project.createdBy.charAt(0)}
              </div>

          <div className="ml-4">
            <h3 className="text-lg font-medium">{project.createdBy}</h3>

              <p className="text-gray-500">
                {project.createdBy.toLowerCase()}@aretex.com
              </p>
          </div>
        </div>


{/* View Details/Task ID/ Task Name/ Task Description/ Created Date */}
      {!isEditMode ? (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Task ID</p>
              <p className="text-base font-medium text-gray-800">{project.id}</p>
            </div>

            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Task Name</p>
              <p className="text-base font-medium text-gray-800">{project.name}</p>
            </div>

            <div className="border rounded-lg p-3 bg-gray-50 md:col-span-2">
              <p className="text-sm text-gray-500">Task Description</p>
              <p className="text-base font-medium text-gray-800">{project.desc}</p>
            </div>

            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Created Date</p>
              <p className="text-base font-medium text-gray-800">{project.date}</p>
            </div>

        </div>

{/* project summary table */}
        <div className="mt-10">

          <div className="flex justify-between items-center mb-3">

            <h3 className="text-lg font-semibold text-gray-700">
              Project Summary
            </h3>

{/* import file modal in project summary table */}
        <Dialog open={isImportModalOpen} onOpenChange={setIsImportModalOpen}>

            <DialogTrigger asChild>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Import File
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Import New File</DialogTitle>
              </DialogHeader>

            <form onSubmit={handleFileImport} className="space-y-3">
              <Input
                  placeholder="Data Entity"
                  value={formDataImport.entity}
                  onChange={(e) =>
                  setFormDataImport({ ...formDataImport, entity: e.target.value })
                           }
                  required/>

              <Input
                  type="file"
                  onChange={(e) =>
                   setFormDataImport({ ...formDataImport, fileUploaded: e.target.files[0]?.name || "" })
                           }
                  required/>

              <Input
                  type="date"
                  value={formDataImport.createdDate}
                  onChange={(e) =>
                  setFormDataImport({ ...formDataImport, createdDate: e.target.value })
                           }
                  required/>

              <Input
                  placeholder="Format (CSV, JSON, etc.)"
                  value={formDataImport.format}
                  onChange={(e) =>
                  setFormDataImport({ ...formDataImport, format: e.target.value })
                           }
                  required/>

               <Textarea
                  placeholder="Description"
                  value={formDataImport.description}
                  onChange={(e) =>
                  setFormDataImport({ ...formDataImport, description: e.target.value })
                           }/>

               <DialogFooter>
                  <Button type="submit" 
                          className="bg-blue-600 text-white">
                              Upload File
                  </Button>
              </DialogFooter>

            </form>
          </DialogContent>
        </Dialog>
      </div>

{/* project summary table label */}
      <Table>
        <TableCaption>List of imported project files.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Data Entity</TableHead>
              <TableHead>File Uploaded</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Source Data Format</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

{/* table content in project summary */}
          <TableBody>
            {dummyFiles.map((file) => (
            <TableRow key={file.id}>
              <TableCell>{file.entity}</TableCell>

{/* File download link */}
              <TableCell>
                <a
                  href={`/${file.fileUploaded}`}
                    download
                  className="text-blue-600 
                            hover:underline 
                            cursor-pointer"
                >
                    {file.fileUploaded}
                </a>
              </TableCell>

              <TableCell>{file.createdDate}</TableCell>
              <TableCell>{file.format}</TableCell>

               <TableCell className="text-right space-x-2">

{/* view modal in the project summary table  */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{file.entity}</DialogTitle>
                <DialogDescription>File Details</DialogDescription>
              </DialogHeader>

              <div className="space-y-2">
                <p><strong>File Uploaded:</strong> {file.fileUploaded}</p>
                <p><strong>Created Date:</strong> {file.createdDate}</p>
                <p><strong>Format:</strong> {file.format}</p>
                <p><strong>Description:</strong> {file.description}</p>
              </div>
            </DialogContent>
         </Dialog>

{/* edit modal in the project summary table */}
        <Dialog
            open={editFile?.id === file.id}
            onOpenChange={(open) => !open && setEditFile(null)}
          >

          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setEditFile(file)}
            >

              <Pencil className="h-4 w-4" />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit File</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleFileEditSave} className="space-y-3">
              <Input
                value={editFile?.entity || ""}
                onChange={(e) =>
                setEditFile({ ...editFile, entity: e.target.value })
                          }
                placeholder="Entity"/>
                                  
              <Input
                type="file"
                onChange={(e) =>
                setEditFile({ ...editFile,
                  fileUploaded: e.target.files[0]?.name || editFile.fileUploaded,
                           })
                          }
              />

             <p className="text-xs text-gray-500">
                Current: {editFile?.fileUploaded}
             </p>
             
              <Input
                type="date"
                value={editFile?.createdDate || ""}
                onChange={(e) =>
                setEditFile({ ...editFile, createdDate: e.target.value })
                         }
              />

              <Input
                value={editFile?.format || ""}
                onChange={(e) =>
                setEditFile({ ...editFile, format: e.target.value })
                        }
                placeholder="Format"
              />
              
              <Textarea
                value={editFile?.description || ""}
                onChange={(e) =>
                setEditFile({ ...editFile, description: e.target.value })
                          }
                placeholder="Description"
              />

              <DialogFooter>
                <Button type="submit" className="bg-blue-600 text-white">
                  Save Changes
                </Button>
              </DialogFooter>

            </form>
          </DialogContent>
        </Dialog>

{/* delete alert in the project summary table */}
        <AlertDialog>

          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="icon">
             <Trash className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this file?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleFileDelete(file.id)}
                  className="bg-red-600 
                            text-white 
                            hover:bg-red-700"
                >
              Delete
                </AlertDialogAction>
              </AlertDialogFooter>
           </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
    ))}
    </TableBody>
  </Table>
  </div>
  </>
    ) : (

// EDIT PROJECT MODE
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Project Name
        </label>

      <Input
            value={formData.name}
            onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
                    }
            required
      />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Description
        </label>

        <Textarea
          value={formData.desc}
          onChange={(e) =>
          setFormData({ ...formData, desc: e.target.value })
                    }
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Created By
        </label>

        <Input
          value={formData.createdBy}
          onChange={(e) =>
          setFormData({ ...formData, createdBy: e.target.value })
                    }
          required
        />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Created Date
          </label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
                    }
              required
              />
        </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
            type="button"
            variant="outline"
            onClick={() => setIsEditMode(false)}
        >
            Cancel
        </Button>
          
        <Button
          type="submit"
          className="bg-black text-white hover:bg-gray-800"
        >
            Save Changes
          </Button>
        </div>
      </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
