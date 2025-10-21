"use client"

import * as React from "react"
import {
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { NavLinks } from "./sidebar-links"
import { Separator } from "@/components/ui/separator"

export function NavHeader() {
  return (
    <SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel className="text-gray-500 pl-[0.1rem] py-2 text-base font-xl">
          Data Management
        </SidebarGroupLabel>
        <SidebarSeparator className="my-2 bg-gray-200 w-[85%] mx-auto" />
      </SidebarGroup>
    </SidebarHeader>
  )
}
