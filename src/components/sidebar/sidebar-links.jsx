"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

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
    title: "Import Projects",
    href: "/dashboard/import-project",
    icon: Download,
  },
  {
    title: "Export Projects",
    href: "/dashboard/export-project",
    icon: Upload,
  },
]

export function NavLinks() {
  const pathname = usePathname() // get current path

  return (
    <SidebarGroupContent>
      <SidebarMenu className="space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href)

          return (
            <SidebarMenuItem key={link.title}>
              <Button variant={isActive ? "default" : "ghost"} asChild>
                <Link href={link.href} className="flex items-center justify-start w-full p-3 rounded-md text-left">
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.title}
                </Link>
              </Button>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroupContent>
  )
}
