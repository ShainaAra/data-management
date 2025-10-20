'use client';

import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

const UserProfile = ({ user }) => {
  if (!user) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [showRoles, setShowRoles] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  // handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  // handle final save after confirmation
  const handleSaveConfirmed = () => {
    setIsEditing(false);
    setConfirmOpen(false);
    setSuccessOpen(true); 
    console.log("Updated user data:", editableUser);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditableUser(user);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-2xl font-bold">
          User Profile: {editableUser.name}
        </h2>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
          >
            Edit
          </button>
        ) : (
          <div className="space-x-2">
            {/*Save Confirmation*/}
            <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
              <AlertDialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                  Save
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to save this?
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

            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-md transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/*Success Dialog*/}
      <AlertDialog open={successOpen} onOpenChange={setSuccessOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              User "{editableUser.name}" has been updated!
            </AlertDialogTitle>
            <AlertDialogDescription>
              The user profile changes were successfully saved.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setSuccessOpen(false)}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/*Profile Header with Avatar*/}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src={editableUser.avatarUrl} alt={editableUser.name} />
          <AvatarFallback>
            {editableUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div>
          {!isEditing ? (
            <>
              <p className="text-lg font-semibold">{editableUser.name}</p>
              <a
                href={`mailto:${editableUser.email}`}
                className="text-blue-600 hover:underline text-sm"
              >
                {editableUser.email}
              </a>
            </>
          ) : (
            <>
              <input
                name="name"
                value={editableUser.name}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full mb-2"
              />
              <input
                name="email"
                value={editableUser.email}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full"
              />
            </>
          )}
        </div>
      </div>

      {/* User Info Table */}
      <table className="w-full border border-gray-200 rounded-lg mb-6">
        <tbody>
          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-semibold w-1/4 border-b border-gray-200">
              User ID
            </td>
            <td className="py-3 px-4 border-b border-gray-200">
              {editableUser.userId}
            </td>
          </tr>

          <tr>
            <td className="py-3 px-4 font-semibold border-b border-gray-200">
              Phone
            </td>
            <td className="py-3 px-4 border-b border-gray-200">
              {!isEditing ? (
                <a
                  href={`tel:${editableUser.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {editableUser.phone}
                </a>
              ) : (
                <input
                  name="phone"
                  value={editableUser.phone}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 w-full"
                />
              )}
            </td>
          </tr>

          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-semibold border-b border-gray-200">
              Created
            </td>
            <td className="py-3 px-4 border-b border-gray-200">
              {editableUser.created}
            </td>
          </tr>

          <tr>
            <td className="py-3 px-4 font-semibold border-b border-gray-200">
              Last Login
            </td>
            <td className="py-3 px-4 border-b border-gray-200">
              {editableUser.lastActive}
            </td>
          </tr>

          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-semibold border-b border-gray-200">
              Status
            </td>
            <td className="py-3 px-4 border-b border-gray-200">
              {!isEditing ? (
                editableUser.status
              ) : (
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
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/*Roles Section */}
      <div className="mb-6">
        <button
          onClick={() => setShowRoles(!showRoles)}
          className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 transition"
        >
          <span className="font-semibold text-gray-700">View Roles</span>
          <span className="text-sm text-gray-500">
            {showRoles ? "▲ Hide" : "▼ Show"}
          </span>
        </button>

        {showRoles && (
          <div className="mt-3 border rounded-md p-4 bg-gray-50">
            {!isEditing ? (
              <p>
                <strong>Roles:</strong>{" "}
                {editableUser.roles && editableUser.roles.length > 0
                  ? editableUser.roles.join(", ")
                  : "No roles assigned"}
              </p>
            ) : (
              <div>
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
