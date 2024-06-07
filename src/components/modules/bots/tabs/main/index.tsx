"use client";

import { TabGroup, TabList, Tab, TabPanels } from "@headlessui/react";
import BotTabOverview from "./overview";
import { tab, tabGroup, tabList } from "@/components/ui/styles/tab";
import BotTabReviews from "./reviews";
import {
	ChatBubbleBottomCenterIcon,
	InformationCircleIcon,
} from "@heroicons/react/16/solid";
import type { SingleBotQuery } from "@/lib/graphql/apollo";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type BotTabsMainProps = Pick<SingleBotQuery["getBot"], "description" | "id">;

const tabs = ["overview", "reviews"];

export default function BotTabsMain({ description, id }: BotTabsMainProps) {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(
		useSearchParams().get("activeTab") ?? tabs[0],
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: just stfu pls
	useEffect(() => {
		router.replace(`/bot/${id}?activeTab=${activeTab}`);
	}, [activeTab]);

	return (
		<TabGroup
			selectedIndex={tabs.indexOf(activeTab)}
			onChange={(i) => setActiveTab(tabs[i])}
			className={tabGroup}
		>
			<TabList className={tabList}>
				<Tab className={tab}>
					<InformationCircleIcon />
					Overview
				</Tab>
				<Tab className={tab}>
					<ChatBubbleBottomCenterIcon />
					Reviews
				</Tab>
			</TabList>
			<TabPanels>
				<BotTabOverview description={description} />
				<BotTabReviews />
			</TabPanels>
		</TabGroup>
	);
}
