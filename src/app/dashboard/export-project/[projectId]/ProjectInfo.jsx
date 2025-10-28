"use client";

import { Calendar, FileText, User, Hash } from "lucide-react";

export default function ProjectInfo({ project }) {
  return (
    <div className="space-y-6">
      {/* Author Section */}
      <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm border border-gray-200">
        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold shadow-sm">
          {project.createdBy.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{project.createdBy}</h3>
          <p className="text-sm text-gray-500">
            {project.createdBy.toLowerCase()}@aretex.com
          </p>
        </div>
      </div>

      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Hash className="w-4 h-4" />
            <p className="text-sm font-medium">Task ID</p>
          </div>
          <p className="text-base font-semibold text-gray-800">{project.id}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <FileText className="w-4 h-4" />
            <p className="text-sm font-medium">Task Name</p>
          </div>
          <p className="text-base font-semibold text-gray-800">{project.name}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow transition-shadow md:col-span-2">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <FileText className="w-4 h-4" />
            <p className="text-sm font-medium">Task Description</p>
          </div>
          <p className="text-base text-gray-800 leading-relaxed">{project.desc}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Calendar className="w-4 h-4" />
            <p className="text-sm font-medium">Created Date</p>
          </div>
          <p className="text-base font-semibold text-gray-800">{project.date}</p>
        </div>
      </div>

      {/* Project Summary */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
        <h4 className="text-base font-semibold text-blue-700 mb-2">
          Project Summary
        </h4>
        <p className="text-gray-700 leading-relaxed text-sm">
          The <span className="font-medium">{project.name}</span> project was created by{" "}
          <span className="font-medium">{project.createdBy}</span> to streamline export
          operations and data processing. It demonstrates Aretex’s commitment to secure,
          automated, and scalable solutions for project data handling.
        </p>
      </div>
    </div>
  );
}
