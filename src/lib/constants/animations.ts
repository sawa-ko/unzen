export const menuAnimation = {
	initial: { y: -5, x: 0, opacity: 0 },
	enter: { y: 0, opacity: 1, transition: { duration: 0.1 } },
	exit: {
		y: -10,
		opacity: 0,
		transition: { duration: 0.2 },
	},
};
