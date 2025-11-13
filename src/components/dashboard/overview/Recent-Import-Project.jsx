"use client";

import Link from "next/link"; // ✅ Use Next.js Link for navigation
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FileText, ArrowDownToLine, ChevronDown } from "lucide-react";

export default function RecentImportProjects() {
  // Dummy project data
  const projects = [
    { id: 1, name: "PandaBot", date: "2025-10-16", status: "Completed" },
    { id: 2, name: "Na-ar-tap", date: "2025-10-10", status: "In Progress" },
    { id: 3, name: "Obscura", date: "2025-09-25", status: "Pending" },
  ];

  // Status color classes
  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <ArrowDownToLine className="text-blue-600" size={20} />
          Recent Import Projects
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="text-gray-700 border-gray-300 flex items-center gap-1"
            >
              Sort by <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Name</DropdownMenuItem>
            <DropdownMenuItem>Date</DropdownMenuItem>
            <DropdownMenuItem>Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Project Name</TableHead>
            <TableHead className="text-center w-1/4">Date</TableHead>
            <TableHead className="text-center w-1/4">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-gray-50 transition"
            >
              {/* Project Name */}
              <TableCell className="flex items-center gap-2">
                <FileText className="text-gray-500" size={18} />
                <Link
                  href={`/dashboard/import-project/${item.id}`}
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  {item.name}
                </Link>
              </TableCell>

              {/* Date */}
              <TableCell className="text-gray-600 text-center">
                {item.date}
              </TableCell>

              {/* Status */}
              <TableCell className="text-center">
                <span
                  className={`inline-block px-2 py-1 text-sm font-medium rounded-full ${getStatusBadgeClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
