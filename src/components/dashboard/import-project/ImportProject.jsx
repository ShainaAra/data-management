"use client";

import React from "react";
import ImportActions from "./ImportActions";
import ImportTable from "./ImportTable";

export default function ImportProject() {
  return (
    //spacing from header and between cards
    <div className="-mx-1 pt-2 pb-4">

      {/* action Card */}
      <div className="bg-white border 
                      border-blue-500 
                      rounded-xl 
                      shadow-sm 
                      p-4 mb-2">
        <ImportActions />
      </div>

      {/* task table Card */}
      <div className="bg-white 
                      border border-blue-500 
                      rounded-xl 
                      shadow-sm p-4">
        <ImportTable />
      </div>

    </div>
  );
}
