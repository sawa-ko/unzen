import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { Text } from "./text";

export const errorText = cva({
	base: {
		color: "bad",
	},
});

export type ErrorTextVariants = RecipeVariantProps<typeof errorText>;

export const ErrorText = styled(Text, errorText);
