"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// component imports (fixed paths)
import ProjectHeader from "../ProjectHeader";
import ProjectInfo from "../ProjectInfo";
import ProjectSummary from "../ProjectSummary";
import ProjectEditForm from "../ProjectEditForm";
import ImportFileModal from "../ImportFileModal";


export default function ProjectDetails() {
  const { projectId } = useParams();
  const router = useRouter();

  // Dummy dataset
  const dummyData = [
    {
      id: 1,
      name: "PandaBot",
      desc: "IoT-based automation project",
      createdBy: "Nash",
      date: "2025-10-16",
    },
    {
      id: 2,
      name: "Na-ar-tap",
      desc: "RFID Attendance System",
      createdBy: "Ara",
      date: "2025-10-10",
    },
    {
      id: 3,
      name: "Obscura",
      desc: "Encryption and Decryption Calculator",
      createdBy: "Jamie",
      date: "2025-09-25",
    },
  ];

  const [project, setProject] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // file data
  const [dummyFiles, setDummyFiles] = useState([
    {
      id: 1,
      entity: "Student Data",
      fileUploaded: "students.csv",
      createdDate: "2025-10-12",
      format: "CSV",
      description: "Contains student attendance logs.",
    },
    {
      id: 2,
      entity: "RFID Logs",
      fileUploaded: "rfid_logs.xlsx",
      createdDate: "2025-10-14",
      format: "XLSX",
      description: "Records of RFID scans.",
    },
    {
      id: 3,
      entity: "Sensor Config",
      fileUploaded: "config.json",
      createdDate: "2025-10-15",
      format: "JSON",
      description: "Configuration for IoT sensors.",
    },
  ]);

  const [editFile, setEditFile] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // load project data
  useEffect(() => {
    const found = dummyData.find((p) => p.id.toString() === projectId);
    if (!found) {
      router.replace("/dashboard/import-project");
      return;
    }
    setProject(found);
  }, [projectId]);

  const handleDeleteProject = () => {
    router.push("/dashboard/import-project");
  };

  const handleFileDelete = (id) => {
    setDummyFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleFileEditSave = (updatedFile) => {
    setDummyFiles((prev) =>
      prev.map((file) => (file.id === updatedFile.id ? updatedFile : file))
    );
    setEditFile(null);
  };

  const handleFileImport = (newFile) => {
    setDummyFiles([...dummyFiles, { id: dummyFiles.length + 1, ...newFile }]);
  };

  if (!project)
    return <div className="p-6 text-gray-600">Loading project details...</div>;

  return (
    <div className="p-2 md:p-4 lg:p-6">
  <div className="bg-white border border-blue-500 rounded-2xl shadow-md p-8 md:p-10 max-w-7xl mx-auto">

        {/* back button */}
        <Link
          href="/dashboard/import-project"
          className="flex items-center gap-2 text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Import Projects
        </Link>

        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            {/* Header */}
            <ProjectHeader
              project={project}
              isEditMode={isEditMode}
              onEdit={() => setIsEditMode(true)}
              onDelete={handleDeleteProject}

              
            />

            {/* Toggle between Edit form or View mode */}
            {!isEditMode ? (
              <>
                {/* Project Info */}
                <ProjectInfo project={project} />

                {/* Project Summary Table */}
                <ProjectSummary files={dummyFiles} setFiles={setDummyFiles} />

              </>
            ) : (
             <ProjectEditForm
  project={project}
  setProject={setProject}
  setIsEditMode={setIsEditMode}
/>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
