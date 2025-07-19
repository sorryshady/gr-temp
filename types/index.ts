/**
 * TypeScript type definitions for the GR Group website
 */

export interface BusinessVertical {
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

export interface PageContent {
  hero: {
    headline: string;
    subtext: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  sections: BusinessVertical[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email: string;
  social: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}