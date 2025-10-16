"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import ImportModal from "./ImportModal";

export default function ImportActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* action box */}
      <div className="flex items-center justify-between gap-4">

      {/* search card */}
        <div className="flex items-center gap-3 
                        border border-gray-300 
                        rounded-md 
                        px-3 py-2 w-[420px]">

          <Search size={18} className="text-gray-600" />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full text-sm"
          />
        </div>

        {/* buttons */}
        <div className="flex items-center gap-3">

          <label className="flex items-center 
                            gap-2 border border-gray-300 
                            rounded-md 
                            px-3 py-1 text-sm 
                            hover:bg-gray-100 
                            cursor-pointer">

            <input type="checkbox" className="accent-blue-600" />
            Completed Tasks
          </label>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 
                       text-white 
                       rounded-md 
                       px-3 py-1 
                       text-sm 
                       hover:bg-blue-700">
            + Import Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      <ImportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
