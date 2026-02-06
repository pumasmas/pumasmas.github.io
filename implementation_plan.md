# Implementation Plan: Pu++ Web Portal v2.1 Improvements

This plan details the steps to implement the identified improvements for the Pu++ website, prioritizing functional fixes and user experience.

## Phase 1: Core Navigation Fixes
**Goal:** Ensure the site is navigable on all devices.

- [ ] **Mobile Navbar Logic:**
    - [ ] Update `src/components/Navbar.astro` to include a mobile menu overlay (hidden by default).
    - [ ] Add a client-side `<script>` to toggle the menu visibility when the hamburger button is clicked.
    - [ ] Ensure the menu closes when a link is clicked or the user clicks outside.
- [ ] **Centralize Configuration:**
    - [ ] Create `src/consts.ts` to export `NAV_LINKS`, `SITE_TITLE`, `SITE_DESCRIPTION`, and `DIFFICULTY_COLORS`.
    - [ ] Refactor `Navbar.astro` and `Footer.astro` to consume `NAV_LINKS` from `src/consts.ts`.

## Phase 2: Wiki Experience Enhancement
**Goal:** Improve navigation within the Knowledge Base.

- [ ] **Dynamic Sidebar:**
    - [ ] Create `src/components/WikiSidebar.astro`.
    - [ ] Implement logic to fetch all wiki entries via `getCollection('wiki')`.
    - [ ] Group entries by `topic` and render them as a nested list.
    - [ ] Highlight the active page in the sidebar.
    - [ ] Integrate this component into `src/layouts/WikiEntry.astro`, replacing the placeholder.
- [ ] **Breadcrumbs:**
    - [ ] Create `src/components/Breadcrumbs.astro`.
    - [ ] Logic to parse the current URL path and generate breadcrumb links (Home > Wiki > Topic > Title).
    - [ ] Add this component to the top of `WikiEntry.astro` and `BlogPost.astro`.

## Phase 3: SEO & Meta Data
**Goal:** Improve social sharing and search engine visibility.

- [ ] **BaseHead Component:**
    - [ ] Create `src/components/BaseHead.astro` to encapsulate common `<head>` tags.
    - [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
    - [ ] Add Twitter Card tags.
    - [ ] Replace the `<head>` content in `src/layouts/Layout.astro` with this new component.
- [ ] **Sitemap:**
    - [ ] Install `@astrojs/sitemap`: `npx astro add sitemap`.
    - [ ] Update `astro.config.mjs` to include the site URL (required for sitemap generation).

## Phase 4: UI/UX Refinement
**Goal:** Polish visual elements and code quality.

- [ ] **Refactor Typewriter:**
    - [ ] Update `src/components/React/Typewriter.jsx`.
    - [ ] Remove the manual text-based cursor state.
    - [ ] Add a CSS class (e.g., `.cursor-blink`) that uses `::after` content and animation.
- [ ] **Type Safety:**
    - [ ] Update `src/layouts/WikiEntry.astro` to import `DIFFICULTY_COLORS` from `src/consts.ts`.
    - [ ] Ensure proper typing for the difficulty keys.

## Phase 5: Verification
**Goal:** Confirm all improvements work as expected.

- [ ] **Mobile Test:** Verify the navbar opens/closes on small screens.
- [ ] **Sidebar Test:** Verify the wiki sidebar lists all topics and highlights the current page.
- [ ] **SEO Test:** Use a tool (or browser inspector) to verify OG tags are present.
- [ ] **Build Test:** Run `npm run build` to ensure no type errors or build failures.