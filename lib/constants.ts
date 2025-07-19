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

export const HERO_CONTENT: PageContent['hero'] = {
  headline: "Redefining Lifestyle. Driving Global Change.",
  subtext: "A multidisciplinary conglomerate building bridges between premium products, unforgettable experiences, and innovative ventures.",
  ctaText: "Discover What We Do",
  ctaLink: "#what-we-do",
  backgroundImage: "photo-1557804506-669a67965ba0", // Unsplash ID
};

export const BUSINESS_VERTICALS: BusinessVertical[] = [
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
];

// Timeline content for About page
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "foundation",
    year: "2020",
    title: "Foundation & Vision",
    description: "GR Group was founded with a vision to bridge premium products, unforgettable experiences, and innovative ventures across global markets.",
  },
  {
    id: "exports-launch",
    year: "2021",
    title: "Global Exports Division",
    description: "Launched our premium export operations, establishing trusted sourcing networks and seamless logistics solutions across multiple industries.",
  },
  {
    id: "events-expansion",
    year: "2022",
    title: "Signature Events Portfolio",
    description: "Expanded into luxury event management, creating headline-making experiences for automotive showcases, product launches, and corporate gatherings.",
  },
  {
    id: "current-growth",
    year: "2024",
    title: "Strategic Growth Phase",
    description: "Strengthening our core verticals while preparing for expansion into lifestyle ventures and creative collaborations.",
  },
  {
    id: "lifestyle-ventures",
    year: "2025",
    title: "Lifestyle Ventures Launch",
    description: "Launching our fashion-forward sustainable brands division, focusing on conscious consumerism and artisan collaborations.",
    isComingSoon: true,
  },
  {
    id: "collaboration-hub",
    year: "2025",
    title: "Collaboration & Community Hub",
    description: "Opening our creative collaboration space for entrepreneurs, agencies, and artists to co-create impact-first ventures.",
    isComingSoon: true,
  },
];

// Contact CTA content
export const CONTACT_CTA = {
  headline: "Let's Build Something Exceptional",
  description: "Ready to explore partnership opportunities or discuss your next project? We're here to turn ambitious ideas into reality.",
  ctaText: "Get In Touch",
  ctaLink: "/contact",
} as const;

// Complete page content structure
export const HOMEPAGE_CONTENT: PageContent = {
  hero: HERO_CONTENT,
  sections: BUSINESS_VERTICALS,
};

// Export content for specific business verticals
export const EXPORTS_CONTENT = {
  title: "Global Exports",
  subtitle: "Premium Products. Trusted Sourcing. Seamless Delivery.",
  description: "We connect global markets with premium products through our extensive network of trusted suppliers and seamless logistics solutions. Our commitment to excellence ensures that every shipment meets the highest standards of quality and reliability.",
  testimonial: "We deliver what we promise — excellence in every shipment.",
  features: [
    {
      title: "Premium Product Sourcing",
      description: "Access to high-quality products from verified suppliers worldwide"
    },
    {
      title: "Global Logistics Network",
      description: "Seamless delivery solutions across international markets"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes at every step"
    },
    {
      title: "Trusted Partnerships",
      description: "Long-term relationships built on reliability and excellence"
    }
  ],
  industries: [
    "Consumer Electronics",
    "Fashion & Textiles",
    "Home & Garden",
    "Automotive Parts",
    "Industrial Equipment",
    "Health & Beauty"
  ]
};

export const EVENTS_CONTENT = {
  title: "Signature Events",
  subtitle: "Experiences That Define Excellence.",
  description: "From luxury automobile showcases to high-profile brand launches, we create unforgettable experiences that capture attention, build brands, and drive market impact. Our events are meticulously crafted to deliver exceptional results.",
  testimonial: "Our events make headlines, build brands, and move markets.",
  eventTypes: [
    {
      title: "Luxury Automobile Showcases",
      description: "Exclusive automotive events that highlight premium vehicles and cutting-edge technology"
    },
    {
      title: "Product Launches",
      description: "Strategic launch events that generate buzz and drive market adoption"
    },
    {
      title: "Experiential Marketing",
      description: "Immersive brand experiences that create lasting connections with audiences"
    },
    {
      title: "Corporate Gatherings",
      description: "Professional events that strengthen business relationships and drive growth"
    }
  ],
  pastEvents: [
    "Luxury Car Exhibition 2023",
    "Tech Innovation Summit",
    "Fashion Week Showcase",
    "Corporate Leadership Forum"
  ]
};

export const COLLABORATIONS_CONTENT = {
  title: "Collaborations & Community",
  subtitle: "Co-Creating the Future.",
  description: "Partnering with entrepreneurs, agencies, and artists to create innovative solutions and impact-first ventures.",
  vision: "We believe the most transformative ideas emerge when diverse minds collaborate. Our upcoming collaboration hub will serve as a catalyst for creative partnerships, bringing together entrepreneurs, agencies, and artists to co-create ventures that drive positive change.",
  focusAreas: [
    {
      title: "Creative Hubs",
      description: "Physical and digital spaces where innovators, creators, and entrepreneurs can connect, collaborate, and bring ambitious ideas to life.",
      icon: "🏢"
    },
    {
      title: "Limited-Edition Projects",
      description: "Exclusive collaborations that merge different creative disciplines to produce unique, high-impact products and experiences.",
      icon: "✨"
    },
    {
      title: "Impact-First Ventures",
      description: "Business initiatives that prioritize social and environmental impact alongside commercial success, creating sustainable value for all stakeholders.",
      icon: "🌱"
    },
    {
      title: "Community Building",
      description: "Fostering networks of like-minded individuals who share our commitment to innovation, creativity, and positive change.",
      icon: "🤝"
    }
  ],
  collaborationTypes: [
    {
      category: "Entrepreneurs",
      description: "Supporting visionary founders with resources, mentorship, and strategic partnerships to scale their impact-driven ventures.",
      opportunities: [
        "Startup Incubation Programs",
        "Strategic Partnership Development",
        "Resource Sharing & Mentorship",
        "Market Access & Distribution"
      ]
    },
    {
      category: "Creative Agencies",
      description: "Partnering with agencies to develop innovative campaigns, experiences, and brand initiatives that push creative boundaries.",
      opportunities: [
        "Co-Creative Campaigns",
        "Experiential Marketing Projects",
        "Brand Innovation Labs",
        "Cross-Industry Collaborations"
      ]
    },
    {
      category: "Artists & Creators",
      description: "Collaborating with artists to create meaningful work that bridges commercial success with artistic expression and social impact.",
      opportunities: [
        "Artist Residency Programs",
        "Limited-Edition Art Collections",
        "Creative Workshops & Masterclasses",
        "Public Art & Installation Projects"
      ]
    }
  ],
  upcomingPrograms: [
    {
      title: "Innovation Lab Launch",
      description: "A state-of-the-art collaborative workspace equipped with cutting-edge tools and resources for creative experimentation.",
      timeline: "Q2 2025",
      status: "Planning Phase"
    },
    {
      title: "Creator Collective Program",
      description: "A curated community of artists, designers, and innovators working on impact-driven projects with shared resources and support.",
      timeline: "Q3 2025",
      status: "Applications Opening Soon"
    },
    {
      title: "Impact Venture Fund",
      description: "Investment and support program for early-stage ventures that demonstrate strong potential for positive social and environmental impact.",
      timeline: "Q4 2025",
      status: "Fund Development"
    }
  ]
};

export const VENTURES_CONTENT = {
  title: "Lifestyle Ventures",
  subtitle: "Fashion-Forward. Sustainable. Conscious.",
  description: "Building the next generation of lifestyle brands that merge sustainability with craftsmanship for conscious consumers.",
  vision: "We envision a future where fashion and lifestyle choices reflect our values — where every purchase supports artisan communities, sustainable practices, and conscious consumption. Our upcoming ventures will bridge the gap between luxury and responsibility.",
  pillars: [
    {
      title: "Sustainable Fashion",
      description: "Creating fashion-forward pieces using eco-friendly materials and ethical production methods that don't compromise on style or quality."
    },
    {
      title: "Artisan Collaborations",
      description: "Partnering with skilled craftspeople worldwide to preserve traditional techniques while creating contemporary designs."
    },
    {
      title: "Conscious Consumerism",
      description: "Educating and empowering consumers to make thoughtful choices that align with their values and lifestyle aspirations."
    },
    {
      title: "Creative Partnerships",
      description: "Collaborating with designers, artists, and creators who share our vision for a more sustainable and beautiful world."
    }
  ],
  upcomingInitiatives: [
    {
      title: "Sustainable Luxury Collection",
      description: "A curated line of premium fashion pieces crafted from innovative sustainable materials",
      timeline: "Q2 2025"
    },
    {
      title: "Artisan Marketplace",
      description: "Digital platform connecting conscious consumers with skilled craftspeople globally",
      timeline: "Q3 2025"
    },
    {
      title: "Creator Incubator Program",
      description: "Supporting emerging designers who prioritize sustainability and social impact",
      timeline: "Q4 2025"
    }
  ]
};