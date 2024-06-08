import { css } from "@/styled-system/css";

export const tabGroup = css({
	w: "full",
});

export const tabList = css({
	display: "flex",
	gap: 2,
});

export const tab = css({
	transitionDuration: "fast",
	px: 4,
	py: 1,
	display: "inline-flex",
	alignItems: "center",
	borderRadius: "full",
	bg: "background.900",
	color: "background.300",
	outline: "none",

	"& svg": {
		w: 4,
		h: 4,
		mr: 2,
	},

	"&[data-selected]": {
		bg: "background.700",
	},

	"&[data-hover]": {
		bg: "background.700",
	},
});
