import { css } from "@/styled-system/css";

export const menuItems = css({
	display: "flex",
	flexDirection: "column",
	bg: "gray.800",
	borderWidth: 1,
	borderColor: "gray.700",
	borderRadius: "lg",
	p: 1.5,
	minWidth: "200px",
	mt: 1,
	shadow: "md",
});

export const menuItem = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	px: 3,
	py: 2,
	borderRadius: "lg",
	fontSize: "sm",
	color: "gray.300",
	cursor: "pointer",
	_hover: {
		bg: "gray.700",
		color: "white",
	},
});
