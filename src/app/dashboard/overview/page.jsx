"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TotalEmployees from "@/components/dashboard/overview/Total-Employees";
import TotalProjects from "@/components/dashboard/overview/Total-Projects";
import dynamic from "next/dynamic";
import RecentImportProjects from "@/components/dashboard/overview/Recent-Import-Project";
import RecentExportProjects from "@/components/dashboard/overview/Recent-Export-Project";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const TotalDistributionProjects = dynamic(
  () => import("@/components/dashboard/overview/Total-Distribution-Projects"),
  { ssr: false }
);
const ImportExportChart = dynamic(
  () => import("@/components/dashboard/overview/Import-Export-Chart"),
  { ssr: false }
);

export default function OverviewPage() {
  return (
    <div className="px-0.1 py-2">
      {/* Main container card */}
      <Card className="bg-white shadow-md rounded-lg border border-gray-200">
        {/* Header */}
        <CardHeader className="pb-2 border-b">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            Overview
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="pt-4 space-y-6 w-full">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            <TotalEmployees />
            <TotalProjects />
            <TotalDistributionProjects />
          </div>

          {/* Accordions */}
          <Accordion type="multiple" className="w-full space-y-2">
            {/* IMPORT */}
            <AccordionItem value="import" className="border-none w-full">
              <AccordionTrigger
                className="
                  flex items-center justify-start gap-3
                  w-fit px-4 py-2
                  bg-gray-100 text-gray-700 font-medium
                  rounded-lg shadow-sm
                  hover:bg-gray-200 transition-all duration-200
                  data-[state=open]:bg-gray-300
                  [&>svg:last-child]:hidden
                "
              >
                <ChevronRight
                  className="
                    h-4 w-4 text-gray-600
                    transition-transform duration-200
                    data-[state=open]:rotate-90
                  "
                />
                <span>Recent Import Projects</span>
              </AccordionTrigger>

              <AccordionContent
                className="
                  w-full mt-2
                  bg-gray-50 rounded-md border border-gray-200
                  p-4
                  transition-all duration-300
                "
              >
                <RecentImportProjects />
              </AccordionContent>
            </AccordionItem>

            {/* EXPORT */}
            <AccordionItem value="export" className="border-none w-full">
              <AccordionTrigger
                className="
                  flex items-center justify-start gap-3
                  w-fit px-4 py-2
                  bg-gray-100 text-gray-700 font-medium
                  rounded-lg shadow-sm
                  hover:bg-gray-200 transition-all duration-200
                  data-[state=open]:bg-gray-300
                  [&>svg:last-child]:hidden
                "
              >
                <ChevronRight
                  className="
                    h-4 w-4 text-gray-600
                    transition-transform duration-200
                    data-[state=open]:rotate-90
                  "
                />
                <span>Recent Export Projects</span>
              </AccordionTrigger>

              <AccordionContent
                className="
                  w-full mt-2
                  bg-gray-50 rounded-md border border-gray-200
                  p-4
                  transition-all duration-300
                "
              >
                <RecentExportProjects />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Chart Section */}
          <div className="w-full">
            <ImportExportChart />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
