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
import { navLinks } from "@/components/sidebar/nav-links" 
import AretexLogo from "../images/aretex-blue.png"

export default function Layout({ children }) {
  return (

    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        {/* label in dashboard */}
        <Sidebar className="bg-gray-800 w-64">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-500 px-4 py-2 text-sm">
                Dashboard
              </SidebarGroupLabel>

              {/* links */}
              <SidebarGroupContent>     
                <SidebarMenu className="space-y-2">
                  {/* loops through item in the navlinks */}
                  {navLinks.map((link, index) => (
                    <SidebarMenuItem key={index}>

                      <SidebarMenuButton
                        className="flex items-center p-3 rounded-md hover:bg-gray-200 transition "
                        asChild
                      >
                        {/* hand;les the navigation...where to go */}
                        <Link href={link.href}>
                          <link.icon className="mr-3 h-5 w-5" />
                          {/*  */}
                          {link.title}
                        </Link>

                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
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
            <Image
              src={AretexLogo}
              alt="Aretex Logo"
              width={120}
              height={40}
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
