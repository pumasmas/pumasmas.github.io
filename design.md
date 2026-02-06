# Design Document: Pu++ Web Portal (v2.1)

## 1. Project Overview
The **Pu++ Web Portal** serves as the central hub for the Competitive Programming Club at the Faculty of Sciences, UNAM. This document outlines the design for version 2.1, focusing on mobile responsiveness, enhanced navigation, and better content discoverability.

## 2. Technology Stack

### Core Framework
*   **Astro:** Chosen for its "Island Architecture," delivering zero JavaScript to the client by default while allowing rich interactivity where needed.
*   **Integrations:** `@astrojs/sitemap` (New) for SEO.

### Styling
*   **Tailwind CSS:** Utility-first framework.
*   **Theme:** Dark Mode default (GitHub Dark Dimmed aesthetic) with UNAM Gold and Blue accents.
*   **Animations:** CSS-based animations for UI elements (cursor, transitions) instead of JS-heavy implementations where possible.

### Content & Rendering
*   **MDX:** For rich content in Blog and Wiki.
*   **KaTeX:** Client-side LaTeX rendering.
*   **Content Collections:** Type-safe schemas for `blog` and `wiki`.

### Interactivity
*   **React:** Used for complex stateful components (Search, Interactive Visualizations).
*   **Vanilla JS:** For lightweight UI interactions (Mobile Menu toggling) to avoid heavy framework overhead for simple tasks.

## 3. UI/UX Improvements

### Navigation
*   **Mobile First:** A responsive navbar with a functional hamburger menu for mobile devices.
*   **Sidebar Navigation (Wiki):** A dynamic, auto-generated sidebar for the Wiki section that groups entries by topic, allowing seamless browsing without returning to the index.
*   **Breadcrumbs:** Clear path indication (e.g., `Wiki > Dynamic Programming > Intro`) on deep pages.

### Visual Polish
*   **Typewriter Effect:** Refactored to use CSS animations for the cursor to prevent layout shifts and improve accessibility.
*   **Consistent Theming:** Centralized configuration for difficulty colors (Codeforces style) and navigation links.

## 4. Content Architecture

### A. Blog (`src/content/blog`)
*   **Fields:** `title`, `date`, `author`, `tags`, `description`, `coverImage`.

### B. Wiki (`src/content/wiki`)
*   **Fields:** `title`, `difficulty` (Newbie -> Grandmaster), `topic`, `prerequisites`.
*   **Organization:** Entries are grouped by `topic` in the sidebar.

## 5. SEO & Meta Data
*   **Open Graph:** Comprehensive OG tags (Title, Description, Image, Type) for social sharing.
*   **Sitemap:** Automatic generation of `sitemap-index.xml` and `sitemap-0.xml`.
*   **Canonical URLs:** Ensure preventing duplicate content issues.

## 6. Directory Structure Updates

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── BaseHead.astro       # New: Centralized <head> meta tags
│   │   ├── Breadcrumbs.astro    # New: Breadcrumb navigation
│   │   ├── Navbar.astro         # Updated: Mobile menu logic
│   │   ├── WikiSidebar.astro    # New: Dynamic sidebar
│   │   └── React/
│   │       └── Typewriter.jsx   # Updated: CSS-based cursor
│   ├── consts.ts                # New: Centralized constants (Nav links, difficulty colors)
│   ├── content/
│   ├── layouts/
│   └── pages/
```