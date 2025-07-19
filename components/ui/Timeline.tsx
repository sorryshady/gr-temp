'use client';

import { gsap } from '@/lib/gsap';
import type { TimelineItem } from '@/types';
import { useEffect, useRef } from 'react';

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Enhanced timeline item animations
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const card = item.querySelector('.timeline-card');
        const marker = item.querySelector('.timeline-marker');
        const badge = item.querySelector('.timeline-badge');
        const title = item.querySelector('.timeline-title');
        const description = item.querySelector('.timeline-description');

        // Create sophisticated timeline for each item
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });

        // Set initial states
        gsap.set([card, marker], {
          opacity: 0,
          scale: 0.8,
        });

        gsap.set(card, {
          x: index % 2 === 0 ? -60 : 60,
          rotationY: index % 2 === 0 ? -15 : 15,
        });

        gsap.set([badge, title, description], {
          opacity: 0,
          y: 20,
        });

        // Animate marker first
        tl.to(marker, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        })
        
        // Then animate card
        .to(card, {
          opacity: 1,
          scale: 1,
          x: 0,
          rotationY: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.2")
        
        // Finally animate content with stagger
        .to([badge, title, description], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.3");
      });

      // Enhanced connecting line animation
      const line = timelineRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { 
            scaleY: 0,
            transformOrigin: "top center"
          },
          {
            scaleY: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }

      // Add subtle parallax effect to timeline markers
      const markers = timelineRef.current?.querySelectorAll('.timeline-marker');
      if (markers) {
        markers.forEach((marker, index) => {
          gsap.to(marker, {
            y: -10,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          });
        });
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Connecting line - hidden on mobile, visible on larger screens */}
      <div className="timeline-line absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent to-transparent sm:transform sm:-translate-x-1/2 origin-top" />
      
      {/* Timeline items */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className={`relative flex items-start sm:items-center ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } flex-row`}
          >
            {/* Timeline marker */}
            <div className="timeline-marker absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 mt-2 sm:mt-0">
              <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white shadow-lg ${
                item.isComingSoon ? 'bg-muted' : 'bg-accent'
              }`} />
            </div>

            {/* Content card */}
            <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
              <div className={`timeline-card bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 touch-manipulation ${
                item.isComingSoon ? 'opacity-75' : ''
              }`}>
                {/* Year badge */}
                <div className={`timeline-badge inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 ${
                  item.isComingSoon 
                    ? 'bg-muted text-foreground/60' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  {item.isComingSoon && (
                    <span className="mr-1 sm:mr-2 text-xs">Coming Soon</span>
                  )}
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="timeline-title text-lg sm:text-xl font-serif font-semibold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="timeline-description text-sm sm:text-base text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Empty space for alternating layout - only on larger screens */}
            <div className="hidden sm:block sm:w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
}