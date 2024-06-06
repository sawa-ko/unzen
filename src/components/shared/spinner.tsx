import { css, cx } from "@/styled-system/css";
import type { SVGProps } from "react";

export default function Spinner(props: SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: stfuffffff
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={cx(
				css({ animation: "spin 1s linear infinite" }),
				props.className,
			)}
			{...props}
		>
			<path d="M0 0h24v24H0z" stroke="none" />
			<path d="M12 3a9 9 0 109 9" />
		</svg>
	);
}
