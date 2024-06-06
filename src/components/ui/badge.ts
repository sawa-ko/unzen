import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const badge = cva({
	base: {
		alignItems: "center",
		borderRadius: "full",
		display: "inline-flex",
		fontWeight: "medium",
		userSelect: "none",
		whiteSpace: "nowrap",
	},
	defaultVariants: {
		variant: "subtle",
		size: "sm",
	},
	variants: {
		variant: {
			solid: {
				background: "white",
				color: "gray.950",
			},
			subtle: {
				background: "gray.800",
				borderColor: "gray.700",
				borderWidth: "1px",
				color: "white",
				"& svg": {
					color: "gray.300",
				},
			},
			outline: {
				borderWidth: "2px",
				borderColor: "gray.800",
			},
		},
		size: {
			sm: {
				textStyle: "xs",
				px: "2",
				h: "5",
				gap: "1",
				"& svg": {
					width: "3",
					height: "3",
				},
			},
			md: {
				textStyle: "xs",
				px: "2.5",
				h: "6",
				gap: "1.5",
				"& svg": {
					width: "4",
					height: "4",
				},
			},
			lg: {
				textStyle: "sm",
				px: "3",
				h: "7",
				gap: "1.5",
				"& svg": {
					width: "4",
					height: "4",
				},
			},
		},
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;

export const Badge = styled("span", badge);
