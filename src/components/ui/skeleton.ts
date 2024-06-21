import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const skeleton = cva({
	base: {
		bg: "background.800",
		animation: "pulse 1.5s infinite",
		rounded: "lg",
	},
});

export type SkeletonVariants = RecipeVariantProps<typeof skeleton>;

export const Skeleton = styled("div", skeleton);
