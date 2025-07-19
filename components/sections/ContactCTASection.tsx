"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, createScrollTrigger } from "@/lib/gsap";

interface ContactCTASectionProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function ContactCTASection({
  headline,
  description,
  ctaText,
  ctaLink,
}: ContactCTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Create timeline for section animations
    const tl = gsap.timeline({ paused: true });

    const elements = contentRef.current.children;
    
    tl.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    // Create scroll trigger
    createScrollTrigger(sectionRef.current, tl, {
      start: "top 80%",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {headline}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <Link
            href={ctaLink}
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-medium text-lg rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {ctaText}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}