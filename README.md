# Pu++ Web Portal

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Welcome to the official repository for the **Pu++ (PumasMas)** website, the Competitive Programming Club at the Faculty of Sciences, UNAM.

This platform serves as the central hub for our community, hosting training resources, club news, and a comprehensive algorithmic wiki.

## Features

- **Modern Stack:** Built with [Astro](https://astro.build) for high performance and zero-JS default.
- **Knowledge Base:** A structured **Wiki** for algorithms and data structures, supporting **LaTeX** math rendering via KaTeX.
- **Blog Engine:** Markdown-based news and announcements system.
- **Interactive UI:** Dynamic components (timers, visualizations) powered by **React**.
- **Theming:** Dark mode design inspired by GitHub, with official UNAM color accents.

## Tech Stack

- **Framework:** Astro 5.0
- **Styling:** Tailwind CSS
- **Interactivity:** React
- **Content:** MDX (Markdown + JSX)
- **Math Rendering:** Remark Math + Rehype KaTeX

## Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/pumasmas/pumasmas.github.io.git
    cd pumasmas.github.io
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

### Building for Production

To create a static build of the site (output to `dist/`):

```bash
npm run build
```

## Project Structure

```text
/
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── content/         # MDX Content Collections
│   │   ├── blog/        # News posts
│   │   └── wiki/        # Algorithm explanations (Wiki entries)
│   ├── layouts/         # Page wrappers (BlogPost, WikiEntry)
│   ├── pages/           # File-based routing
│   └── styles/          # Global styles
├── public/              # Static assets (images, logos)
└── astro.config.mjs     # Project configuration
```

## Contributing

We welcome contributions from members and the open-source community! Whether you want to fix a typo, add a new algorithm explanation, or improve the code.

### 📚 Creating Content (Wiki & Blog)

If you want to write a new article or tutorial, please read our **[Content Creation Guide](CONTRIBUTING_CONTENT.md)**.

It covers:

- Folder structure
- Frontmatter schemas (Metadata)
- How to add Prerequisites and Practice Problems
- Using LaTeX for math formulas

### 🛠️ Development

1.  **Fork** the repository.
2.  **Clone** your fork.
3.  Create a **branch** for your feature/fix.
4.  Make your changes.
5.  Run `npm run format` and `npm run lint` to ensure code quality.
6.  Submit a **Pull Request**.

### Reporting Issues

Found a bug or have a feature request? Please open an Issue.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made by the Pu++ Team at Faculty of Sciences, UNAM.
