"use client";

import React from "react";

export default function ImportTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="p-3 text-left text-sm font-semibold">
              <input type="checkbox" className="mr-2" /> Task Name
            </th>

            <th className="p-3 text-left text-sm font-semibold">Description</th>
            <th className="p-3 text-left text-sm font-semibold">Start Date</th>
            <th className="p-3 text-left text-sm font-semibold">End Date</th>
            <th className="p-3 text-left text-sm font-semibold">Created By</th>
            <th className="p-3 text-left text-sm font-semibold"></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="6" className="text-center text-gray-500 py-8 text-sm">
              No tasks available
            </td>
          </tr>
        </tbody>
        
      </table>
    </div>
  );
}
