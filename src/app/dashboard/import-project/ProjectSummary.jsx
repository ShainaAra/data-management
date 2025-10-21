"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ImportFileModal from "./ImportFileModal";

export default function ProjectSummary({ files, setFiles }) {
  const [editFile, setEditFile] = useState(null);
  const [showConfirmSave, setShowConfirmSave] = useState(false);

  const handleFileDelete = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleEditSave = () => {
    setFiles((prev) => prev.map((f) => (f.id === editFile.id ? editFile : f)));
    setEditFile(null);
    setShowConfirmSave(false);
  };

  const handleAddFile = (file) => setFiles((prev) => [...prev, file]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-700">Project Summary</h3>
        <ImportFileModal onAddFile={handleAddFile} />
      </div>

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

        <TableBody>
          {files.map((file) => (
            <TableRow key={file.id}>
              <TableCell>{file.entity}</TableCell>
              <TableCell>
                <a
                  href={`/${file.fileUploaded}`}
                  download
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {file.fileUploaded}
                </a>
              </TableCell>
              <TableCell>{file.createdDate}</TableCell>
              <TableCell>{file.format}</TableCell>

              <TableCell className="text-right space-x-2">
                {/* View File */}
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

                {/* Edit File */}
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

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setShowConfirmSave(true); // open confirmation dialog
                      }}
                      className="space-y-3"
                    >
                      <Input
                        value={editFile?.entity || ""}
                        onChange={(e) =>
                          setEditFile({ ...editFile, entity: e.target.value })
                        }
                        placeholder="Entity"
                      />
                      <Input
                        type="file"
                        onChange={(e) =>
                          setEditFile({
                            ...editFile,
                            fileUploaded:
                              e.target.files[0]?.name || editFile.fileUploaded,
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
                          setEditFile({
                            ...editFile,
                            createdDate: e.target.value,
                          })
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
                          setEditFile({
                            ...editFile,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                      />
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="bg-blue-600 text-white"
                        >
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </form>

                    {/* ✅ Confirmation AlertDialog */}
                    <AlertDialog open={showConfirmSave} onOpenChange={setShowConfirmSave}>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Save changes?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to save your edits to this file? 
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={handleEditSave}
                            className="bg-blue-600 text-white hover:bg-blue-700"
                          >
                            Yes, Save Changes
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DialogContent>
                </Dialog>

                {/* Delete File */}
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
                        className="bg-red-600 text-white hover:bg-red-700"
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
  );
}
