import { type RecipeVariantProps, cva, css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const buttonIcon = (pos: "left" | "right") =>
	css({
		ml: pos === "right" ? 2 : 0,
		mr: pos === "left" ? 2 : 0,
	});

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		borderRadius: "lg",
		cursor: "pointer",
		transitionDuration: "slow",
		fontWeight: 600,
		w: "fit",
		_disabled: {
			opacity: 0.5,
			// cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
	},
	variants: {
		color: {
			brand: {
				bg: {
					base: "brand.500",
					_hover: "brand.600",
					_active: "brand.700",
				},
				color: "ButtonText",
			},
			gray: {
				bg: {
					base: "gray.900",
					_hover: "gray.800",
					_active: "gray.700",
				},
				color: "white",
			},
		},
		size: {
			sm: {
				h: 9,
				px: 4,
				py: 2,
			},
			md: {
				h: 10,
				px: 5,
				py: 2,
			},
			lg: {
				h: 11,
				px: 6,
				py: 4,
			},
		},
	},
	defaultVariants: {
		color: "brand",
		size: "md",
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const Button = styled("button", button);
