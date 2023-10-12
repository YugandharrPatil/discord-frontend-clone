/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"header-background": "url('/assets/center_bg_landing_header.svg')",
				"header-left-background": "url('/assets/left_bg_landing_header.svg')",
				"header-right-background": "url('/assets/right_bg_landing_header.svg')",
				"tiny-stars-background": "url('/assets/tiny_stars_landing.svg')",
			},
			colors: {
				"discordBlue": "#6e84ff",
				"grayBg": "#f3f3f3",
			}
		},
	},
	plugins: [],
};
