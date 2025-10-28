"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function TotalImport() {
  const totalImport = 1450; // You can replace this with dynamic data later

  return (
    <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-gray-800 text-lg font-semibold">
          Total Imports
        </CardTitle>
        <Download className="text-blue-600" size={24} />
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-gray-900">{totalImport}</p>
        <p className="text-sm text-gray-500">this quarter</p>
      </CardContent>
    </Card>
  );
}
