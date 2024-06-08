import LineTitle from "@/components/shared/feedback/line-title";
import { Button, buttonIcon } from "@/components/ui/button";
import { box } from "@/components/ui/styles/box";
import type { SingleBotQuery } from "@/lib/graphql/apollo";
import { Box } from "@/styled-system/jsx";
import { TabPanel } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function BotTabManageDanger({
	id,
}: Pick<SingleBotQuery["getBot"], "id">) {
	return (
		<TabPanel>
			<Box className={box}>
				<LineTitle>Danger</LineTitle>
				<Button mt={3} color={"bad"}>
					<TrashIcon className={buttonIcon("left")} />
					Delete bot
				</Button>
			</Box>
		</TabPanel>
	);
}
