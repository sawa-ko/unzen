import { defineConfig } from "@pandacss/dev";
import { getColors } from "theme-colors";

const primaryColors = getColors("#1a9c66");
const backgroundColors = getColors("#212220"); // old: 3A3A3A

function generateColorTokens(colors: Record<string, string>) {
	return Object.entries(colors).reduce(
		(acc: Record<string, { value: string }>, [key, value]) => {
			acc[key] = { value };
			return acc;
		},
		{},
	);
}

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	clean: true,

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
					brand: generateColorTokens(primaryColors),
					background: generateColorTokens(backgroundColors),
					bad: {
						value: "#f31260",
					},
				},
			},
		},
	},

	// Global css
	globalCss: {
		extend: {
			body: {
				bg: "background.950",
				color: "background.50",
			},
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",
	jsxFramework: "react",
});
