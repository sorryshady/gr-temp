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
};