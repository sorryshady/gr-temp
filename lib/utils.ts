import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  // Use dynamic import to avoid SSR issues
  if (typeof window !== 'undefined') {
    import('@/lib/gsap').then(({ smoothScrollToElement }) => {
      const element = document.getElementById(elementId);
      if (element) {
        smoothScrollToElement(element, offset);
      }
    });
  }
};

export const formatImageUrl = (unsplashId: string, width = 1200, height = 800, options?: {
  quality?: number;
  blur?: number;
  grayscale?: boolean;
  sepia?: boolean;
  brightness?: number;
  contrast?: number;
}) => {
  const params = new URLSearchParams({
    w: width.toString(),
    h: height.toString(),
    fit: 'crop',
    crop: 'center',
    auto: 'format',
    q: (options?.quality || 80).toString(),
  });

  // Apply image filters for consistent branding
  if (options?.blur) params.append('blur', options.blur.toString());
  if (options?.grayscale) params.append('sat', '-100');
  if (options?.sepia) params.append('sepia', '100');
  if (options?.brightness) params.append('bri', options.brightness.toString());
  if (options?.contrast) params.append('con', options.contrast.toString());

  return `https://images.unsplash.com/${unsplashId}?${params.toString()}`;
};

/**
 * Generate responsive image srcSet for different screen sizes
 */
export const generateResponsiveImageSrcSet = (unsplashId: string, baseWidth: number, baseHeight: number, options?: {
  quality?: number;
  grayscale?: boolean;
  sepia?: boolean;
  brightness?: number;
  contrast?: number;
}) => {
  const sizes = [
    { width: Math.round(baseWidth * 0.5), suffix: '480w' },
    { width: Math.round(baseWidth * 0.75), suffix: '768w' },
    { width: baseWidth, suffix: '1024w' },
    { width: Math.round(baseWidth * 1.25), suffix: '1280w' },
    { width: Math.round(baseWidth * 1.5), suffix: '1920w' },
  ];

  return sizes
    .map(({ width, suffix }) => {
      const height = Math.round((baseHeight / baseWidth) * width);
      return `${formatImageUrl(unsplashId, width, height, options)} ${suffix}`;
    })
    .join(', ');
};

/**
 * Generate responsive image sizes attribute
 */
export const generateResponsiveImageSizes = (breakpoints?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}) => {
  const defaultBreakpoints = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    ...breakpoints,
  };

  return `(max-width: 768px) ${defaultBreakpoints.mobile}, (max-width: 1024px) ${defaultBreakpoints.tablet}, ${defaultBreakpoints.desktop}`;
};

/**
 * Create optimized image props for Next.js Image component
 */
export const createOptimizedImageProps = (
  unsplashId: string,
  width: number,
  height: number,
  options?: {
    alt: string;
    priority?: boolean;
    quality?: number;
    grayscale?: boolean;
    sepia?: boolean;
    brightness?: number;
    contrast?: number;
    sizes?: {
      mobile?: string;
      tablet?: string;
      desktop?: string;
    };
  }
) => {
  return {
    src: formatImageUrl(unsplashId, width, height, {
      quality: options?.quality,
      grayscale: options?.grayscale,
      sepia: options?.sepia,
      brightness: options?.brightness,
      contrast: options?.contrast,
    }),
    alt: options?.alt || '',
    width,
    height,
    priority: options?.priority || false,
    quality: options?.quality || 80,
    sizes: generateResponsiveImageSizes(options?.sizes),
    className: 'object-cover transition-transform duration-300',
  };
};

/**
 * Formats a business vertical for display
 */
export const getVerticalById = (verticals: { id: string }[], id: string) => {
  return verticals.find(vertical => vertical.id === id);
};

/**
 * Checks if a route is currently active
 */
export const isActiveRoute = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

/**
 * Formats email for mailto links
 */
export const formatEmailLink = (email: string, subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  return `mailto:${email}${queryString ? `?${queryString}` : ''}`;
};

/**
 * Truncates text to specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Formats year for timeline display
 */
export const formatTimelineYear = (year: string, isComingSoon?: boolean) => {
  return isComingSoon ? `${year} (Coming Soon)` : year;
};