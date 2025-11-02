"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
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

export default function ExportFileModal({ onAddFile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    entity: "",
    fileUploaded: "",
    format: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFile({ id: Date.now(), ...formData });
    setFormData({ entity: "", fileUploaded: "", format: "" });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Export File
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Export File</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-3">
          {/* Data Entity */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-gray-800">Data Entity</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-10 border border-gray-300 rounded-md text-sm flex items-center justify-between px-3 font-normal bg-white"
                >
                  {formData.entity || "Select Data Entity"}
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
                        onSelect={() => setFormData({ ...formData, entity })}
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
            <label className="text-sm font-bold text-gray-800">File Type</label>
            <Select
              value={formData.format}
              onValueChange={(value) =>
                setFormData({ ...formData, format: value })
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
            <label className="text-sm font-bold text-gray-800">File Upload</label>
            <Input
              type="file"
              className="w-full h-10 text-sm font-normal border-gray-300 rounded-md"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fileUploaded: e.target.files[0]?.name || "",
                })
              }
              required
            />
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
      </DialogContent>
    </Dialog>
  );
}
