import { commonColors, nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const contentColors = {
	contentColor1: "#18161e",
	contentColor2: "#22202b",
	contentColor3: "#2b2936",
	contentColor4: "#343241",
};
const contentForegroundColor = "#D4D4D4";
const backgroundColor = "#070510";

const generateColors = (mainColor: typeof commonColors.cyan) => {
	return {
		background: backgroundColor,
		secondary: {
			...mainColor,
			foreground: commonColors.black,
			DEFAULT: mainColor["500"],
		},
		default: {
			DEFAULT: contentColors.contentColor1,
			foreground: contentForegroundColor,
		},
		...contentColors,
	};
};

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	plugins: [
		nextui({
			addCommonColors: true,
			prefix: "dbots",
			defaultExtendTheme: "dark",
			defaultTheme: "dark",
			layout: {
				radius: {
					small: "0.5rem",
					medium: "0.75rem",
					large: "1rem",
				},
			},
			themes: {
				// todo: find a better way to do this shit
				cyan: {
					colors: generateColors(commonColors.cyan),
				},
				pink: {
					colors: generateColors(commonColors.pink),
				},
				green: {
					colors: generateColors(commonColors.green),
				},
				rose: {
					colors: generateColors(commonColors.red),
				},
				purple: {
					colors: generateColors(commonColors.purple),
				},
			},
		}),
		require("tailwind-gradient-mask-image"),
	],
} satisfies Config;

export default config;
