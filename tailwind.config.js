/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		colors: {
			blue: '#2563eb',
			blueDark: '#1e40af',
			sundial: '#91b7bc',
			white: '#ffffff',
			grey: '#7F7F7F',
			grey2: '#f3f4f6',
			lightGrey: '#d4d4d4',
			neutral: '#f4f4f5',
			grey3: '#4b5563',
			black: '#000000',
			green: '#15803d',
		},
		extend: {
			backgroundImage: {
				'weed-pattern': "url('./images/weed.jpg')",
			},
		},
	},
	plugins: [],
};
