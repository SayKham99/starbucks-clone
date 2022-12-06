/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			boxShadow: {
				sm: '0px -1px 3px rgba(0, 0, 0, 0.1), 0px -2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.07)',
				md: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.07);'
			}
		},
		screens: {
			sm: '320px',
			md: '768px',
			lg: '1080px',
			xl: '1200px'
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif']
		},
		plugins: []
	}
}
