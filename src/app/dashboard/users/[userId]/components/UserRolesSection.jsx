"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function UserRolesSection({
  editableUser,
  setEditableUser,
  isEditing,
  showRoles,
  setShowRoles,
}) {
  const allRoles = ["Admin", "Editor", "Viewer", "Moderator", "Manager", "Support"];

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowRoles(!showRoles)}
        className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 transition"
      >
        <span className="font-semibold text-gray-700">View Roles</span>
        <span className="text-sm text-gray-500">{showRoles ? "▲ Hide" : "▼ Show"}</span>
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
                {allRoles.map((role) => {
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
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
