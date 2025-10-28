"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TotalEmployees from "@/components/dashboard/overview/Total-Employees";
import TotalImport from "@/components/dashboard/overview/Total-Import-Project";
import TotalExport from "@/components/dashboard/overview/Total-Export-Project";
import TotalProjects from "@/components/dashboard/overview/Total-Projects";
import ImportExportChart from "@/components/dashboard/overview/Import-Export-Chart";

export default function OverviewPage() {
  return (
    <div className="px-0.1 py-2">
      {/* Main container card */}
      <Card className="bg-white shadow-md rounded-lg border border-gray-200">
        <CardHeader className="pb-2 border-b">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Overview Page
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <TotalEmployees />
            <TotalImport />
            <TotalExport />
            <TotalProjects />
          </div>

          {/* Chart Section */}
          <ImportExportChart />
        </CardContent>
      </Card>
    </div>
  );
}
