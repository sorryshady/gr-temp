'use client';

import { useEffect, useRef } from 'react';
import { gsap, defaultEase, defaultDuration } from '@/lib/gsap';
import type { TimelineItem } from '@/types';

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
      // Animate timeline items on scroll
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: defaultDuration,
            ease: defaultEase,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Animate the connecting line
      const line = timelineRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: defaultEase,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Connecting line */}
      <div className="timeline-line absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent to-transparent transform -translate-x-1/2 origin-top" />
      
      {/* Timeline items */}
      <div className="space-y-16">
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Timeline marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                item.isComingSoon ? 'bg-muted' : 'bg-accent'
              }`} />
            </div>

            {/* Content card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className={`bg-white rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 ${
                item.isComingSoon ? 'opacity-75' : ''
              }`}>
                {/* Year badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  item.isComingSoon 
                    ? 'bg-muted text-foreground/60' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  {item.isComingSoon && (
                    <span className="mr-2 text-xs">Coming Soon</span>
                  )}
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
}