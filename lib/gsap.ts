/**
 * GSAP configuration and utilities for the GR Group website
 */

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  if (prefersReducedMotion) {
    // Disable GSAP animations for users who prefer reduced motion
    gsap.globalTimeline.timeScale(100); // Speed up animations to near-instant
    ScrollTrigger.config({ limitCallbacks: true }); // Limit scroll callbacks
  }
}

// Utility to check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

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

// Advanced text reveal animations
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

// Live revealing text animation - character by character
export const liveRevealText = (element: string | Element, delay = 0) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return gsap.timeline();

  const text = el.textContent || '';
  const chars = text.split('');
  
  // Clear the element and create spans for each character
  el.innerHTML = '';
  chars.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(100%)';
    el.appendChild(span);
  });

  const charElements = el.querySelectorAll('span');
  
  const tl = gsap.timeline({ delay });
  
  tl.to(charElements, {
    opacity: 1,
    y: 0,
    duration: 0.05,
    stagger: 0.02,
    ease: "power2.out",
  });
  
  return tl;
};

// Word-based reveal animation
export const revealWords = (element: string | Element, delay = 0) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return gsap.timeline();

  const text = el.textContent || '';
  const words = text.split(' ');
  
  // Clear the element and create spans for each word
  el.innerHTML = '';
  words.forEach((word) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(50px)';
    span.style.marginRight = '0.25em';
    el.appendChild(span);
  });

  const wordElements = el.querySelectorAll('span');
  
  const tl = gsap.timeline({ delay });
  
  tl.to(wordElements, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });
  
  return tl;
};

// Smooth heading entrance animation
export const animateHeading = (element: string | Element, delay = 0, animationType: 'fade' | 'slide' | 'words' = 'slide') => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return gsap.timeline();

  switch (animationType) {
    case 'words':
      return revealWords(el, delay);
    case 'fade':
      return gsap.fromTo(el, 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: defaultDuration, ease: defaultEase, delay }
      );
    case 'slide':
    default:
      return gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: defaultDuration, ease: defaultEase, delay }
      );
  }
};

// Advanced card animations
export const createCardHoverAnimation = (cardElement: Element, imageElement?: Element | null, contentElement?: Element | null) => {
  const tl = gsap.timeline({ paused: true });
  
  // Main card animation
  tl.to(cardElement, {
    scale: 1.03,
    y: -8,
    rotationY: 2,
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    duration: 0.4,
    ease: "power2.out",
  });
  
  // Image zoom effect if image element exists
  if (imageElement) {
    tl.to(imageElement, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out",
    }, 0);
  }
  
  // Content subtle lift if content element exists
  if (contentElement) {
    tl.to(contentElement, {
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    }, 0.1);
  }
  
  return tl;
};

export const createCardLeaveAnimation = (cardElement: Element, imageElement?: Element | null, contentElement?: Element | null) => {
  const tl = gsap.timeline({ paused: true });
  
  // Reverse all animations
  tl.to(cardElement, {
    scale: 1,
    y: 0,
    rotationY: 0,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    duration: 0.4,
    ease: "power2.out",
  });
  
  if (imageElement) {
    tl.to(imageElement, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    }, 0);
  }
  
  if (contentElement) {
    tl.to(contentElement, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    }, 0);
  }
  
  return tl;
};

// Sophisticated card entrance animation
export const animateCardEntrance = (elements: string | Element[], options: {
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: 'start' | 'center' | 'end';
} = {}) => {
  const {
    stagger = 0.15,
    duration = 1,
    ease = "power3.out",
    from = "start"
  } = options;

  const tl = gsap.timeline();
  
  // Set initial state
  tl.set(elements, {
    opacity: 0,
    y: 80,
    rotationX: 15,
    scale: 0.9,
    transformOrigin: "center bottom",
  });

  // Create sophisticated entrance animation
  tl.to(elements, {
    opacity: 1,
    y: 0,
    rotationX: 0,
    scale: 1,
    duration,
    ease,
    stagger: {
      amount: stagger * (Array.isArray(elements) ? elements.length : 4),
      from,
      ease: "power2.out",
    },
  })
  
  // Add subtle secondary animation for depth
  .to(elements, {
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    duration: 0.5,
    ease: "power2.out",
    stagger: stagger / 2,
  }, `-=${duration * 0.8}`);
  
  return tl;
};

// Parallax effect for background images
export const createParallaxEffect = (element: string | Element, options: {
  speed?: number;
  direction?: 'up' | 'down';
  trigger?: string | Element;
} = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    trigger
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const yMovement = direction === 'up' ? -100 * speed : 100 * speed;

  return gsap.to(el, {
    y: yMovement,
    ease: "none",
    scrollTrigger: {
      trigger: trigger || el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Page transition animations
export const createPageTransition = (direction: 'in' | 'out' = 'in') => {
  const tl = gsap.timeline();
  
  if (direction === 'in') {
    // Page entrance animation
    tl.fromTo('main', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  } else {
    // Page exit animation
    tl.to('main',
      { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }
    );
  }
  
  return tl;
};

// Smooth navigation scroll animation
export const smoothScrollToElement = (target: string | Element, offset: number = 0) => {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  const targetPosition = el.getBoundingClientRect().top + window.scrollY - offset;
  
  return gsap.to(window, {
    duration: 1.2,
    scrollTo: {
      y: targetPosition,
      autoKill: true
    },
    ease: "power2.inOut"
  });
};

export { gsap, ScrollTrigger };
