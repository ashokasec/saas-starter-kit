import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

export interface SidebarItem {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface SidebarSectionProps {
  label?: string;
  items: SidebarItem[];
  pathname: string;
}
