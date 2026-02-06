/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
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
            color: theme('colors.text-main'),
            hr: {
              borderColor: theme('colors.gray.800'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            'h1, h2, h3, h4': {
              color: theme('colors.text-bright'),
              scrollMarginTop: '6rem',
            },
            a: {
              color: theme('colors.unam-blue'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: theme('colors.blue.400'),
              },
            },
            strong: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.unam-gold'),
              fontFamily: theme('fontFamily.code'),
              backgroundColor: 'rgba(213, 159, 15, 0.1)', // unam-gold with opacity
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
              backgroundColor: theme('colors.card-bg'),
              border: `1px solid ${theme('colors.gray.800')}`,
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
              borderLeftColor: theme('colors.unam-gold'),
              color: theme('colors.gray.400'),
              fontStyle: 'italic',
            },
            'ul > li::marker': {
              color: theme('colors.unam-gold'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
