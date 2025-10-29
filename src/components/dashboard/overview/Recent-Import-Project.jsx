"use client";

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
  const imports = [
    { id: 1, name: "Import Batch #A203", date: "Oct 22, 2025", status: "Completed" },
    { id: 2, name: "China Shipment 12", date: "Oct 18, 2025", status: "In Transit" },
    { id: 3, name: "Container #XZ145", date: "Oct 11, 2025", status: "Pending" },
    { id: 4, name: "Import File 2025Q3", date: "Sept 30, 2025", status: "Completed" },
  ];

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <ArrowDownToLine className="text-blue-600" size={20} />
          Recent Import Projects
        </h2>

        {/* Dropdown Menu */}
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

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Project Name</TableHead>
            <TableHead className="text-center w-1/4">Date</TableHead>
            <TableHead className="text-center w-1/4">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {imports.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-gray-50 cursor-pointer transition"
            >
              {/* Project Name */}
              <TableCell className="flex items-center gap-2">
                <FileText className="text-gray-500" size={18} />
                {item.name}
              </TableCell>

              {/* Date — Center Aligned, No Icon */}
              <TableCell className="text-gray-600 text-center">
                {item.date}
              </TableCell>

              {/* Status — Center Aligned */}
              <TableCell className="text-center">
                <span
                  className={`inline-block px-2 py-1 text-sm font-medium rounded-full ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "In Transit"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
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
