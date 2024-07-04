import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const alert = cva({
	base: {
		display: "flex",
		alignItems: "center",
		rounded: "xl",
		p: "4",
		fontSize: "sm",
		fontWeight: "medium",
		lineHeight: "1.2",
		bg: "background.900",
		borderWidth: 1,
		borderColor: "background.700",
		shadow: "xl",
	},
});

export const alertContent = cva({
	base: {
		display: "flex",
		flexDir: "column",
		alignItems: "start",
		gap: 1,
	},
});

export const alertTitle = cva({
	base: {
		fontSize: "md",
		fontWeight: "semibold",
	},
});

export const alertDescription = cva({
	base: {
		fontSize: "sm",
		fontWeight: "light",
	},
});

export const alertIcon = cva({
	base: {
		mr: "3",
		flexShrink: 0,
		w: 6,
		h: 6,
	},
});

export type Alertvariants = RecipeVariantProps<typeof alert>;
export type AlertTitleVariants = RecipeVariantProps<typeof alertTitle>;
export type AlertContentVariants = RecipeVariantProps<typeof alertContent>;
export type AlertDescriptionVariants = RecipeVariantProps<
	typeof alertDescription
>;
export type AlertIconVariants = RecipeVariantProps<typeof alertIcon>;

export const Alert = styled("div", alert);
export const AlertContent = styled("div", alertContent);
export const AlertDescription = styled("p", alertDescription);
export const AlertTitle = styled("h1", alertTitle);
export const AlertIcon = styled("svg", alertIcon);
