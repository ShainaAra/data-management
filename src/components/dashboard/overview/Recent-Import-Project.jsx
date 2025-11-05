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

// --- START: ROUTING FIX ---
// This mock simulates the Next.js router.
// We are using window.location.href to force a visible navigation event
// in environments that don't natively support Next.js routing.
function useRouter() {
  return {
    push: (path) => {
      console.log(`[ROUTER MOCK] Attempting navigation to: ${path}`);
      // Use location.href to simulate navigation in the browser environment
      // This will visually change the URL for the component preview.
      window.location.href = path; 
    },
  };
}
// --- END: ROUTING FIX ---

export default function RecentImportProjects() {
  // Use the mock router here, which is structurally identical to the real useRouter()
  const router = useRouter(); 
  
  // Updated dummy projects data
  const projects = [
    { id: 1, name: "PandaBot", date: "2025-10-16", status: "Completed" },
    { id: 2, name: "Na-ar-tap", date: "2025-10-10", status: "In Transit" },
    { id: 3, name: "Obscura", date: "2025-09-25", status: "Pending" },
  ];

  // Function to handle row click and implement navigation.
  const handleRowClick = (projectId) => {
    // Navigates to the /dashboard/import-project/[projectId] route.
    const path = `/dashboard/import-project/${projectId}`;
    router.push(path);
  };

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
          {projects.map((item) => (
            // Removed the onClick from the TableRow to prevent duplicate navigation,
            // as the click is now on the project name span.
            <TableRow
              key={item.id}
              className="hover:bg-gray-50 transition"
            >
              {/* Project Name - Styled to look like a link and made the primary target */}
              <TableCell className="flex items-center gap-2">
                <FileText className="text-gray-500" size={18} />
                <span 
                  className="text-blue-600 hover:text-blue-800 underline cursor-pointer font-medium"
                  onClick={() => handleRowClick(item.id)}
                >
                  {item.name}
                </span>
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