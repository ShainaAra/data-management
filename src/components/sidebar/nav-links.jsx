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
