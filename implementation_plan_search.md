# Implementation Plan: Wiki Instant Search

This plan outlines the steps to build and integrate the React-based search component into the Astro Wiki index.

## Phase 1: Dependencies & Setup

- [ ] **Install Fuse.js:** Run `npm install fuse.js` for fuzzy search logic.
- [ ] **Install clsx/tailwind-merge:** Run `npm install clsx tailwind-merge` (optional but good for dynamic classes) or stick to standard template literals if simple. _Decision: Stick to template literals for simplicity unless complex._

## Phase 2: React Search Component

- [ ] **Create Component:** `src/components/React/WikiSearch.jsx`.
- [ ] **Props Interface:** Define props to accept an array of `WikiEntry` objects (slug, data: { title, description, difficulty, topic }).
- [ ] **Search Logic:**
  - [ ] Initialize `Fuse` instance with keys: `['data.title', 'data.description', 'data.topic']`.
  - [ ] Create `query` state and `results` state.
  - [ ] `useEffect` or `onChange` handler to update results.
- [ ] **UI Implementation:**
  - [ ] **Input:** Styled input field with search icon.
  - [ ] **Results Dropdown:** Absolute positioned container appearing when `query.length > 0`.
  - [ ] **Result Item:** Link to `/wiki/[slug]` displaying title and difficulty badge.

## Phase 3: Integration

- [ ] **Update Wiki Index:** Edit `src/pages/wiki/index.astro`.
- [ ] **Pass Data:** fetching `getCollection('wiki')` and passing the array to `<WikiSearch client:load entries={entries} />`.
- [ ] **Styling:** Ensure the search bar sits comfortably above the "Browse by Topic" section.

## Phase 4: Verification

- [ ] **Test Typos:** Search for "dikstra" and ensure "Dijkstra" appears.
- [ ] **Test Navigation:** Click a result and verify it navigates to the correct slug.
- [ ] **Mobile Test:** Ensure the dropdown works on small screens.
