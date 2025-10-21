"use client";

export default function ProjectInfo({ project }) {
  return (
    <>
      {/* Author Section */}
      <div className="flex items-center mb-6">
        
        <div className="w-16 h-16 rounded-full 
                      bg-blue-100 flex items-center 
                       justify-center text-lg 
                       font-bold text-blue-700">
          {project.createdBy.charAt(0)}
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-medium">{project.createdBy}</h3>
          <p className="text-gray-500">
            {project.createdBy.toLowerCase()}@aretex.com
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-3 bg-gray-50">
          <p className="text-sm text-gray-500">Task ID</p>
          <p className="text-base font-medium text-gray-800">{project.id}</p>
        </div>

        <div className="border rounded-lg p-3 bg-gray-50">
          <p className="text-sm text-gray-500">Task Name</p>
          <p className="text-base font-medium text-gray-800">{project.name}</p>
        </div>

        <div className="border rounded-lg p-3 bg-gray-50 md:col-span-2">
          <p className="text-sm text-gray-500">Task Description</p>
          <p className="text-base font-medium text-gray-800">{project.desc}</p>
        </div>

        <div className="border rounded-lg p-3 bg-gray-50">
          <p className="text-sm text-gray-500">Created Date</p>
          <p className="text-base font-medium text-gray-800">{project.date}</p>
        </div>
      </div>
    </>
  );
}
