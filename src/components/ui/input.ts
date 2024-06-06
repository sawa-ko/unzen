import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const input = cva({
	base: {
		transitionDuration: "normal",
		outline: "none",
		px: 3,
		py: 2,
		borderRadius: "lg",
		bg: {
			base: "gray.900",
			_hover: "gray.800",
		},
		borderWidth: 1,
		borderColor: {
			base: "gray.800",
			_hover: "gray.700",
		},
		_placeholder: {
			color: "gray.400",
		},
	},
});

export type InputVariants = RecipeVariantProps<typeof input>;

export const Input = styled("input", input);
