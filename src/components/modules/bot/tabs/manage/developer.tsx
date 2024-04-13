import ErrorMessage from "@/components/common/error-message";
import type { BotObject } from "@/lib/types/apollo";
import React from "react";

// biome-ignore lint/correctness/noEmptyPattern: todo
export default function ManageDeveloperBotTab({}: Pick<
	BotObject,
	"id" | "name"
>) {
	return (
		<React.Fragment>
			<ErrorMessage message="Work in progress, again." isCentered />
		</React.Fragment>
	);
}
