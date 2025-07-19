# Tech Stack & Development Guidelines

## Core Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 (no external config file)
- **Animation**: GSAP with ScrollTrigger for scroll-based and interaction animations
- **Fonts**: Google Fonts (DM Serif Display for headings, DM Sans for body text)
- **Images**: Next.js Image component with Unsplash integration

## Key Dependencies

- **clsx** + **tailwind-merge** - For conditional CSS class handling
- **gsap** - Animation library with package optimization enabled
- **React 19** + **React DOM 19** - Latest React version

## Development Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint
```

## Configuration Notes

- TypeScript path aliases configured with `@/*` pointing to root
- Next.js image optimization enabled for Unsplash domains
- GSAP package imports optimized in Next.js config
- ESLint configured with Next.js recommended rules

## Animation Guidelines

- Use GSAP utilities from `lib/gsap.ts`
- Default easing: `power2.out`
- Default duration: `0.8s`
- Prefer `fadeInUp` and `staggerFadeInUp` for consistent reveals
- Use ScrollTrigger for scroll-based animations with 80% start threshold

## Performance Considerations

- Images should use Next.js Image component
- Animations should be lightweight and purposeful
- Use `formatImageUrl` utility for consistent Unsplash image sizing
- Leverage Next.js 15 optimizations and React 19 features