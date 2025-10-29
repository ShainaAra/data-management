"use client"

import React from "react"
import { Settings } from "lucide-react" // or your icon library
import { cn } from "@/lib/utils" // optional utility if you have it

export function SidebarFooter({ onSettingsClick }) {
  return (
    <div className="mt-auto p-4 border-t border-gray-300">
      <button
        onClick={onSettingsClick}
        className={cn(
          "flex items-center gap-2 text-black-300 hover:text-blue w-full px-3 py-2 rounded-md transition-colors"
        )}
      >
        <Settings size={20} />
        <span className="text-sm font-medium">Settings</span>
      </button>
    </div>
  )
}
