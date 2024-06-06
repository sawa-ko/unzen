import type { Variants } from "framer-motion";

export const menuAnimation: Variants = {
	initial: { scale: 0.97, x: 0, opacity: 0, transformOrigin: "top right" },
	enter: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.1 },
		transformOrigin: "top right",
	},
	exit: {
		scale: 0.99,
		opacity: 0,
		transition: { duration: 0.2 },
		transformOrigin: "top right",
	},
};
