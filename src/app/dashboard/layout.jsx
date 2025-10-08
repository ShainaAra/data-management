"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavLinks } from "@/components/sidebar/nav-links"
import AretexLogo from "../images/aretex-blue.png"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="bg-gray-800 w-64">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-500 px-4 py-2 text-sm">
                Dashboard
              </SidebarGroupLabel>
              <NavLinks />
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <header className="flex items-center h-14 bg-white border-b px-4 gap-2">
            <SidebarTrigger />
            <Image
              src={AretexLogo}
              alt="Aretex Logo"
              width={120}
              height={40}
              priority
            />
          </header>

          <main className="flex-1 overflow-y-auto p-5">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
