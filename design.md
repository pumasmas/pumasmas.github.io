# Design Document: Pu++ Web Portal (v2)

## 1. Project Overview
The **Pu++ Web Portal** serves as the central hub for the Competitive Programming Club at the Faculty of Sciences, UNAM. It transforms the previous static brochure into a content-rich platform featuring club news, contest updates, and a comprehensive algorithmic knowledge base.

## 2. Technology Stack

### Core Framework
*   **Astro:** Chosen for its "Island Architecture," delivering zero JavaScript to the client by default while allowing rich interactivity where needed. It excels at content-heavy static sites.

### Styling
*   **Tailwind CSS:** Utility-first framework for rapid UI development.
*   **Theme:** Dark Mode default (GitHub Dark Dimmed aesthetic) with UNAM Gold and Blue accents.

### Content & Rendering
*   **MDX (Markdown + JSX):** Allows writing content in Markdown while embedding interactive components (graphs, visualizations) directly into articles.
*   **KaTeX:** Fast, client-side LaTeX rendering for mathematical formulas in problem editorials and algorithm explanations.
*   **Content Collections:** Astro's type-safe API to manage the `blog` and `wiki` schemas.

### Interactivity
*   **React:** Used for dynamic components ("Islands") such as:
    *   Search functionality (filtering algorithms/posts).
    *   Interactive countdowns for contests.
    *   Complex data visualizations (e.g., graph algorithm demos).

## 3. Content Architecture

The site will utilize Astro's **Content Collections** to enforce strict schemas for data integrity.

### A. Blog / News (`src/content/blog`)
Designed for time-sensitive updates.
*   **Fields:** `title`, `date`, `author`, `tags` (e.g., "Contest", "Announcement"), `description`, `coverImage`.
*   **Route:** `/blog/[slug]`

### B. Wiki / Knowledge Base (`src/content/wiki`)
A structured hierarchy of educational resources.
*   **Fields:** `title`, `difficulty` (Newbie -> Grandmaster), `topic` (e.g., "DP", "Graphs"), `prerequisites` (list of other wiki slugs), `lastUpdated`.
*   **Route:** `/wiki/[topic]/[slug]` or `/wiki/[slug]`

## 4. UI/UX Design System

### Color Palette
*   **Background:** `#0d1117` (Dark Dimmed) / `#161b22` (Cards)
*   **Primary Text:** `#c9d1d9`
*   **UNAM Blue:** `#3b82f6` (Highlighting links, primary buttons)
*   **UNAM Gold:** `#D59F0F` (Accents, warnings, "Solution" headers)
*   **Code Blocks:** Syntax highlighting matching the dark theme.

### Typography
*   **Body:** Inter or system-sans.
*   **Headings/Code:** Fira Code or JetBrains Mono (essential for algorithm snippets).

## 5. Proposed Directory Structure

```text
/
├── public/              # Static assets (images, logos)
├── src/
│   ├── components/      # UI Components
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── React/       # Interactive React Islands
│   ├── content/         # MDX Files
│   │   ├── blog/
│   │   ├── wiki/
│   │   └── config.ts    # Schema definitions
│   ├── layouts/         # Page wrappers (BlogPost, WikiEntry)
│   ├── pages/           # Route definitions
│   │   ├── index.astro
│   │   ├── blog/[...slug].astro
│   │   └── wiki/[...slug].astro
│   └── styles/          # Tailwind directives
├── astro.config.mjs     # Configuration (React, Tailwind, MDX integrations)
├── tailwind.config.mjs  # Theme customization
└── package.json
```

## 6. Implementation Phases

1.  **Scaffolding:** Initialize Astro, install Tailwind, React, and MDX integrations.
2.  **Layout & Design:** Port the existing "Hero" design to Tailwind components; build the Header/Footer.
3.  **Content Engine:** Configure Content Collections for Blog and Wiki; set up KaTeX.
4.  **Migration:** Move existing text to the new structure.
5.  **Interactivity:** Implement the React-based components.
