# Design Document

## Overview

The GR Group website is a sophisticated, performance-focused corporate website built with Next.js 15 App Router, featuring a modern design system with subtle animations and responsive layouts. The architecture emphasizes clean code organization, optimal performance, and scalable component structure to support future growth into a more editorial/creative experience.

## Architecture

### Technology Stack
- **Framework**: Next.js 15 with App Router for optimal performance and SEO
- **Styling**: Tailwind CSS v4 (no external config) for utility-first styling
- **Animation**: GSAP for smooth scroll-based and interaction animations
- **Typography**: Google Fonts (DM Serif Display, DM Sans)
- **Images**: Unsplash API integration for placeholder content
- **Deployment**: Optimized for Vercel deployment with automatic optimization

### Project Structure
```
src/
├── app/
│   ├── layout.tsx                 # Root layout with fonts and global styles
│   ├── page.tsx                   # Homepage
│   ├── about/
│   │   └── page.tsx              # About GR Group page
│   ├── exports/
│   │   └── page.tsx              # Global Exports page
│   ├── events/
│   │   └── page.tsx              # Signature Events page
│   ├── ventures/
│   │   └── page.tsx              # Lifestyle Ventures (Coming Soon)
│   ├── collaborations/
│   │   └── page.tsx              # Collaborations (Coming Soon)
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   └── globals.css               # Global styles and CSS variables
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── sections/                 # Page section components
│   ├── layout/                   # Layout components (Header, Footer)
│   └── animations/               # GSAP animation components
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── constants.ts              # Site constants and content
│   └── gsap.ts                   # GSAP configuration and utilities
└── types/
    └── index.ts                  # TypeScript type definitions
```

## Components and Interfaces

### Core Layout Components

#### Header Component
- **Purpose**: Site navigation with smooth scroll anchors
- **Features**: Responsive hamburger menu, active state indicators
- **Animation**: Fade-in on load, smooth hover transitions

#### Footer Component
- **Purpose**: Site links, social media, legal information
- **Content**: Contact email, social links, copyright
- **Styling**: Minimal design with subtle dividers

#### Navigation Component
- **Routes**: Home, About, Exports, Events, Ventures, Collaborations, Contact
- **Behavior**: Smooth scroll for anchor links, active page highlighting
- **Mobile**: Collapsible hamburger menu with slide animations

### Page Section Components

#### Hero Section
- **Layout**: Full-screen (100vh) height with centered content
- **Typography**: Large DM Serif Display headline with DM Sans subtext
- **Background**: High-quality Unsplash image with overlay
- **Animation**: Custom typography reveal animation with live revealing effect, subtle parallax effect
- **CTA**: Prominent button with hover animations

#### Business Vertical Cards
- **Structure**: Grid layout with consistent card design
- **Content**: Title, description, testimonial quote, visual
- **States**: Hover effects with subtle zoom and shadow
- **Animation**: Custom reveal animation (not simple fade-in) with sophisticated entrance effects

#### Coming Soon Sections
- **Design**: Muted styling with "Coming Soon" badge
- **Content**: Vision and brief description of planned offerings to build anticipation
- **Layout**: Full page layout with content explaining future direction
- **Animation**: Gentle pulse effect on badge

#### Timeline Component (About Page)
- **Purpose**: Interactive company story timeline with past achievements and future plans
- **Structure**: Vertical timeline with milestone cards
- **Content**: Company history, key achievements, current status, and coming soon initiatives
- **Animation**: Scroll-triggered reveals with custom animations for each milestone
- **Design**: Sophisticated visual treatment with connecting lines and milestone markers

### Animation System

#### GSAP Integration
- **ScrollTrigger**: Section reveals on scroll
- **Timeline**: Coordinated animations for complex sequences
- **Hover Effects**: Smooth transitions for interactive elements
- **Performance**: Hardware acceleration and optimized triggers

#### Animation Patterns
- **Section Reveals**: Fade + vertical slide (30px offset)
- **Text Animations**: Character or word-based reveals
- **Image Effects**: Subtle zoom on hover, parallax scrolling
- **Navigation**: Smooth scroll with easing curves

## Data Models

### Site Content Structure
```typescript
interface BusinessVertical {
  id: string;
  title: string;
  tagline: string;
  description: string;
  testimonial?: string;
  features: string[];
  imageUrl: string;
  isComingSoon: boolean;
  route: string;
}

interface PageContent {
  hero: {
    headline: string;
    subtext: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  sections: BusinessVertical[];
}

interface SiteConfig {
  name: string;
  description: string;
  colors: {
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}
```

### Content Management

#### Phase 1: Static Content (Current Implementation)
- **Static Content**: Stored in TypeScript constants for type safety and rapid development
- **Images**: Unsplash URLs with consistent filtering parameters
- **Benefits**: Fast development, no database complexity, easy deployment

#### Phase 2: CMS Integration (Future Enhancement)
- **Headless CMS**: Sanity, Strapi, or Contentful integration
- **Migration Path**: Component structure designed for easy CMS adoption
- **Timeline**: Post-launch enhancement to enable content editing

## Error Handling

### Client-Side Error Boundaries
- **Page Level**: Error boundaries for each route
- **Component Level**: Fallback UI for failed components
- **Image Loading**: Graceful fallbacks for failed image loads
- **Animation Errors**: Fallback to CSS transitions if GSAP fails

### Performance Optimization
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Animation Performance**: RequestAnimationFrame optimization
- **Bundle Analysis**: Regular monitoring of bundle size

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and descriptions
- **Motion Preferences**: Respect prefers-reduced-motion

## Testing Strategy

### Unit Testing
- **Components**: React Testing Library for component behavior
- **Utilities**: Jest for utility function testing
- **Animation Logic**: Mock GSAP for animation trigger testing

### Integration Testing
- **Page Rendering**: Full page render testing
- **Navigation Flow**: Route navigation and scroll behavior
- **Form Functionality**: Contact form submission testing

### Visual Testing
- **Responsive Design**: Cross-device layout testing
- **Animation Smoothness**: Performance profiling
- **Cross-Browser**: Chrome, Firefox, Safari compatibility

### Performance Testing
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **Lighthouse Scores**: Regular performance auditing
- **Bundle Size**: Monitoring and optimization

## Design System

### Color Palette
```css
:root {
  --background: #ffffff;
  --foreground: #111111;
  --accent: #D2691E; /* burnt orange */
  --accent-alt: #0F4C3A; /* deep green option */
  --muted: #f3f3f3;
  --border: #e5e5e5;
}
```

### Typography Scale
- **Heading 1**: DM Serif Display, 3.5rem (mobile: 2.5rem)
- **Heading 2**: DM Serif Display, 2.5rem (mobile: 2rem)
- **Heading 3**: DM Serif Display, 2rem (mobile: 1.5rem)
- **Body Large**: DM Sans, 1.125rem
- **Body**: DM Sans, 1rem
- **Small**: DM Sans, 0.875rem

### Spacing System
- **Container**: max-width 1200px with responsive padding
- **Section Gaps**: 6rem (mobile: 4rem)
- **Component Spacing**: 2rem, 1.5rem, 1rem, 0.5rem
- **Grid Gaps**: 2rem (mobile: 1rem)

### Component Variants
- **Buttons**: Primary (accent), Secondary (outline), Ghost
- **Cards**: Default, Hover, Coming Soon states
- **Sections**: Full-width, Contained, Split layouts