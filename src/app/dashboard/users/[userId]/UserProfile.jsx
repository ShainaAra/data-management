"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import UserProfileEdit from "@/components/dashboard/users/[userId]/UserProfileEdit.jsx";

const UserProfile = ({ user }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  if (!user) return null;

  const handleSave = (updatedUser) => {
    setEditableUser(updatedUser);
    setIsEditing(false);
    console.log("Saved user data:", updatedUser);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-800">
      {/*Back to Users*/}
      <button
        onClick={() => router.push("/dashboard/users")}
        className="flex items-center text-blue-600 hover:text-blue-800 hover:underline mb-4 transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Users
      </button>

      {/*Header*/}
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-2xl font-bold">
          User Profile: {editableUser.name}
        </h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
          >
            Edit
          </button>
        )}
      </div>

      {/*View or Edit*/}
      {!isEditing ? (
        <>
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
              <p className="text-lg font-semibold">{editableUser.name}</p>
              <a
                href={`mailto:${editableUser.email}`}
                className="text-blue-600 hover:underline text-sm"
              >
                {editableUser.email}
              </a>
            </div>
          </div>

          <table className="w-full border border-gray-200 rounded-lg mb-6">
            <tbody>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-semibold w-1/4">User ID</td>
                <td className="py-3 px-4">{editableUser.userId}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Phone</td>
                <td className="py-3 px-4">
                  <a
                    href={`tel:${editableUser.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {editableUser.phone}
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-semibold">Created</td>
                <td className="py-3 px-4">{editableUser.created}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Last Login</td>
                <td className="py-3 px-4">{editableUser.lastActive}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-semibold">Status</td>
                <td className="py-3 px-4">{editableUser.status}</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-50 rounded-md p-4">
            <strong>Roles:</strong>{" "}
            {editableUser.roles && editableUser.roles.length > 0
              ? editableUser.roles.join(", ")
              : "No roles assigned"}
          </div>
        </>
      ) : (
        <UserProfileEdit
          user={editableUser}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
