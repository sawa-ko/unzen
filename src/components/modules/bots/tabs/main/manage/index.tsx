import { tab, tabGroup, tabList } from "@/components/ui/styles/tab";
import type { SingleBotQuery } from "@/lib/graphql/apollo";
import { css, cx } from "@/styled-system/css";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
	Cog6ToothIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import BotTabManageDanger from "./danger";
import BotTabManageSettings from "./settings";

export default function BotTabManage({
	id,
}: Pick<SingleBotQuery["getBot"], "id">) {
	return (
		<TabPanel>
			<TabGroup
				vertical
				className={cx(tabGroup, css({ display: "flex", gap: 2 }))}
			>
				<TabList
					className={cx(
						tabList,
						css({ display: "flex", flexDir: "column", w: "fit" }),
					)}
				>
					<Tab className={tab}>
						<Cog6ToothIcon />
						Settings
					</Tab>
					<Tab className={tab}>
						<ExclamationTriangleIcon />
						Danger
					</Tab>
				</TabList>
				<TabPanels className={css({ w: "full" })}>
					<BotTabManageSettings id={id} />
					<BotTabManageDanger id={id} />
				</TabPanels>
			</TabGroup>
		</TabPanel>
	);
}
