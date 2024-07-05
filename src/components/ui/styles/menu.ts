import { css } from "@/styled-system/css";

export const menuItems = css({
	display: "flex",
	flexDirection: "column",
	bg: "background.800/50",
	backdropBlur: "lg",
	backdropFilter: "auto",
	borderWidth: 1,
	borderColor: "background.600",
	rounded: "lg",
	p: 0.5,
	minWidth: "200px",
	mt: 1,
	shadow: "xl",
	zIndex: 100,
	transformOrigin: "top right",
});

export const menuItem = css({
	display: "flex",
	alignItems: "center",
	px: 3,
	py: 2,
	rounded: "lg",
	fontSize: "sm",
	color: "background.300",
	cursor: "pointer",
	_hover: {
		bg: "background.700/50",
		color: "white",
	},
	_disabled: {
		opacity: 0.5,
		cursor: "not-allowed",
	},

	"&[data-focus]": {
		bg: "background.700/50",
		color: "white",
	},

	"& svg": {
		w: 4,
		h: 4,
		mr: 2,
	},
});
