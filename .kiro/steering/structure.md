# Project Structure & Organization

## Directory Layout

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── animations/        # Animation-specific components
│   ├── layout/           # Layout components (header, footer, nav)
│   ├── sections/         # Page section components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility libraries
│   ├── gsap.ts           # GSAP animation utilities
│   ├── utils.ts          # General utility functions
│   └── constants.ts      # App constants
├── types/                # TypeScript type definitions
│   └── index.ts          # Shared types and interfaces
├── public/               # Static assets
└── .kiro/                # Kiro configuration and specs
```

## Component Organization

- **Layout Components**: Header, footer, navigation in `components/layout/`
- **Section Components**: Hero, business verticals, contact sections in `components/sections/`
- **UI Components**: Buttons, cards, forms in `components/ui/`
- **Animation Components**: GSAP-powered components in `components/animations/`

## File Naming Conventions

- Use PascalCase for component files: `HeroSection.tsx`
- Use camelCase for utility files: `gsap.ts`, `utils.ts`
- Use kebab-case for page routes following Next.js conventions
- Keep component and file names descriptive and consistent

## Import Patterns

- Use `@/` path alias for imports from project root
- Group imports: external libraries first, then internal modules
- Use named exports for utilities, default exports for components
- Import types separately when needed for better tree-shaking

## Type Definitions

- All shared types in `types/index.ts`
- Component-specific types can be defined inline or in separate `.types.ts` files
- Use interfaces for object shapes, types for unions and primitives
- Export all types that might be reused across components

## Asset Management

- Static assets in `public/` directory
- Use Unsplash integration for placeholder images
- Leverage Next.js Image component for all images
- Use `formatImageUrl` utility for consistent image sizing