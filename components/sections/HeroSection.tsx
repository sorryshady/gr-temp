"use client";

import { useEffect, useRef } from "react";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { smoothScrollTo } from "@/lib/utils";
import { revealWords, gsap, createParallaxEffect } from "@/lib/gsap";

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
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !headlineRef.current || !subtextRef.current || !ctaRef.current) return;

    // Create timeline for hero animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline with word-based reveal
    tl.add(revealWords(headlineRef.current, 0))
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

    // Add parallax effect to background
    let parallaxAnimation: gsap.core.Tween | null = null;
    if (backgroundRef.current) {
      parallaxAnimation = createParallaxEffect(backgroundRef.current, {
        speed: 0.5,
        direction: 'up',
        trigger: heroRef.current
      });
    }

    return () => {
      tl.kill();
      if (parallaxAnimation) {
        parallaxAnimation.kill();
      }
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
      <div ref={backgroundRef} className="absolute inset-0 z-0 scale-110">
        <ResponsiveImage
          unsplashId={backgroundImage}
          width={1920}
          height={1080}
          alt="GR Group Hero Background"
          priority
          quality={85}
          className="w-full h-full"
          brightness={-10}
          contrast={5}
          sizes={{
            mobile: '100vw',
            tablet: '100vw',
            desktop: '100vw'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight"
        >
          {headline}
        </h1>
        
        <p
          ref={subtextRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
        >
          {subtext}
        </p>

        <button
          ref={ctaRef}
          onClick={handleCTAClick}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium text-base sm:text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg touch-manipulation"
        >
          {ctaText}
          <svg
            className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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