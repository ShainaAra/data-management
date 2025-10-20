"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectDetails({ project }) {
  // Example dummy data (replace with fetched data using projectId)
  const projectData = project || {
    author: "Alice",
    projectId: "PJT-001",
    projectName: "PandaBot",
    description: "IoT-based automation project",
    createdDate: "2025-10-16",
    file: "panda-bot.zip",
    summary: [
      {
        title: "EcoTracker",
        description: "Environment monitoring app",
        createdDate: "2025-10-10",
        file: "eco-tracker.zip",
      },
      {
        title: "SmartHome",
        description: "Home automation system",
        createdDate: "2025-09-25",
        file: "smarthome.zip",
      },
    ],
  };

  return (
    <div className="p-6">
      <Card className="border border-blue-400 shadow-sm rounded-xl">
        <CardContent className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Author Profile: {projectData.author}
            </h2>
            <div className="space-x-2">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Save</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>

          {/* Author Section */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700">
              {projectData.author.charAt(0)}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">{projectData.author}</h3>
              <p className="text-gray-500">{projectData.author.toLowerCase()}@aretex.com</p>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Project ID</p>
              <p className="text-base font-medium text-gray-800">{projectData.projectId}</p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Project Name</p>
              <p className="text-base font-medium text-gray-800">{projectData.projectName}</p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Project Description</p>
              <p className="text-base font-medium text-gray-800">{projectData.description}</p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">Created Date</p>
              <p className="text-base font-medium text-gray-800">{projectData.createdDate}</p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-500">File of the Project</p>
              <p className="text-base font-medium text-blue-600 hover:underline cursor-pointer">
                {projectData.file}
              </p>
            </div>
          </div>

          {/* Project Summary Accordion */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Project Summary</h3>
            <Accordion type="single" collapsible className="w-full">
              {projectData.summary.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-2">
                  <AccordionTrigger className="px-4 py-2 text-left font-medium">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Description:</span> {item.description}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Created Date:</span> {item.createdDate}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">File:</span>{" "}
                      <span className="text-blue-600 hover:underline cursor-pointer">{item.file}</span>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
