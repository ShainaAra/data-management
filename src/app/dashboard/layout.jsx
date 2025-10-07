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
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, User, Download, Upload } from "lucide-react"

// Import logo
import AretexLogo from "../images/aretex-blue.png"  

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="bg-gray-800 w-64">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400 px-4 py-2 text-sm">
                Overview
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex items-center p-3 rounded-md" asChild>
                     <Link href='/dashboard/overview'> 
                      <Home className="mr-3 h-5 w-5" />
                      Dashboard
                     </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex items-center p-3 rounded-md" href="./users/users.jsx">
                      <User className="mr-3 h-5 w-5" />
                      Users
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex items-center p-3 rounded-md">
                      <Download className="mr-3 h-5 w-5" />
                      Import Project
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex items-center p-3 rounded-md">
                      <Upload className="mr-3 h-5 w-5" />
                      Export Project
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main area with navbar */}
        <div className="flex flex-1 flex-col">
          {/* Navbar */}
          <header className="flex items-center h-14 bg-white border-b px-4 gap-2">
            <SidebarTrigger /> 
            {/* Replace text with logo */}
            <Image
              src={AretexLogo}
              alt="Aretex Logo"
              width={120}   // adjust size
              height={40}   // adjust size
              priority
            />
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-5">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
