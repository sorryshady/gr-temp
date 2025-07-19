/**
 * Site constants and content for the GR Group website
 */

import type { SiteConfig, BusinessVertical, NavigationItem, PageContent, TimelineItem } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  name: "GR Group",
  description: "A multidisciplinary conglomerate specializing in premium exports, signature events, lifestyle ventures, and strategic collaborations.",
  url: "https://grgroup.com",
  email: "hello@grgroup.com",
  social: {
    linkedin: "https://linkedin.com/company/grgroup",
    instagram: "https://instagram.com/grgroup",
    twitter: "https://twitter.com/grgroup",
  },
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Exports", href: "/exports" },
  { name: "Events", href: "/events" },
  { name: "Ventures", href: "/ventures" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Contact", href: "/contact" },
];

export const HERO_CONTENT = {
  headline: "Redefining Lifestyle. Driving Global Change.",
  subtext: "A multidisciplinary conglomerate building bridges between premium products, unforgettable experiences, and innovative ventures.",
  ctaText: "Discover What We Do",
  ctaLink: "#what-we-do",
  backgroundImage: "photo-1557804506-669a67965ba0", // Unsplash ID
} as const;

export const BUSINESS_VERTICALS = [
  {
    id: "global-exports",
    title: "Global Exports",
    tagline: "Premium Products. Trusted Sourcing. Seamless Delivery.",
    description: "We connect global markets with premium products through trusted sourcing networks and seamless logistics solutions.",
    testimonial: "We deliver what we promise — excellence in every shipment.",
    features: ["Premium Product Sourcing", "Global Logistics Network", "Quality Assurance", "Trusted Partnerships"],
    imageUrl: "photo-1586528116311-ad8dd3c8310d", // Unsplash ID - shipping/logistics
    isComingSoon: false,
    route: "/exports",
  },
  {
    id: "signature-events",
    title: "Signature Events",
    tagline: "Experiences That Define Excellence.",
    description: "From luxury automobile showcases to brand launches, we create unforgettable experiences that build brands and move markets.",
    testimonial: "Our events make headlines, build brands, and move markets.",
    features: ["Luxury Automobile Showcases", "Product Launches", "Experiential Marketing", "Corporate Gatherings"],
    imageUrl: "photo-1492684223066-81342ee5ff30", // Unsplash ID - luxury event
    isComingSoon: false,
    route: "/events",
  },
  {
    id: "lifestyle-ventures",
    title: "Lifestyle Ventures",
    tagline: "Fashion-Forward. Sustainable. Conscious.",
    description: "Building the next generation of lifestyle brands that merge sustainability with craftsmanship for conscious consumers.",
    features: ["Sustainable Fashion", "Artisan Collaborations", "Conscious Consumerism", "Creative Partnerships"],
    imageUrl: "photo-1441986300917-64674bd600d8", // Unsplash ID - fashion/lifestyle
    isComingSoon: true,
    route: "/ventures",
  },
  {
    id: "collaborations",
    title: "Collaborations & Community",
    tagline: "Co-Creating the Future.",
    description: "Partnering with entrepreneurs, agencies, and artists to create innovative solutions and impact-first ventures.",
    features: ["Creative Hubs", "Limited-Edition Projects", "Impact-First Ventures", "Community Building"],
    imageUrl: "photo-1522202176988-66273c2fd55f", // Unsplash ID - collaboration/teamwork
    isComingSoon: true,
    route: "/collaborations",
  },
] as const;