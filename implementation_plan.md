# Implementation Plan: Pu++ Web Portal (Astro v2)

This plan outlines the steps to migrate the current static site to an Astro-based architecture with Blog and Wiki capabilities, styled with Tailwind CSS and enhanced with React and LaTeX support.

## Phase 1: Environment Setup & Scaffolding
**Goal:** Initialize the Astro project structure and install necessary integrations.

- [ ] **Clean Slate:** Create a `_legacy` folder and move existing `index.html`, `styles.css`, and `README.md` into it to clear the root directory.
- [ ] **Initialize Astro:** Run `npm create astro@latest` (via shell commands to set up manually) to generate the basic project structure in the current directory.
- [ ] **Install Integrations:**
    - [ ] `npx astro add tailwind` - For styling.
    - [ ] `npx astro add react` - For interactive islands.
    - [ ] `npx astro add mdx` - For content rendering.
- [ ] **Install LaTeX Support:** Run `npm install remark-math rehype-katex` to enable math rendering in MDX.
- [ ] **Configure Astro:** Update `astro.config.mjs` to include the integrations and configure `markdown` settings (remark/rehype plugins).

## Phase 2: Design System & Core Layouts
**Goal:** Implement the "Dark Mode + UNAM Colors" theme using Tailwind and create reusable layouts.

- [ ] **Tailwind Configuration:** Update `tailwind.config.mjs` to define custom colors (`unam-gold`, `unam-blue`, `bg-dark`) and fonts (`Fira Code`, `Inter`).
- [ ] **Global Styles:** Create `src/styles/global.css` for base resets and font imports (Google Fonts).
- [ ] **Base Layout:** Create `src/layouts/Layout.astro` containing the HTML skeleton, `<head>` meta tags, and slot for content.
- [ ] **Navbar Component:** Create `src/components/Navbar.astro` with responsive links to Home, Blog, Wiki, and GitHub.
- [ ] **Footer Component:** Create `src/components/Footer.astro` with copyright and links.

## Phase 3: Content Engine (Blog & Wiki)
**Goal:** Set up Astro Content Collections to handle MDX content with LaTeX validation.

- [ ] **Define Schemas:** Create `src/content/config.ts`.
    - [ ] Define `blog` collection (title, date, description, tags).
    - [ ] Define `wiki` collection (title, topic, difficulty).
- [ ] **Create Templates:**
    - [ ] `src/layouts/BlogPost.astro`: Layout for rendering individual blog articles.
    - [ ] `src/layouts/WikiEntry.astro`: Layout for wiki pages with a sidebar or breadcrumbs.
- [ ] **Dynamic Routing:**
    - [ ] Create `src/pages/blog/[...slug].astro` to generate blog post pages.
    - [ ] Create `src/pages/wiki/[...slug].astro` to generate wiki pages.
- [ ] **Seed Content:**
    - [ ] Write one sample Blog post (`hello-world.mdx`).
    - [ ] Write one sample Wiki entry (`intro-to-dp.mdx`) containing LaTeX formulas to verify KaTeX integration.

## Phase 4: Page Implementation
**Goal:** Recreate the specific pages using the new components and content.

- [ ] **Landing Page:** Rebuild `src/pages/index.astro`.
    - [ ] Implement the "Hero" section with the typing effect (can use a simple React component or vanilla JS script).
    - [ ] Create the "Feature Cards" section using Tailwind grid.
- [ ] **Blog Index:** Create `src/pages/blog/index.astro` to list recent posts.
- [ ] **Wiki Index:** Create `src/pages/wiki/index.astro` to categorize knowledge base entries.

## Phase 5: Verification & Build
**Goal:** Ensure the site builds correctly and meets all requirements.

- [ ] **Lint & Type Check:** Run checks to ensure code quality.
- [ ] **Build:** Execute `npm run build` to generate the static assets.
- [ ] **Preview:** Verify the build output locally to ensure LaTeX renders and navigation works.
