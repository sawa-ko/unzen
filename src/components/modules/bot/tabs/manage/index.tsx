"use client";

import type { BotObject } from "@/lib/types/apollo";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import ManageDangerBotTab from "./danger";
import ManageDeveloperBotTab from "./developer";

export default function ManageBotTab({
	id,
	name,
}: Pick<BotObject, "id" | "name">) {
	return (
		<React.Fragment>
			<div className="flex flex-col">
				<Tabs
					variant="light"
					classNames={{ cursor: "bg-content2" }}
					aria-label="Tabs"
				>
					<Tab key="developer" title="Developer">
						<ManageDeveloperBotTab id={id} name={name} />
					</Tab>
					<Tab key="danger" title="Danger zone">
						<ManageDangerBotTab id={id} name={name} />
					</Tab>
				</Tabs>
			</div>
		</React.Fragment>
	);
}
