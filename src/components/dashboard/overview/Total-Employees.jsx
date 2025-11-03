"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function TotalEmployees() {
  const totalEmployees = 125;

  return (
    <Card className="bg-white border border-gray-200 shadow-sm rounded-xl">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-gray-700">
          Total Employees
        </CardTitle>
        <Users className="w-5 h-5 text-blue-600" />
      </CardHeader>

      <CardContent className="space-y-1">
        <div className="text-6xl font-bold text-gray-900 leading-none">
          {totalEmployees}
        </div>
        <p className="text-sm text-gray-500">as of this month</p>
      </CardContent>
    </Card>
  );
}
