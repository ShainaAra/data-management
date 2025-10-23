"use client";

import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const UserProfileEdit = ({ user, onSave, onCancel }) => {
  const [editableUser, setEditableUser] = useState(user);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveConfirmed = () => {
    setConfirmOpen(false);
    console.log("Updated user data:", editableUser);
    onSave(editableUser); // pass data back to parent
  };

  return (
    <div>
      {/* Editable Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={editableUser.name}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            value={editableUser.email}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            name="phone"
            value={editableUser.phone}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            value={editableUser.status}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 w-full"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Roles Section */}
      <div className="mt-6 border rounded-md p-4 bg-gray-50">
        <label className="font-semibold text-gray-700 mb-2 block">
          Select Roles
        </label>
        <div className="space-y-3">
          {["Admin", "Editor", "Viewer", "Moderator", "Manager", "Support"].map(
            (role) => {
              const isChecked = editableUser.roles?.includes(role);
              return (
                <div key={role} className="flex items-center space-x-3">
                  <Checkbox
                    id={role}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      setEditableUser((prev) => {
                        const roles = new Set(prev.roles || []);
                        if (checked) roles.add(role);
                        else roles.delete(role);
                        return { ...prev, roles: Array.from(roles) };
                      });
                    }}
                    className="rounded-full border-2 border-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <label
                    htmlFor={role}
                    className="text-sm font-medium leading-none text-gray-700"
                  >
                    {role}
                  </label>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Save / Cancel */}
      <div className="flex gap-3 mt-6">
        <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <AlertDialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
              Save
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to save changes?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently update the user’s information.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleSaveConfirmed}
                className="bg-green-600 hover:bg-green-700"
              >
                Yes, Save
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UserProfileEdit;
