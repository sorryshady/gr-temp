"use client";

import { useEffect, useRef } from "react";
import { animateHeading, createScrollTrigger } from "@/lib/gsap";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'slide' | 'words';
  delay?: number;
  triggerOnScroll?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function AnimatedHeading({
  children,
  className = "",
  animationType = 'slide',
  delay = 0,
  triggerOnScroll = true,
  as: Component = 'h2'
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const animation = animateHeading(headingRef.current, delay, animationType);

    if (triggerOnScroll) {
      const trigger = createScrollTrigger(headingRef.current, animation, {
        start: "top 85%",
      });
      
      return () => {
        trigger.kill();
        animation.kill();
      };
    }

    return () => {
      animation.kill();
    };
  }, [animationType, delay, triggerOnScroll]);

  return (
    <Component
      ref={headingRef}
      className={className}
    >
      {children}
    </Component>
  );
}