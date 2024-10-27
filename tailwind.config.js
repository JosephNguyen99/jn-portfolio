/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],	// Use "media" if you want it to adapt based on user preferences.
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",	// Add any other directories where you use Tailwind classes.
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
	extend: {
		colors: {
			primary: "#1c1c22",
			accent: {
				DEFAULT: "#00ff99",
				hover: "#00e187",
			}
		},
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},

	},
  	// extend: {
  	// 	colors: {
  	// 		background: 'var(--background)',
  	// 		foreground: 'var(--foreground)'
  	// 	},
  	// 	borderRadius: {
  	// 		lg: 'var(--radius)',
  	// 		md: 'calc(var(--radius) - 2px)',
  	// 		sm: 'calc(var(--radius) - 4px)'
  	// 	}
  	// }
  },
  plugins: [require("tailwindcss-animate")],
};
