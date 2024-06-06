import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const badge = cva({
	base: {
		fontWeight: "400",
		borderRadius: "full",
		display: "inline-flex",
		alignItems: "center",
		gap: 2,
	},
	variants: {
		color: {
			primary: {
				color: "ButtonText",
				bg: "brand.500",
			},
			gray: {
				color: "gray.50",
				bg: "gray.800",
				borderWidth: 1,
				borderColor: "gray.700",
			},
		},
		size: {
			lg: {
				fontSize: "lg",
				px: 5,
				py: 2,
			},
			md: {
				fontSize: "md",
				px: 3,
				py: 1,
			},
			sm: {
				fontSize: "sm",
				px: 3,
				py: 1,
			},
		},
	},
	defaultVariants: {
		size: "sm",
		color: "primary",
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;

export const Badge = styled("span", badge);
