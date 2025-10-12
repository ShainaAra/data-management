"use client"

import * as React from "react"
import Link from "next/link"
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Home, User, Download, Upload } from "lucide-react"

export const navLinks = [
  {
    title: "Overview",
    href: "/dashboard/overview",
    icon: Home,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: User,
  },
  {
    title: "Import Project",
    href: "/dashboard/import-project",
    icon: Download,
  },
  {
    title: "Export Project",
    href: "/dashboard/export-project",
    icon: Upload,
  },
]

// render the sidebar links
export function NavLinks() {
  return (
    <SidebarGroupContent>
      <SidebarMenu className="space-y-2">
        {navLinks.map((link, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              className="flex items-center p-3 rounded-md hover:bg-gray-200 transition"
              asChild
            >
              <Link href={link.href}>
                <link.icon className="mr-3 h-5 w-5" />
                {link.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  )
}
