'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
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

const UserTable = () => {
  const router = useRouter();
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
 
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewProfile = (user) => {
    router.push(`/dashboard/users/${user.userId}`);
  };

  //delete a user from the table
  const handleDeleteUser = (user) => {
    
    setUsers((prev) => prev.filter((u) => u.userId !== user.userId));
    setSelectedUser(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mt-2">
      {/* Header Section*/}
      <div className="px-6 py-4 border-b">
        <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
      </div>

      {/* Table Section */}
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-3 px-6 font-semibold border-b">Name</th>
            <th className="py-3 px-6 font-semibold border-b">Email</th>
            <th className="py-3 px-6 font-semibold border-b">Status</th>
            <th className="py-3 px-6 font-semibold border-b">Last Active</th>
            <th className="py-3 px-6 font-semibold border-b text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.userId}
              className="hover:bg-gray-50 transition"
            >
              <td className="py-4 px-6">{user.name}</td>
              <td className="py-4 px-6">{user.email}</td>
              <td className="py-4 px-6">{user.status}</td>
              <td className="py-4 px-6">{user.lastActive}</td>

              {/* Actions */}
              <td className="py-4 px-6 text-right">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition">
                      <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      align="end"
                      sideOffset={5}
                      className="min-w-[130px] bg-white text-gray-800 rounded-md shadow-lg py-2 border border-gray-200"
                    >
                      <DropdownMenu.Item
                        className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-sm"
                        onSelect={() => handleViewProfile(user)}
                      >
                        View
                      </DropdownMenu.Item>

                      {/*AlertDialog for Delete */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenu.Item
                            className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer rounded-sm"
                            onSelect={(e) => {
                              e.preventDefault();
                              setSelectedUser(user);
                            }}
                          >
                            Delete
                          </DropdownMenu.Item>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete User</AlertDialogTitle>

                            <AlertDialogDescription>
                              Are you sure you want to delete{" "}
                              <span className="font-semibold">{selectedUser?.name}</span>? 
                              This action cannot be undone.
                            </AlertDialogDescription>

                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteUser(selectedUser)}
                              className="bg-red-600 text-white hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </td>
            </tr>
          ))}

          {/* Empty state */}
          {users.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
