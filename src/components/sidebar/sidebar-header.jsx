"use client"

import * as React from "react"
import {
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { NavLinks } from "./sidebar-links"

export function NavHeader() {
  return (
    <SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel className="text-gray-500 px-4 py-2 text-sm">
          Data Management
        </SidebarGroupLabel>
      </SidebarGroup>
    </SidebarHeader>
  )
}
