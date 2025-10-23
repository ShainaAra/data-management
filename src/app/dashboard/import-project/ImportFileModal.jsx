"use client";

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
import { useState } from "react";

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
          <Input
            placeholder="Data Entity"
            value={formData.entity}
            onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
            required
          />

          <Input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, fileUploaded: e.target.files[0]?.name || "",
              })
            }
            required
          />

          <Input
            type="date"
            value={formData.createdDate}
            onChange={(e) =>
              setFormData({ ...formData, createdDate: e.target.value })
            }
            required
          />

          <Input
            placeholder="Format (CSV, JSON, etc.)"
            value={formData.format}
            onChange={(e) => setFormData({ ...formData, format: e.target.value })}
            required
          />

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
