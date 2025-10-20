"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ImportModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-800">
            Add Task
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form className="flex flex-col gap-3 mt-2">
          {/* Task Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Task Name
            </label>
            <Input
              type="text"
              placeholder="Enter task name"
              className="mt-1"
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Task Description
            </label>
            <Textarea
              placeholder="Enter task description"
              rows="3"
              className="mt-1 resize-none"
            />
          </div>

          {/* Buttons */}
          <DialogFooter className="mt-4 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
