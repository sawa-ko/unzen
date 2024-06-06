import { defineConfig } from "@pandacss/dev";
import { getColors } from "theme-colors";

const primaryColors = getColors("#6e33ff");

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					brand: Object.entries(primaryColors).reduce(
						(acc: Record<string, { value: string }>, [key, value]) => {
							acc[key] = { value };
							return acc;
						},
						{},
					),
				},
			},
		},
	},

	// Global css
	globalCss: {
		extend: {
			body: {
				bg: "gray.950",
				color: "gray.50",
			},
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",
	jsxFramework: "react",
});
