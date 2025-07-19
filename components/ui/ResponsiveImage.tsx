"use client";

import Image from "next/image";
import { formatImageUrl, generateResponsiveImageSizes } from "@/lib/utils";

interface ResponsiveImageProps {
  unsplashId: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  quality?: number;
  className?: string;
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

export default function ResponsiveImage({
  unsplashId,
  width,
  height,
  alt,
  priority = false,
  quality = 80,
  className = "",
  grayscale = false,
  sepia = false,
  brightness,
  contrast,
  sizes,
}: ResponsiveImageProps) {
  const imageUrl = formatImageUrl(unsplashId, width, height, {
    quality,
    grayscale,
    sepia,
    brightness,
    contrast,
  });

  const responsiveSizes = generateResponsiveImageSizes(sizes);

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      sizes={responsiveSizes}
      className={`object-cover transition-transform duration-300 ${className}`}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}