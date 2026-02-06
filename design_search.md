# Design Document: Wiki Instant Search

## 1. Overview
The **Wiki Instant Search** feature aims to provide users with a fast, client-side search capability to instantly locate algorithms and data structures within the Pu++ knowledge base. This transforms the Wiki from a browsing-first experience to a search-first tool, essential for quick reference.

## 2. User Experience (UX)
*   **Location:** Prominently displayed at the top of the `/wiki` index page.
*   **Interaction:**
    *   User types in a search box.
    *   Results appear instantly (as they type) in a dropdown or grid overlay.
    *   Keyboard navigation (Arrow keys + Enter) allows selecting results without a mouse.
*   **Empty State:** If no query is entered, the default "Browse by Topic" view remains visible.
*   **No Results:** Friendly message if the query yields no matches.

## 3. Technical Architecture
*   **Component:** `src/components/React/WikiSearch.jsx` (React Island).
*   **Data Source:** The component will receive a lightweight index of all wiki entries (Title, Description, Slug, Tags) as a prop from the Astro parent page at build time. This avoids hitting an API and ensures zero latency.
*   **Search Engine:** `fuse.js` (lightweight fuzzy search library) will be used to handle typos and partial matches (e.g., "dijsktra" -> "Dijkstra").
*   **Styling:** Tailwind CSS, matching the existing "Dark Dimmed" theme (using `bg-card-bg`, `border-gray-800`).

## 4. UI Design Details
*   **Input Field:** Large, focused search bar with a magnifying glass icon.
*   **Result Card:**
    *   **Title:** Highlighted matches.
    *   **Difficulty:** Colored badge (Green/Blue/Red) matching the difficulty.
    *   **Topic:** Small subtitle.
*   **Accessibility:** ARIA attributes for the combobox pattern.
