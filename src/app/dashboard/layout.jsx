"use client"

import * as React from "react"
import Image from "next/image"
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AretexLogo from "../images/aretex-blue.png"
import { NavHeader } from "@/components/sidebar/sidebar-header"
import { NavLinks } from "@/components/sidebar/sidebar-links"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="bg-gray-800 w-64">
          <NavHeader />
          <NavLinks/>
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

          <main className="flex-1 overflow-y-auto pt-1 px-3 pb-5">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
