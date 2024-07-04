import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import NextLink from "next/link";
import { text } from "./text";

export const link = cva({
	base: {
		...text,
		color: {
			base: "brand.600",
			_hover: "brand.500",
		},
		textDecoration: "underline",
	},
});

export type LinkVariants = RecipeVariantProps<typeof link>;

export const Link = styled(NextLink, link);
