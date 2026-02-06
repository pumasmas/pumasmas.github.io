/** @type {import('tailwindcss').Config} */
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
                'text-bright': '#ffffff'
			},
			fontFamily: {
				code: ['"Fira Code"', 'monospace'],
				body: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}