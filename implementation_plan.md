# Implementation Plan: Pu++ Web Portal v2.2 Improvements

This plan details the steps to implement the enhanced learning features and UI improvements for the Pu++ website.

## Phase 1: Content Schema & Data Structure
**Goal:** Extend the Wiki content model to support new educational features.

- [ ] **Update Content Config:**
    - [ ] Modify `src/content/config.ts` for the `wiki` collection.
    - [ ] Add `relatedProblems` schema (array of objects with name, url, platform).
- [ ] **Create Mock Content:**
    - [ ] Update `src/content/wiki/intro-dp.mdx` (or create a new entry) to include `prerequisites` and `relatedProblems` data for testing.

## Phase 2: Component Implementation
**Goal:** Build the visual blocks for the new features.

- [ ] **Prerequisites Component:**
    - [ ] Create `src/components/Prerequisites.astro`.
    - [ ] Logic: Accept an array of slugs, fetch the corresponding entries to get their titles, and render a list of links.
- [ ] **Related Problems Component:**
    - [ ] Create `src/components/RelatedProblems.astro`.
    - [ ] Logic: Render a styled card listing the external problem links with platform icons/labels.
- [ ] **Wiki Navigation Component:**
    - [ ] Create `src/components/WikiNav.astro`.
    - [ ] Logic: Accept `currentSlug` and `topic`. Find the current entry in the topic list and determine the Previous and Next entries.
- [ ] **Interactive Badges:**
    - [ ] Create `src/components/TagBadge.astro`.
    - [ ] Logic: Link to `/wiki?topic=...` or `/wiki?difficulty=...` (or just visual for now if filter pages don't exist, linking to search).

## Phase 3: Layout Integration
**Goal:** Assemble the components into the Wiki Article page.

- [ ] **Update `WikiEntry.astro`:**
    - [ ] Import and place `<Prerequisites />` below the title/description.
    - [ ] Import and place `<RelatedProblems />` at the bottom of the `<article>`.
    - [ ] Import and place `<WikiNav />` at the very end.
    - [ ] Replace static text badges with `<TagBadge />`.

## Phase 4: UI/UX Enhancements
**Goal:** Improve usability and interactivity.

- [ ] **Collapsible Sidebar:**
    - [ ] Modify `src/components/WikiSidebar.astro`.
    - [ ] Use HTML `<details>` and `<summary>` for topics to allow native collapsing.
    - [ ] Ensure the group containing the *current* page is open by default.
- [ ] **Copy Code Button:**
    - [ ] Create `src/scripts/copy-code.js`.
    - [ ] Logic: Find all `pre` blocks, append a "Copy" button. On click, copy text content to clipboard and show a "Copied!" feedback state.
    - [ ] Import this script in `WikiEntry.astro` (or globally in `Layout.astro` if desired).

## Phase 5: Verification
**Goal:** Ensure everything works seamlessly.

- [ ] **Data Check:** Verify that invalid slugs in `prerequisites` don't crash the build (handle gracefully).
- [ ] **Navigation Check:** Verify Next/Prev buttons correctly navigate through a topic's entries.
- [ ] **Interaction Check:** Test the "Copy" button on code blocks.
- [ ] **Visual Check:** Ensure the new sections (Problems, Prerequisites) look consistent with the site theme.
