"use client";

import { createCardHoverAnimation, createCardLeaveAnimation } from "@/lib/gsap";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import type { BusinessVertical } from "@/types";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface BusinessVerticalCardProps {
  vertical: BusinessVertical;
  index: number;
}

export default function BusinessVerticalCard({ vertical }: BusinessVerticalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const cardElement = cardRef.current;
    const imageElement = cardElement.querySelector('.card-image');
    const contentElement = cardElement.querySelector('.card-content');

    // Create hover and leave animations using utilities
    const hoverAnimation = createCardHoverAnimation(cardElement, imageElement, contentElement);
    const leaveAnimation = createCardLeaveAnimation(cardElement, imageElement, contentElement);

    // Enhanced hover animations with multiple elements
    const handleMouseEnter = () => {
      leaveAnimation.pause();
      hoverAnimation.restart();
    };

    const handleMouseLeave = () => {
      hoverAnimation.pause();
      leaveAnimation.restart();
    };

    cardElement.addEventListener("mouseenter", handleMouseEnter);
    cardElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardElement.removeEventListener("mouseenter", handleMouseEnter);
      cardElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const CardContent = () => (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl touch-manipulation ${
        vertical.isComingSoon ? "opacity-90" : ""
      }`}
    >
      {/* Coming Soon Badge */}
      {vertical.isComingSoon && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          Coming Soon
        </div>
      )}

      {/* Image */}
      <div className="card-image relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <ResponsiveImage
          unsplashId={vertical.imageUrl}
          width={600}
          height={400}
          alt={vertical.title}
          quality={80}
          className="w-full h-full hover:scale-105"
          grayscale={vertical.isComingSoon}
          brightness={-5}
          contrast={10}
          sizes={{
            mobile: '100vw',
            tablet: '50vw',
            desktop: '33vw'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="card-content p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 text-gray-900 leading-tight">
          {vertical.title}
        </h3>
        
        <p className="text-orange-600 font-medium mb-3 text-xs sm:text-sm uppercase tracking-wide">
          {vertical.tagline}
        </p>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
          {vertical.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
            {vertical.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        {vertical.testimonial && (
          <blockquote className="border-l-4 border-orange-500 pl-3 sm:pl-4 mb-4">
            <p className="text-gray-700 italic text-xs sm:text-sm leading-relaxed">
              &ldquo;{vertical.testimonial}&rdquo;
            </p>
          </blockquote>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-gray-500">
            {vertical.isComingSoon ? "Stay tuned for updates" : "Learn more"}
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0"
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
        </div>
      </div>
    </div>
  );

  if (vertical.isComingSoon) {
    return <CardContent />;
  }

  return (
    <Link href={vertical.route} className="block">
      <CardContent />
    </Link>
  );
}