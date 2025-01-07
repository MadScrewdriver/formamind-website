/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				outfit: ['Outfit', 'Montserrat', 'sans-serif'],
				onest: ['Onest', 'sans-serif'],
			},
			colors: {
				black: '#242424',
				bg: 'rgb(255,250,245)',
				primary: '#FFB96A',
				secondary: '#0020FF',
				white: '#FEFEFE',
			},
			fontSize: {
				xs: '1.5rem',
				sm: '2.5rem',
				base: '4rem',
				medium: '6.4rem',
				lg: '10rem',
				xl: '12rem',
			},
			backgroundImage: {
				blueBtnBg: 'url(/assets/icons/btnbg.svg)',
				orangeBtnBg: 'url(/assets/icons/btnbg_orange.svg)',
				logoOutline: 'url(/assets/icons/logoOutlineSmall.svg)',
			},
		},
		screens: {
			'2xs': '1px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1600px',
		},
	},
	plugins: [require('tailwindcss-primeui')],
};
