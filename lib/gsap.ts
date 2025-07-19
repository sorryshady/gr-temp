/**
 * GSAP configuration and utilities for the GR Group website
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation settings
export const defaultEase = "power2.out";
export const defaultDuration = 0.8;

// Animation utilities
export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: defaultDuration,
      ease: defaultEase,
      delay,
    }
  );
};

export const staggerFadeInUp = (elements: string | Element[], stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: defaultDuration,
      ease: defaultEase,
      stagger,
    }
  );
};

export const createScrollTrigger = (
  trigger: string | Element,
  animation: gsap.core.Timeline | gsap.core.Tween,
  options: ScrollTrigger.Vars = {}
) => {
  return ScrollTrigger.create({
    trigger,
    start: "top 80%",
    end: "bottom 20%",
    animation,
    ...options,
  });
};

// Text reveal animation
export const revealText = (element: string | Element, delay = 0) => {
  const tl = gsap.timeline({ delay });
  
  tl.set(element, { overflow: "hidden" })
    .fromTo(
      element,
      {
        opacity: 0,
        y: "100%",
      },
      {
        opacity: 1,
        y: "0%",
        duration: defaultDuration,
        ease: defaultEase,
      }
    );
  
  return tl;
};

export { gsap, ScrollTrigger };