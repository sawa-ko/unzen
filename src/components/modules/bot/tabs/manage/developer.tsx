import ErrorMessage from "@/components/common/error-message";
import type { BotObject } from "@/lib/types/apollo";
import { Button } from "@nextui-org/react";
import { IconBallpenFilled, IconRefresh } from "@tabler/icons-react";
import React from "react";

export default function ManageDeveloperBotTab({
	id,
	name,
}: Pick<BotObject, "id" | "name">) {
	return (
		<React.Fragment>
			<ErrorMessage message="Work in progress, again." isCentered />
		</React.Fragment>
	);
}
