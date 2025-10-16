'use client';
import React, { useState } from "react";

const UserProfile = ({ user }) => {
  if (!user) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [showRoles, setShowRoles] = useState(false); // 🔹 toggle roles dropdown

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  // Save edited data
  const handleSave = () => {
    setIsEditing(false);
    alert(`✅ User "${editableUser.name}" has been updated!`);
    console.log("Updated user data:", editableUser);
  };

  // Cancel editing
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
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-md transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-xl font-semibold">
          {editableUser.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

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

      {/* User Information */}
      <table className="w-full border border-gray-200 rounded-lg mb-6">
        <tbody>
          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-semibold w-1/4 border-b border-gray-200">User ID</td>
            <td className="py-3 px-4 border-b border-gray-200">{editableUser.userId}</td>
          </tr>

          <tr>
            <td className="py-3 px-4 font-semibold border-b border-gray-200">Phone</td>
            <td className="py-3 px-4 border-b border-gray-200">
              {!isEditing ? (
                <a href={`tel:${editableUser.phone}`} className="text-blue-600 hover:underline">
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
            <td className="py-3 px-4 font-semibold border-b border-gray-200">Created</td>
            <td className="py-3 px-4 border-b border-gray-200">{editableUser.created}</td>
          </tr>

          <tr>
            <td className="py-3 px-4 font-semibold border-b border-gray-200">Last Login</td>
            <td className="py-3 px-4 border-b border-gray-200">{editableUser.lastActive}</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-semibold border-b border-gray-200">Status</td>
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

      {/* 🔽 Roles Section with Dropdown */}
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
            <p><strong>Role:</strong> Admin</p>
            <p><strong>Permissions:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
              <li>Manage Users</li>
              <li>Access Dashboard</li>
              <li>Export Reports</li>
            </ul>
          </div>
        )}
      </div>

      {/* ✅ Added: Editable Role Section (only visible in edit mode) */}
      {isEditing && (
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-gray-700 mb-2">Edit User Role</h3>
          <select
            name="role"
            value={editableUser.role || "Admin"}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
            <option value="Moderator">Moderator</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
