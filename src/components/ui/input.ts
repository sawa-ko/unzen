"use client";

import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import {
	Input as HeadlessInput,
	Textarea as HeadlessTextarea,
} from "@headlessui/react";

export const input = cva({
	base: {
		outline: "none",
		px: 3,
		py: 2,
		rounded: "lg",
		bg: {
			base: "background.900",
			_hover: "background.800",
			_focus: "background.800",
		},
		borderWidth: 1,
		borderColor: {
			base: "background.800",
			_hover: "background.700",
		},
		_placeholder: {
			color: "background.400",
			fontSize: "sm",
		},
	},
	variants: {
		isError: {
			true: {
				borderColor: "bad",
				color: "bad",
				bg: "bad/5",
			},
		},
	},
});

export type InputVariants = RecipeVariantProps<typeof input>;

export const Input = styled(HeadlessInput, input);
export const Textarea = styled(HeadlessTextarea, input);
