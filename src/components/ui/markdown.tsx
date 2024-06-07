import type React from "react";
import MarkdownParser, { type MarkdownToJSX } from "markdown-to-jsx";
import { heading } from "./heading";
import { text } from "./text";

const markdownOptions: MarkdownToJSX.Options = {
	wrapper: "article",
	forceWrapper: true,
	overrides: {
		h1: {
			props: {
				className: heading({ size: "2xl" }),
			},
		},
		p: {
			props: {
				className: text({ size: "md" }),
			},
		},
	},
};

export default function Markdown({ children }: { children: string }) {
	return <MarkdownParser options={markdownOptions}>{children}</MarkdownParser>;
}
