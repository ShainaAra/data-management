'use client';

import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import UserProfile from "./UserProfile";

const UserProfilePage = () => {
  const { userId } = useParams();
	const searchParams = useSearchParams();
	const isEditMode = searchParams.get("edit") === "true";

  const dummyUsers = [
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
  ];

  //Find user by ID from URL
  const user = dummyUsers.find((u) => u.userId === userId);

  if (!user) {
    return (
      <div className="p-6 text-gray-700">
        <h2 className="text-xl font-semibold">User Not Found</h2>
        <p>No user exists with ID: {userId}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;
