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
import { SidebarFooter } from "@/components/sidebar/sidebar-footer" // ✅ import it

export default function Layout({ children }) {
  const handleSettingsClick = () => {
    console.log("Settings clicked!")
    // You can later navigate to /dashboard/settings or open a modal here
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="bg-gray-800 w-64 flex flex-col">
          <NavHeader />
          <NavLinks />
          <SidebarFooter onSettingsClick={handleSettingsClick} /> {/*added */}
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
