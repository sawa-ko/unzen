import { commonColors, nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const primaryColor = commonColors.cyan;
const contentColor = "#100f13"
const contentForegroundColor = "#D4D4D4"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    prefix: "dbots",
    defaultExtendTheme: "dark",
    defaultTheme: "dark",
    themes: {
      main: {
        layout: {
          radius: {
            small: "0.5rem",
            medium: "0.75rem",
            large: "0.75rem",
          }
        },
        colors: {
          background: "#05040a",
          secondary: {
            ...primaryColor,
            foreground: commonColors.black,
            DEFAULT: primaryColor["500"]
          },
          default: {
            DEFAULT: contentColor,
            foreground: contentForegroundColor
          },
          content1: contentColor,
          content2: contentColor,
          content3: contentColor,
          content4: contentColor
        }
      }
    }
  }),
  require("tailwind-gradient-mask-image")]
} satisfies Config

export default config;
