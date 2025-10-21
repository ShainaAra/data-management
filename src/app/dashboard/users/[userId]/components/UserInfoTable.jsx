"use client";

import React from "react";

export default function UserInfoTable({ editableUser, isEditing, handleChange }) {
  return (
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
  );
}
