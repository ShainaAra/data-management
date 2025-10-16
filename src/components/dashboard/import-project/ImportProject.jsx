"use client";

import React from "react";
import ImportTable from "@/app/dashboard/import-project/[projectId]/ImportTable";
import ImportActions from "./ImportActions";

export default function ImportProject() {
  return (
    //spacing from header and between cards
    <div className="-mx-1 pt-2 pb-4">

      {/* action card */}
      <div className="bg-white border 
                      border-blue-500 
                      rounded-xl 
                      shadow-sm 
                      p-4 mb-2">
        <ImportActions />
      </div>

      {/* task table card */}
      <div className="bg-white 
                      border border-blue-500 
                      rounded-xl 
                      shadow-sm p-4">
        <ImportTable />
      </div>

    </div>
  );
}
