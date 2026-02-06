import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pumasmas.github.io',
  integrations: [tailwind(), react(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [
        rehypeKatex,
        [rehypePrettyCode, {
            theme: 'github-dark-dimmed',
            keepBackground: false, // We handle background in Tailwind
            onVisitLine(node) {
                // Prevent lines from collapsing in `display: grid` mode, and
                // allow empty lines to be copy/pasted
                if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: ' ' }];
                }
            },
        }]
    ]
  }
});