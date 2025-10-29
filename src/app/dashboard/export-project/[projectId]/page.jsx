"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ExportViewDetails from "@/app/dashboard/export-project/[projectId]/ExportViewDetails";

export default function ExportProjectDetailsPage({ params }) {
  const resolvedParams = use(params);
  const router = useRouter();

  // Dummy project data
  const project = {
    id: resolvedParams.projectId,
    name: "Data Migration Project",
    desc: "Exports structured data into external systems securely and efficiently.",
    createdBy: "Jamie Jodelle",
    date: "October 27, 2025",
  };

  // Dummy project summary (files table)
  const summaryData = [
    {
      id: 1,
      fileName: "customer_data_export.csv",
      fileType: "CSV",
      dateExported: "2025-10-25",
      exportedBy: "Jamie",
      status: "Completed",
    },
    {
      id: 2,
      fileName: "system_logs_backup.zip",
      fileType: "ZIP",
      dateExported: "2025-10-23",
      exportedBy: "Nash",
      status: "Completed",
    },
    {
      id: 3,
      fileName: "ai_report_export.pdf",
      fileType: "PDF",
      dateExported: "2025-10-21",
      exportedBy: "Ara",
      status: "In Progress",
    },
  ];

  return (
    <div className="p-2 md:p-4 lg:p-6">
      <div className="bg-white border border-blue-500 rounded-2xl shadow-md p-8 md:p-10 max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Export Projects
        </button>

        {/* Project Details */}
        <ExportViewDetails project={project} />

        {/* Project Summary Table */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Project Summary
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">File Name</th>
                  <th className="px-4 py-3 text-left font-medium">File Type</th>
                  <th className="px-4 py-3 text-left font-medium">Date Exported</th>
                  <th className="px-4 py-3 text-left font-medium">Exported By</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="text-gray-600">
                {summaryData.map((file) => (
                  <tr
                    key={file.id}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium">{file.fileName}</td>
                    <td className="px-4 py-3">{file.fileType}</td>
                    <td className="px-4 py-3">{file.dateExported}</td>
                    <td className="px-4 py-3">{file.exportedBy}</td>
                    <td
                      className={`px-4 py-3 font-medium ${
                        file.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {file.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
