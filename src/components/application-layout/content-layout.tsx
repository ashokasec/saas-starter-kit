"use client";

import type React from "react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/custom-sidebar-ui";
import { cn } from "@/lib/utils";
import { arOneSans } from "@/lib/fonts";

function LayoutNavbar() {
  return (
    <div className="h-[calc(3.5rem+0.5px)] border-b sticky top-0 flex items-center justify-between px-3 bg-background">
      <SidebarTrigger className="text-neutral-700 inset-0" />
      <div className="max-w-5xl w-full mx-auto h-10 absolute left-1/2 -translate-x-1/2 flex items-center leading-none text-[15px]">
      <span className="w-fit mx-auto text-neutral-400" style={arOneSans.style}>here comes your <span className="font-semibold text-neutral-700">search bar</span> or <span className="font-semibold text-neutral-700">nav links</span> or <span className="font-semibold text-neutral-700">breadcrumbs</span></span></div>
      <Button className="bg-blue-600 hover:bg-blue-600/90">
        Call To Action
      </Button>
    </div>
  );
}

const ContentLayout = ({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className="w-full min-h-screen">
      <LayoutNavbar />
      <div className={cn("px-5 min-h-[calc(100vh-3.5rem-0.5px)]", className)}>
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
