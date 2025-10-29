"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import UserTableAction from "@/components/dashboard/users/UserTableAction";
import UserTable from "@/components/dashboard/users/UserTable";
import UserProfile from "@/app/dashboard/users/[userId]/UserProfile"; 

const UsersPage = () => {
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
            <UserTableAction />
          </div>

          {/* User table section */}
          <UserTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersPage;
