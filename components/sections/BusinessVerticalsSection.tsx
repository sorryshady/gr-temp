"use client";

import { useEffect, useRef } from "react";
import { gsap, createScrollTrigger } from "@/lib/gsap";
import BusinessVerticalCard from "@/components/ui/BusinessVerticalCard";
import type { BusinessVertical } from "@/types";

interface BusinessVerticalsSectionProps {
  verticals: BusinessVertical[];
}

export default function BusinessVerticalsSection({ verticals }: BusinessVerticalsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;

    // Create timeline for section animations
    const tl = gsap.timeline({ paused: true });

    // Animate title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate cards with stagger
    const cards = cardsRef.current.children;
    tl.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.4"
    );

    // Create scroll trigger
    createScrollTrigger(sectionRef.current, tl, {
      start: "top 70%",
    });

    return () => {
      tl.kill();
    };
  }, [verticals]);

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four distinct verticals united by a commitment to excellence, 
            innovation, and creating lasting impact across global markets.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {verticals.map((vertical, index) => (
            <BusinessVerticalCard
              key={vertical.id}
              vertical={vertical}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}