# Design Document: Pu++ Web Portal (v2.2)

## 1. Project Overview

The **Pu++ Web Portal** serves as the central hub for the Competitive Programming Club at the Faculty of Sciences, UNAM. This document outlines the design for version 2.2, focusing on **Learning Experience Improvements**, **Navigation enhancements**, and **Interactive Utilities**.

## 2. Technology Stack

### Core Framework

- **Astro:** Chosen for its "Island Architecture," delivering zero JavaScript to the client by default while allowing rich interactivity where needed.
- **Integrations:** `@astrojs/sitemap` for SEO.

### Styling

- **Tailwind CSS:** Utility-first framework.
- **Theme:** Dark Mode default (GitHub Dark Dimmed aesthetic) with UNAM Gold and Blue accents.
- **Animations:** CSS-based animations for UI elements (cursor, transitions).

### Content & Rendering

- **MDX:** For rich content in Blog and Wiki.
- **KaTeX:** Client-side LaTeX rendering.
- **Content Collections:** Type-safe schemas for `blog` and `wiki`.

### Interactivity

- **React:** Used for complex stateful components (Search).
- **Vanilla JS:** For lightweight UI interactions (Mobile Menu, Code Copy, Sidebar toggles).

## 3. New Features (v2.2)

### A. Enhanced Learning Experience

- **Prerequisites Display:** Explicitly list required knowledge at the top of wiki articles with links to those specific entries.
- **Next/Previous Navigation:** Footer navigation within a Wiki topic to guide users through a curriculum-like flow.
- **Related Problems:** A dedicated section at the end of articles listing practice problems (Codeforces, LeetCode, etc.) to reinforce learning.

### B. UI/UX Refinements

- **Collapsible Sidebar:** The Wiki sidebar will group entries by topic. Topics will be collapsible, with the current topic expanded by default.
- **Interactive Badges:** Difficulty and Topic badges in headers will be clickable, filtering the Wiki index (or linking to a search query).
- **Code Block Utilities:** A "Copy" button will overlay on hover for all code blocks to facilitate easy testing of algorithms.

## 4. Content Architecture

### Wiki Collection (`src/content/wiki`)

Updated schema to support new features:

- **Fields:**
  - `title` (string)
  - `difficulty` (enum: Newbie -> Grandmaster)
  - `topic` (string)
  - `prerequisites` (array of slugs) - _Used for cross-linking._
  - `relatedProblems` (array of objects) - _New field._
    - `name` (string)
    - `url` (string)
    - `platform` (string) - e.g., "Codeforces", "LeetCode".

## 5. Component Updates

- **`WikiEntry.astro`**:
  - Inject `Prerequisites` component at the top.
  - Inject `RelatedProblems` component at the bottom.
  - Add `PrevNextNav` component at the bottom.
  - Include script for "Copy Code".
- **`WikiSidebar.astro`**:
  - Add `<details>`/`<summary>` or JS-based toggle for topics.
- **`TagLink.astro` (New)**:
  - Reusable component for clickable Difficulty/Topic badges.

## 6. Directory Structure Updates

```text
/
├── src/
│   ├── components/
│   │   ├── Prerequisites.astro  # New: Lists prerequisite links
│   │   ├── RelatedProblems.astro# New: Lists practice problems
│   │   ├── WikiNav.astro        # New: Next/Prev buttons
│   │   ├── TagBadge.astro       # New: Clickable badges
│   │   └── ...
│   ├── scripts/
│   │   └── copy-code.js         # New: Logic for copy buttons
│   └── ...
```
