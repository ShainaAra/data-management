"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";


export default function TotalEmployees() {
  const totalEmployees = 125; // You can replace this with dynamic data later

  return (
    <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-gray-800 text-lg font-semibold">
          Total Employees
        </CardTitle>
        <Users className="text-blue-600" size={24} />
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-gray-900">{totalEmployees}</p>
        <p className="text-sm text-gray-500">as of this month</p>
      </CardContent>
    </Card>
  );
}
