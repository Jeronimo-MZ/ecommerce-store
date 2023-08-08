"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type MainNavProps = {
  data: Array<{
    id: string;
    name: string;
  }>;
};

export const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const mappedRoutes = data.map(category => ({
    href: `/category/${category.id}`,
    label: category.name,
    get isActive(): boolean {
      return this.href === pathname;
    },
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {mappedRoutes.map(route => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.isActive ? "text-black" : "text-neutral-500",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
