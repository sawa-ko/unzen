import type { HTMLMotionProps } from "framer-motion";

export const modalMotionProps: HTMLMotionProps<"section"> = {
	variants: {
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			y: 10,
			opacity: 0,
			transition: {
				duration: 0.1,
				ease: "easeIn",
			},
		},
	},
};

export const fromTopToBottomSmooth: HTMLMotionProps<"section"> = {
	variants: {
		initial: { y: -50, x: 0, opacity: 0 },
		enter: { y: 0, opacity: 1 },
	},
};
