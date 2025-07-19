"use client";

import { useEffect, useRef } from "react";
import { gsap, createScrollTrigger, animateCardEntrance } from "@/lib/gsap";
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

    // Set initial hidden state for all elements
    gsap.set(titleRef.current, { opacity: 0, y: 30 });
    
    const cards = Array.from(cardsRef.current.children);
    gsap.set(cards, {
      opacity: 0,
      y: 80,
      rotationX: 15,
      scale: 0.9,
      transformOrigin: "center bottom",
    });

    // Create timeline for section animations
    const tl = gsap.timeline({ paused: true });

    // Animate title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Use sophisticated card entrance animation
    const cardAnimation = animateCardEntrance(cards, {
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      from: "start"
    });
    
    tl.add(cardAnimation, "-=0.3");

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
      className="py-12 sm:py-16 md:py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 sm:mb-4"
          >
            What We Do
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four distinct verticals united by a commitment to excellence, 
            innovation, and creating lasting impact across global markets.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
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