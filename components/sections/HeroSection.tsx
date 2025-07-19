"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { formatImageUrl, smoothScrollTo } from "@/lib/utils";
import { liveRevealText, gsap } from "@/lib/gsap";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export default function HeroSection({
  headline,
  subtext,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!heroRef.current || !headlineRef.current || !subtextRef.current || !ctaRef.current) return;

    // Create timeline for hero animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline with live character reveal
    tl.add(liveRevealText(headlineRef.current, 0))
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleCTAClick = () => {
    const targetId = ctaLink.replace("#", "");
    smoothScrollTo(targetId);
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={formatImageUrl(backgroundImage, 1920, 1080)}
          alt="GR Group Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          {headline}
        </h1>
        
        <p
          ref={subtextRef}
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
        >
          {subtext}
        </p>

        <button
          ref={ctaRef}
          onClick={handleCTAClick}
          className="inline-flex items-center px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}