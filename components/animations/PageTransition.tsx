"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef<string>(pathname);

  useEffect(() => {
    if (!containerRef.current) return;

    // Only animate if the pathname has actually changed
    if (previousPathname.current !== pathname) {
      // Page entrance animation
      const tl = gsap.timeline();

      // Set initial state
      gsap.set(containerRef.current, {
        opacity: 0,
        y: 20,
      });

      // Animate in
      tl.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
      });

      previousPathname.current = pathname;

      return () => {
        tl.kill();
      };
    }
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}