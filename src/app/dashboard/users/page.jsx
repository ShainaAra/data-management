"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import UserTableAction from "@/components/dashboard/users/UserTableAction";
import UserTable from "@/components/dashboard/users/UserTable";

const UsersPage = () => {
  // Shared user state
  const [users, setUsers] = useState([
    {
      userId: "AJ001",
      name: "Alex January",
      email: "alexj.artx@aretex.com",
      phone: "+6912345678999",
      created: "2023-01-15",
      lastActive: "3 weeks ago",
      status: "Active",
    },
    {
      userId: "AN002",
      name: "Adrian Nash",
      email: "adrian.nash@aretex.com",
      phone: "+6912345678123",
      created: "2024-02-22",
      lastActive: "2 hours ago",
      status: "Inactive",
    },
  ]);

  // Add new user
  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  // Delete user
  const handleDeleteUser = (userId) => {
    setUsers((prev) => prev.filter((u) => u.userId !== userId));
  };

  return (
    <div className="px-0.1 py-2">
      {/* Main container card */}
      <Card className="bg-white shadow-md rounded-lg border border-gray-200">
        <CardHeader className="pb-2 border-b">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            Users Management
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-2">
          {/* Top bar section */}
          <div className="mb-3">
            <UserTableAction onAddUser={handleAddUser} />
          </div>

          {/* User table section */}
          <UserTable users={users} onDeleteUser={handleDeleteUser} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersPage;
