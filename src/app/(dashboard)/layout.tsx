"use client";

import { AppSidebar } from "@/components/application-layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <SidebarProvider className="text-neutral-700">
      <AppSidebar pathname={pathname} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
