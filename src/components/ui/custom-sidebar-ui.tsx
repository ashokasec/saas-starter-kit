import Link from "next/link";
import {
  SidebarGroupLabel,
  SidebarGroup,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import type { SidebarItem, SidebarSectionProps } from "@/lib/types/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function MenuItem({
  pathname,
  href,
  name,
  icon: Icon,
}: SidebarItem & { pathname: string }) {
  const isActive = pathname === href;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={`py-2 !text-neutral-700 transition-all px-2.5 border border-transparent ${
          isActive
            ? "!bg-blue-500/10 !text-blue-700 !border-blue-500"
            : "hover:bg-blue-500/10"
        }`}
      >
        <Link href={href}>
          <Icon className="!h-3.5 !w-3.5" />
          <span className="font-medium">{name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function SidebarSection({
  label,
  items,
  pathname,
}: SidebarSectionProps) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="pl-2.5 inline-flex items-center">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu className="gap-0 space-y-0.5">
          {items.map((item) => (
            <MenuItem key={item.href} pathname={pathname} {...item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function SidebarTrigger({ className }: { className?: string }) {
  const { open, setOpen } = useSidebar();

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setOpen(!open)}
      className={cn("!p-0 bg-white size-8", className)}
    >
      <ChevronsRight
        className={`!w-4 !h-4 transition-all duration-1000 ${
          open ? "rotate-180" : ""
        }`}
      />
    </Button>
  );
}
