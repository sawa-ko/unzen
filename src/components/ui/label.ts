import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { Label as HeadlessLabel } from "@headlessui/react";

export const label = cva({
	base: {
		fontWeight: "400",
		lineHeight: "1.25",
		letterSpacing: "0",
		textDecoration: "None",
		textTransform: "None",
		color: "background.300",
		fontSize: "smaller",
	},
});

export type LabelVariants = RecipeVariantProps<typeof label>;

export const Label = styled(HeadlessLabel, label);
