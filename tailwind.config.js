/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#EB5757E5",
				secondary: "#333333",
				tertiary: "#4F4F4F",
				quaternary: "#BDBDBD",
			},
			fontFamily: {
				monserrat: ["Montserrat", "sans-serif"],
				mulish: ["Mulish", "sans-serif"],
			},
		},
	},
	plugins: [],
};
