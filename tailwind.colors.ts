import { commonColors } from "@nextui-org/theme";
import { getColors } from "theme-colors";

export const defaultColors = {
    main: getColors("#6b34ff"),
    pine: getColors("#29905c")
}

export const baseColors = {
    background: "#070510",
    foreground: "#D4D4D4",
    content: {
        content1: "#18161e",
        content2: "#22202b",
        content3: "#2b2936",
        content4: "#343241",
    }
}

export const generateColors = (color: Record<number, string>) => {
	return {
		background: baseColors.background,
		secondary: {
			...color,
			foreground: commonColors.black,
			DEFAULT: color["500"],
		},
		default: {
			DEFAULT: baseColors.content.content1,
			foreground: baseColors.foreground,
		},
		...baseColors.content,
	};
};