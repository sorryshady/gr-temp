import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const formatImageUrl = (unsplashId: string, width = 1200, height = 800) => {
  return `https://images.unsplash.com/${unsplashId}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=80`;
};/**

 * Formats a business vertical for display
 */
export const getVerticalById = (verticals: any[], id: string) => {
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