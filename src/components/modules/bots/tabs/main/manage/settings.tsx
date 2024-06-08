import LineTitle from "@/components/shared/feedback/line-title";
import { Button, buttonIcon } from "@/components/ui/button";
import { box } from "@/components/ui/styles/box";
import {
	type SingleBotQuery,
	useSyncBotInformationMutation,
} from "@/lib/graphql/apollo";
import { handleError } from "@/lib/utils/format";
import { Box } from "@/styled-system/jsx";
import { TabPanel } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { toast } from "sonner";

export default function BotTabManageSettings({
	id,
}: Pick<SingleBotQuery["getBot"], "id">) {
	const [syncBotInformation, { loading: syncing }] =
		useSyncBotInformationMutation({
			onCompleted: () => toast.success("Bot information synced"),
			onError: handleError,
		});

	return (
		<TabPanel>
			<Box className={box}>
				<LineTitle>Settings</LineTitle>
				<Button
					mt={3}
					disabled={syncing}
					color={"gray"}
					onClick={() => syncBotInformation({ variables: { input: { id } } })}
				>
					<ArrowPathIcon className={buttonIcon("left")} />
					Sync bot information
				</Button>
			</Box>
		</TabPanel>
	);
}
