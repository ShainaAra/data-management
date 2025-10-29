"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const ENTITY_OPTIONS = ["Customer", "Product", "Order", "Inventory"];

export default function ImportFileModal({ onAddFile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    entity: "",
    fileUploaded: "",
    createdDate: "",
    format: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFile({ id: Date.now(), ...formData });
    setFormData({
      entity: "",
      fileUploaded: "",
      createdDate: "",
      format: "",
      description: "",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Import File
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import New File</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Combobox for Data Entity */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full justify-between"
              >
                {formData.entity || "Select Data Entity"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Search entity..." />
                <CommandGroup>
                  {ENTITY_OPTIONS.map((entity) => (
                    <CommandItem
                      key={entity}
                      onSelect={() =>
                        setFormData({ ...formData, entity })
                      }
                    >
                      {entity}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          {/* File Upload */}
          <Input
            type="file"
            onChange={(e) =>
              setFormData({
                ...formData,
                fileUploaded: e.target.files[0]?.name || "",
              })
            }
            required
          />

          {/* Created Date */}
          <Input
            type="date"
            value={formData.createdDate}
            onChange={(e) =>
              setFormData({ ...formData, createdDate: e.target.value })
            }
            required
          />

          {/* Select Format (label beside select box) */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-black-600 text-sm font-semibold">
              Select Format
            </label>
            <Select
              value={formData.format}
              onValueChange={(value) =>
                setFormData({ ...formData, format: value })
              }
            >
              <SelectTrigger className="w-full border-gray-300 rounded-md text-sm">
                <SelectValue placeholder="Format Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CSV">CSV</SelectItem>
                <SelectItem value="XLSX">XLSX</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <Textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <DialogFooter>
            <Button type="submit" className="bg-blue-600 text-white">
              Upload File
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
