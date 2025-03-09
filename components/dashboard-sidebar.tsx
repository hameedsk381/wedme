"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  Heart,
  MessageSquare,
  Settings,
  Calendar,
  LogOut,
  User,
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  ShieldCheck,
} from "lucide-react"

interface DashboardSidebarProps {
  type?: "user" | "admin"
}

export function DashboardSidebar({ type = "user" }: DashboardSidebarProps) {
  const pathname = usePathname()

  const userMenuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Saved Vendors",
      href: "/dashboard/saved",
      icon: Heart,
    },
    {
      title: "My Inquiries",
      href: "/dashboard/inquiries",
      icon: MessageSquare,
    },
    {
      title: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
    },
    {
      title: "Profile Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  const adminMenuItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Vendor Approvals",
      href: "/admin/vendors",
      icon: ShieldCheck,
    },
    {
      title: "User Management",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: FileText,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  const menuItems = type === "admin" ? adminMenuItems : userMenuItems

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center p-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>WedMe</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/auth/logout">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

