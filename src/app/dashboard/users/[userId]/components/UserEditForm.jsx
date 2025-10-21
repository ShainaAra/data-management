"use client";

import React from "react";

export default function UserEditForm({ editableUser, handleChange }) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <input
        name="name"
        value={editableUser.name}
        onChange={handleChange}
        className="border rounded-md px-2 py-1 w-full"
        placeholder="Full name"
      />
      <input
        name="email"
        value={editableUser.email}
        onChange={handleChange}
        className="border rounded-md px-2 py-1 w-full"
        placeholder="Email"
      />
    </div>
  );
}
