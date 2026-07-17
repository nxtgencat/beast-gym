# Beast Gym

A fitness landing page for a gym brand built with React, TypeScript, Vite, and Tailwind CSS.

## Project Structure

```
src/
  components/    // reusable UI sections (Header, Hero, Footer, etc.)
  pages/         // page components (HomePage, CoachPage)
  hooks/         // custom hooks (useActivePage)
  utils/         // helper functions (BMI calculation)
  data/          // static data (facilities, schedule, pricing, etc.)
  types/         // TypeScript type definitions
```

- `components/` — Section-level components that compose the pages.
- `pages/` — Top-level page views that assemble sections.
- `hooks/` — Shared React hooks for stateful logic.
- `utils/` — Pure utility functions with no side effects.
- `data/` — Static arrays and objects that drive repeated UI.
- `types/` — Shared TypeScript interfaces and types.

## What It Does

- Two-page SPA navigation (Home and Coach detail) without a router.
- Hero banner with play video button and carousel indicator.
- About Us section with text and decorative image.
- Facilities grid with hover-zoom image cards.
- BMI calculator with live input and result display.
- Weekly class schedule with date range and day cards.
- Testimonial review section with navigation controls.
- Three-tier pricing plans (Basic, Premium, Advanced).
- Coach gallery with grayscale-to-color hover effect.
- Blog post cards with date badges.
- Gallery strip with contact form.
- Coach profile page with bio, certifications, skill bars, and Instagram feed.
- Mobile hamburger menu with full navigation.
- Fixed header with page-aware active link highlighting.

## Run

```bash
pnpm install
pnpm dev
```
