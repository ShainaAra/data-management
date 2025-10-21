"use client";

import React from "react";
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

export default function UserProfileHeader({
  editableUser,
  isEditing,
  setIsEditing,
  confirmOpen,
  setConfirmOpen,
  handleSaveConfirmed,
  handleCancel,
}) {
  return (
    <div className="flex justify-between items-center mb-6 border-b pb-3">
      <h2 className="text-2xl font-bold">
        User Profile: {editableUser.name}
      </h2>

      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
        >
          Edit
        </button>
      ) : (
        <div className="space-x-2">
          <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <AlertDialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-700 text-white font-medium">
                Save
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to save this?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently update the user’s information.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleSaveConfirmed}
                  className="bg-orange-500 hover:bg-orange-700"
                >
                  Yes, Save
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-md transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
