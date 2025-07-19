"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { createPageTransition } from "@/lib/gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);
  const previousPathname = useRef<string>(pathname);

  useEffect(() => {
    if (!mainRef.current) return;

    // Only animate if the pathname has actually changed
    if (previousPathname.current !== pathname) {
      const animation = createPageTransition('in');
      previousPathname.current = pathname;
      
      return () => {
        animation.kill();
      };
    }
  }, [pathname]);

  return (
    <main ref={mainRef}>
      {children}
    </main>
  );
}