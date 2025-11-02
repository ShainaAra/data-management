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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExportFileModal from "./ExportFileModal";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const ENTITY_OPTIONS = ["Customer", "Product", "Order", "Inventory"];

export default function ExportProjectSummary({ files, setFiles }) {
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
        <ExportFileModal onAddFile={handleAddFile} />
      </div>

      <Table>
        <TableCaption>List of exported project files.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Data Entity</TableHead>
            <TableHead>File Uploaded</TableHead>
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
                      <p>
                        <strong>File Uploaded:</strong> {file.fileUploaded}
                      </p>
                      <p>
                        <strong>Format:</strong> {file.format}
                      </p>
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

                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Edit File</DialogTitle>
                    </DialogHeader>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setShowConfirmSave(true);
                      }}
                      className="space-y-5 mt-3"
                    >
                      {/* Data Entity */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-800">
                          Data Entity
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className="w-full h-10 border border-gray-300 rounded-md text-sm flex items-center justify-between px-3 font-normal bg-white"
                            >
                              {editFile?.entity || "Select Data Entity"}
                              <ChevronDown className="h-4 w-4 opacity-60" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-full">
                            <Command>
                              <CommandInput placeholder="Search entity..." />
                              <CommandGroup>
                                {ENTITY_OPTIONS.map((entity) => (
                                  <CommandItem
                                    key={entity}
                                    onSelect={() =>
                                      setEditFile({ ...editFile, entity })
                                    }
                                  >
                                    {entity}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* File Type */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-800">
                          File Type
                        </label>
                        <Select
                          value={editFile?.format}
                          onValueChange={(value) =>
                            setEditFile({ ...editFile, format: value })
                          }
                        >
                          <SelectTrigger className="w-full h-10 text-sm border-gray-300 rounded-md font-normal">
                            <SelectValue placeholder="Select File Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CSV">CSV</SelectItem>
                            <SelectItem value="XLSX">XLSX</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* File Upload */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-800">
                          File Upload
                        </label>
                        <Input
                          type="file"
                          className="w-full h-10 text-sm font-normal border-gray-300 rounded-md"
                          onChange={(e) =>
                            setEditFile({
                              ...editFile,
                              fileUploaded:
                                e.target.files[0]?.name ||
                                editFile.fileUploaded,
                            })
                          }
                          required
                        />
                        <p className="text-xs text-gray-500">
                          Current: {editFile?.fileUploaded}
                        </p>
                      </div>

                      <DialogFooter>
                        <Button
                          type="submit"
                          className="bg-blue-600 text-white hover:bg-blue-700 mt-3"
                        >
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </form>

                    {/* Confirm Save */}
                    <AlertDialog
                      open={showConfirmSave}
                      onOpenChange={setShowConfirmSave}
                    >
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Save changes?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to save your edits to this
                            file?
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
