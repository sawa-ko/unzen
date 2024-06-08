import { type Variants, spring } from "framer-motion";

export const menuAnimation: Variants = {
	initial: {
		scale: 0.8,
		x: 0,
		opacity: 0,
		transformOrigin: "top right",
		transition: spring,
	},
	enter: {
		scale: 1,
		opacity: 1,
		transition: spring,
		transformOrigin: "top right",
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition: { duration: 0.1 },
		transformOrigin: "top right",
	},
};

export const popUpAnimation: Variants = {
	initial: {
		scale: 0.8,
		x: 0,
		opacity: 0,
		transition: spring,
	},
	enter: {
		scale: 1,
		opacity: 1,
		transition: spring,
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition: { duration: 0.1 },
	},
};

export const fadeIn: Variants = {
	initial: { opacity: 0 },
	enter: {
		opacity: 1,
		transition: { duration: 0.2 },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.2 },
	},
};
