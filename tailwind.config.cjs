/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Gilroy-Bold': ['Gilroy-Bold', 'sans-serif'],
				'Gilroy-Heavy': ['Gilroy-Heavy', 'sans-serif'],
				'Gilroy-Light': ['Gilroy-Light', 'sans-serif'],
				'Gilroy-Medium': ['Gilroy-Medium', 'sans-serif'],
				'Gilroy-Regular': ['Gilroy-Regular', 'sans-serif']
			}
		},
	},
	plugins: [],
}
