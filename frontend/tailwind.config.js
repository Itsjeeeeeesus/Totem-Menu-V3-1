/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#bb1c21',
				primary_dark: '#8a0f13',
				dark: '#2d2d2d'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				adam: ['ADAM']
			}
		}
	},
	plugins: []
};
