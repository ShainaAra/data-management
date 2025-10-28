"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function TotalExport() {
  const totalExport = 1320; // Replace with actual data later

  return (
    <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-gray-800 text-lg font-semibold">
          Total Exports
        </CardTitle>
        <Upload className="text-blue-600" size={24} />
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-gray-900">{totalExport}</p>
        <p className="text-sm text-gray-500">this quarter</p>
      </CardContent>
    </Card>
  );
}
