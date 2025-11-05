"use client"

export const dynamic = "force-dynamic"
import * as React from "react"
import Image from "next/image"
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Grid, List, LogOut, ChevronDown } from "lucide-react"
import AretexLogo from "../images/aretex-blue.png"
import { NavHeader } from "@/components/sidebar/sidebar-header"
import { NavLinks } from "@/components/sidebar/sidebar-links"
import { SidebarFooter } from "@/components/sidebar/sidebar-footer"

export default function Layout({ children }) {
  const [viewMode, setViewMode] = React.useState("grid") // "grid" | "list"

  const handleLogout = () => {
    console.log("Logout clicked!")
    // Add your logout logic here (e.g., router.push("/login"))
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="bg-gray-800 w-64 flex flex-col">
          <NavHeader />
          <NavLinks />
          <SidebarFooter />
        </Sidebar>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="flex items-center justify-between h-14 bg-white border-b px-4">
            {/* Left section */}
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Image
                src={AretexLogo}
                alt="Aretex Logo"
                width={120}
                height={40}
                priority
              />
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              {/* Notification */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </Button>

              {/* Avatar + Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-full transition">
                    <Avatar className="h-8 w-8 border border-gray-200">
                      <AvatarImage src="/images/avatar.png" alt="User" />
                      <AvatarFallback className="bg-orange-500 text-white">
                        A
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown size={16} className="text-gray-600" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Google Drive–style Toggle */}
              <div className="flex items-center">
                <div className="flex border border-gray-300 rounded-full overflow-hidden shadow-sm">
                  {/* Grid view button */}
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-2.5 py-1.5 flex items-center justify-center transition ${
                      viewMode === "grid"
                        ? "bg-gray-200 text-gray-900"
                        : "hover:bg-gray-100 text-gray-500"
                    }`}
                    title="Grid view"
                  >
                    <Grid size={16} />
                  </button>

                  {/* List view button */}
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-2.5 py-1.5 flex items-center justify-center transition ${
                      viewMode === "list"
                        ? "bg-gray-200 text-gray-900"
                        : "hover:bg-gray-100 text-gray-500"
                    }`}
                    title="List view"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto pt-1 px-3 pb-5">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}