import { css } from "@/styled-system/css";

export const menuItems = css({
	display: "flex",
	flexDirection: "column",
	bg: "background.800",
	borderWidth: 1,
	borderColor: "background.700",
	borderRadius: "lg",
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
	borderRadius: "lg",
	fontSize: "sm",
	color: "background.300",
	cursor: "pointer",
	_hover: {
		bg: "background.700",
		color: "white",
	},

	"& svg": {
		w: 4,
		h: 4,
		mr: 2,
	},
});
