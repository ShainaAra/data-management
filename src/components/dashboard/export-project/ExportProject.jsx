"use client";

import React, { useState } from "react";
import ExportTable from "./ExportTable";
import ExportActions from "./ExportActions";

export default function ExportProject() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleExport = () => {
    alert("Exporting projects..."); // placeholder for future modal logic
  };

  return (
    <div className="-mx-1 pt-2 pb-4">
      {/* Top Action Card (same size and layout as import) */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4 mb-2">
        <ExportActions onExportClick={handleExport} />
      </div>

      {/* Export Table (matches import layout) */}
      <div className="bg-white border border-blue-500 rounded-xl shadow-sm p-4">
        <ExportTable />
      </div>
    </div>
  );
}
