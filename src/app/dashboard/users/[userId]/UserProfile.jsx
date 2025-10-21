'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import UserProfileHeader from "./components/UserProfileHeader";
import UserInfoTable from "./components/UserInfoTable";
import UserRolesSection from "./components/UserRolesSection";
import UserEditForm from "./components/UserEditForm";
import { stringToColor, getContrastColor } from "@/lib/utils";

const UserProfile = ({ user }) => {
  const router = useRouter();
  if (!user) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [showRoles, setShowRoles] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveConfirmed = () => {
    setIsEditing(false);
    setConfirmOpen(false);
    setSuccessOpen(true);
    console.log("✅ Updated user data:", editableUser);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditableUser(user);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-800">

      {/* Back link */}
      <button
        onClick={() => router.push("/dashboard/users")}
        className="flex items-center text-blue-600 hover:text-blue-800 hover:underline mb-4 transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Users
      </button>

      {/* Header */}
      <UserProfileHeader
        editableUser={editableUser}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        confirmOpen={confirmOpen}
        setConfirmOpen={setConfirmOpen}
        handleSaveConfirmed={handleSaveConfirmed}
        handleCancel={handleCancel}
      />

      {/* Avatar and basic info */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src={editableUser.avatarUrl} alt={editableUser.name} />
          <AvatarFallback className="bg-orange-400 text-Blue">
            {editableUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        {!isEditing ? (
          <div>
            <p className="text-lg font-semibold">{editableUser.name}</p>
            <a
              href={`mailto:${editableUser.email}`}
              className="text-blue-600 hover:underline text-sm"
            >
              {editableUser.email}
            </a>
          </div>
        ) : (
          <UserEditForm editableUser={editableUser} handleChange={handleChange} />
        )}
      </div>

      {/* Info Table */}
      <UserInfoTable
        editableUser={editableUser}
        isEditing={isEditing}
        handleChange={handleChange}
      />

      {/* Roles Section */}
      <UserRolesSection
        editableUser={editableUser}
        setEditableUser={setEditableUser}
        isEditing={isEditing}
        showRoles={showRoles}
        setShowRoles={setShowRoles}
      />
    </div>
  );
};

export default UserProfile;
