"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FolderKanban } from "lucide-react"; // ✅ Importing an icon

export default function TotalProjects() {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm rounded-xl">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold text-gray-700">
          Total Projects
        </CardTitle>
        {/*Added icon here */}
        <FolderKanban className="w-5 h-5 text-blue-600" />
      </CardHeader>

      <CardContent>
        <div className="text-4xl font-bold text-gray-900">270</div>
        <p className="text-sm text-gray-500">combined import & export</p>
      </CardContent>
    </Card>
  );
}
