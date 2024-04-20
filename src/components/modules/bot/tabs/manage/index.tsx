import type { BotObject } from "@/lib/types/apollo";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import ManageDangerBotTab from "./danger";
import ManageDeveloperBotTab from "./developer";
import ManageWebhooksBotTab from "./webhooks";

export default function ManageBotTab({
	id,
	name,
}: Pick<BotObject, "id" | "name">) {
	return (
		<React.Fragment>
			<div className="flex flex-col">
				<Tabs
					classNames={{
						panel: "w-full",
					}}
					isVertical
					variant="light"
					color="secondary"
					aria-label="Tabs"
				>
					<Tab key="developer" title="Developer">
						<ManageDeveloperBotTab id={id} />
					</Tab>
					<Tab key="webhooks" title="Webhooks">
						<ManageWebhooksBotTab id={id} name={name} />
					</Tab>
					<Tab key="danger" title="Danger zone">
						<ManageDangerBotTab id={id} name={name} />
					</Tab>
				</Tabs>
			</div>
		</React.Fragment>
	);
}
