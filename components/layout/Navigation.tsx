"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export default function Navigation({
  className = "",
  onItemClick,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={className} role="navigation" aria-label="Main navigation">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onItemClick}
            className={`
              font-medium transition-colors duration-200 relative group rounded px-2 py-1
              ${
                isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
              }
            `}
            aria-current={isActive ? "page" : undefined}
          >
            {item.name}
            <span
              className={`
                absolute -bottom-1 left-2 right-2 h-0.5 bg-gray-900 transition-all duration-200
                ${isActive ? "w-auto" : "w-0 group-hover:w-auto group-focus:w-auto"}
              `}
              aria-hidden="true"
            />
          </Link>
        );
      })}
    </nav>
  );
}
