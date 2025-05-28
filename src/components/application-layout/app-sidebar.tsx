// components/sidebar/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { epilogue } from "@/lib/fonts";
import { app } from "@/lib/config/app";
import { SidebarSection } from "../ui/custom-sidebar-ui";
import {
  LayoutDashboard,
  Layers,
  FileText,
  Upload,
  Users,
  Settings,
  Asterisk,
  DollarSign,
  BarChart2,
  CreditCard,
} from "lucide-react";
import type { SidebarItem } from "@/lib/types/sidebar";
import Link from "next/link";

export const sidebarMenu: SidebarItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: Layers },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Uploads", href: "/uploads", icon: Upload },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const sidebarBilling: SidebarItem[] = [
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Usage", href: "/billing/usage", icon: BarChart2 },
  { name: "Plans", href: "/billing/plans", icon: DollarSign },
];

export function AppSidebar({
  pathname,
  ...props
}: React.ComponentProps<typeof Sidebar> & { pathname: string }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b px-[0.9rem] bg-background">
        <Link
          href="/"
          style={epilogue.style}
          className="text-[17px] font-semibold leading-none h-10 flex items-center text-blue-600"
        >
          <Asterisk className="relative bottom-[1px] size-5" />
          {app.name}
        </Link>
      </SidebarHeader>

      <SidebarContent className="pb-2 h-[calc(100vh-4.5rem)] bg-background">
        <div className="rounded-xl h-full">
          <SidebarSection
            label="Menu"
            items={sidebarMenu}
            pathname={pathname}
          />
          <SidebarSection
            label="Billing & Plans"
            items={sidebarBilling}
            pathname={pathname}
          />
        </div>
      </SidebarContent>

      <SidebarRail className="bg-transparent border-transparent" />
    </Sidebar>
  );
}
