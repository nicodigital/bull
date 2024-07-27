/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'e-blue': '#3536FD',
				'deep-blue': '#000033',
				'deep-blue-300': '#666685',
				'deep-blue-200': '#9999AD',
				'deep-blue-100': '#CCCCD6',
				'red': '#FF5454',
			},
			fontFamily: {
				sans: ['Outfit Variable', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				serif: ['FreightBig Pro'],
			},
			fontSize: {
				'h1': 'var(--h1)',
				'h2': 'var(--h2)',
				'h3': 'var(--h3)',
				'h4': 'var(--h4)',
				'h5': 'var(--h5)',
				'h6': 'var(--h6)',
				'body': 'var(--body)',
				'small': 'var(--small)',
				'tiny': 'var(--tiny)'
			},
			spacing: {
				'0': '0',
				'.5': '.5rem',
				'1': '1rem',
				'1.5': '1.5rem',
				'2': '2rem',
				'2.5': '2.5rem',
				'3': '3rem',
				'3.5': '3.5rem',
				'4': '4rem',
				'4.5': '4.5rem',
				'5': '5rem',
				'5.5': '5.5rem',
				'6': '6rem',
				'6.5': '6.5rem',
				'7': '7rem',
				'7.5': '7.5rem',
				'8': '8rem',
				'8.5': '8.5rem',
				'9': '9rem',
				'9.5': '9.5rem',
				'10': '10rem',
				'10.5': '10.5rem',
				'11': '11rem',
				'11.5': '11.5rem',
				'12': '12rem',
				'12.5': '12.5rem',
				'13': '13rem',
				'13.5': '13.5rem',
				'14': '14rem',
				'14.5': '14.5rem',
				'15': '15rem',
				'15.5': '15.5rem',
				'16': '16rem',
				'16.5': '16.5rem',
				'17': '17rem',
				'17.5': '17.5rem',
				'18': '18rem',
				'18.5': '18.5rem',
				'19': '19rem',
				'19.5': '19.5rem',
				'20': '20rem',
				// Porcentajes
				'10%': '10%',
				'15%': '15%',
				'20%': '20%',
				'25%': '25%',
				'30%': '30%',
				'33%': '33%',
				'35%': '35%',
				'40%': '40%',
				'45%': '45%',
				'50%': '50%',
				'55%': '55%',
				'60%': '60%',
				'65%': '65%',
				'66%': '66%',
				'70%': '70%',
				'75%': '75%',
				'80%': '80%',
				'85%': '85%',
				'90%': '90%',
				'95%': '95%',
				'100%': '100%',
			},
			borderRadius: {
				'none': '0',
				'sm': '.125rem',
				DEFAULT: '.25rem',
				'lg': '.8rem',
				'full': '9999px',
			},
		},
		screens: {
			'xs': '375px',
			'sm': '640px',
			'md': '768px',
			'xg': '992px',
			'xl': '1064px',
			'2xl': '1280px',
			'3xl': '1420px',
			'4xl': '1536px',
			'5xl': '1920px',
			'6xl': '2560px',
		},
		container: {
			screens: {
				DEFAULT: '100%',
			}
		},
		gridColumn: { // Grid Column System
			'1-2': '1 / 2',
			'1-3': '1 / 3',
			'1-4': '1 / 4',
			'1-5': '1 / 5',
			'1-6': '1 / 6',
			'1-7': '1 / 7',
			'1-8': '1 / 8',
			'1-9': '1 / 9',
			'1-10': '1 / 10',
			'1-11': '1 / 11',
			'1-12': '1 / 12',
			'1-13': '1 / 13',

			'2-3': '2 / 3',
			'2-4': '2 / 4',
			'2-5': '2 / 5',
			'2-6': '2 / 6',
			'2-7': '2 / 7',
			'2-8': '2 / 8',
			'2-9': '2 / 9',
			'2-10': '2 / 10',
			'2-11': '2 / 11',
			'2-12': '2 / 12',
			'2-13': '2 / 13',

			'3-4': '3 / 4',
			'3-5': '3 / 5',
			'3-6': '3 / 6',
			'3-7': '3 / 7',
			'3-8': '3 / 8',
			'3-9': '3 / 9',
			'3-10': '3 / 10',
			'3-11': '3 / 11',
			'3-12': '3 / 12',
			'3-13': '3 / 13',

			'4-5': '4 / 5',
			'4-6': '4 / 6',
			'4-7': '4 / 7',
			'4-8': '4 / 8',
			'4-9': '4 / 9',
			'4-10': '4 / 10',
			'4-11': '4 / 11',
			'4-12': '4 / 12',
			'4-13': '4 / 13',

			'5-6': '5 / 6',
			'5-7': '5 / 7',
			'5-8': '5 / 8',
			'5-9': '5 / 9',
			'5-10': '5 / 10',
			'5-11': '5 / 11',
			'5-12': '5 / 12',
			'5-13': '5 / 13',

			'6-7': '6 / 7',
			'6-8': '6 / 8',
			'6-9': '6 / 9',
			'6-10': '6 / 10',
			'6-11': '6 / 11',
			'6-12': '6 / 12',
			'6-13': '6 / 13',

			'7-8': '7 / 8',
			'7-9': '7 / 9',
			'7-10': '7 / 10',
			'7-11': '7 / 11',
			'7-12': '7 / 12',
			'7-13': '7 / 13',

			'8-9': '8 / 9',
			'8-10': '8 / 10',
			'8-11': '8 / 11',
			'8-12': '8 / 12',
			'8-13': '8 / 13',

			'9-10': '9 / 10',
			'9-11': '9 / 11',
			'9-12': '9 / 12',
			'9-13': '9 / 13',

			'10-11': '10 / 11',
			'10-12': '10 / 12',
			'10-13': '10 / 13',

			'11-12': '11 / 12',
			'11-13': '11 / 13',

			'12-13': '12 / 13',

		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.container': {
					'padding-left': 'var(--container-gap)',
					'padding-right': 'var(--container-gap)',
				},
				'.row > *': {
					gridColumn: '1 / 13',
				}
			})
		},
		function ({ addUtilities }) {
			const newUtilities = {
				'.ctr-p': {
					padding: 'var(--container-gap) var(--container-gap)',
				},
				'.ctr-px': {
					paddingLeft: 'var(--container-gap)',
					paddingRight: 'var(--container-gap)',
				},
				'.ctr-py': {
					paddingTop: 'var(--container-gap)',
					paddingBottom: 'var(--container-gap)',
				},
				'.ctr-pl': {
					paddingLeft: 'var(--container-gap)',
				},
				'.ctr-pr': {
					paddingRight: 'var(--container-gap)',
				},
				'.ctr-pt': {
					paddingTop: 'var(--container-gap)',
				},
				'.ctr-pb': {
					paddingBottom: 'var(--container-gap)',
				},
				'.ctr-m': {
					margin: 'var(--container-gap) var(--container-gap)',
				},
				'.ctr-mx': {
					marginLeft: 'var(--container-gap)',
					marginRight: 'var(--container-gap)',
				},
				'.ctr-my': {
					marginTop: 'var(--container-gap)',
					marginBottom: 'var(--container-gap)',
				},
				'.ctr-ml': {
					marginLeft: 'var(--container-gap)',
				},
				'.ctr-mr': {
					marginRight: 'var(--container-gap)',
				},
				'.ctr-mt': {
					marginTop: 'var(--container-gap)',
				},
				'.ctr-mb': {
					marginBottom: 'var(--container-gap)',
				},
			}

			addUtilities(newUtilities, ['responsive'])

		}
	],
}
