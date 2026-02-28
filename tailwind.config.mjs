/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        bg: {
          base: 'hsl(var(--color-bg-base) / <alpha-value>)',
          surface: 'hsl(var(--color-bg-surface) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'hsl(var(--color-border) / <alpha-value>)',
          hover: 'hsl(var(--color-border-hover) / <alpha-value>)',
        },
        text: {
          base: 'hsl(var(--color-text-base) / <alpha-value>)',
          muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
          bright: 'hsl(var(--color-text-bright) / <alpha-value>)',
        },
        // Legacy colors mapped for backwards compatibility during refactor
        'unam-gold': '#D59F0F',
        'unam-blue': '#3b82f6',
        'bg-dark': '#0d1117',
        'card-bg': '#161b22',
        'text-main': '#c9d1d9',
        'text-bright': '#ffffff',
      },
      fontFamily: {
        code: ['"Fira Code"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.text.base'),
            hr: {
              borderColor: theme('colors.border.DEFAULT'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            'h1, h2, h3, h4': {
              color: theme('colors.text.bright'),
              scrollMarginTop: '6rem',
            },
            a: {
              color: theme('colors.primary'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: theme('colors.primary'),
                opacity: 0.8,
              },
            },
            strong: {
              color: theme('colors.text.bright'),
            },
            code: {
              color: theme('colors.accent'),
              fontFamily: theme('fontFamily.code'),
              backgroundColor: 'hsla(var(--color-accent) / 0.1)', // accent with opacity
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.bg.surface'),
              border: `1px solid ${theme('colors.border.DEFAULT')}`,
              borderRadius: '0.5rem',
              padding: '1rem',
              code: {
                backgroundColor: 'transparent',
                color: 'inherit',
                padding: '0',
                fontFamily: theme('fontFamily.code'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
              color: theme('colors.text.muted'),
              fontStyle: 'italic',
            },
            'ul > li::marker': {
              color: theme('colors.accent'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
