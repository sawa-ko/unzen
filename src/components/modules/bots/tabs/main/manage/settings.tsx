import LineTitle from "@/components/shared/feedback/line-title";
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { Button, buttonIcon } from "@/components/ui/button";
import { box } from "@/components/ui/styles/box";
import {
	type SingleBotQuery,
	useSyncBotInformationMutation,
} from "@/lib/graphql/apollo";
import { handleError } from "@/lib/utils/format";
import { css, cx } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { TabPanel } from "@headlessui/react";
import {
	ArrowPathIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
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
			<Flex flexDir="column" gap={2}>
				<Alert>
					<AlertIcon>
						<InformationCircleIcon />
					</AlertIcon>
					<AlertContent>
						<AlertTitle>Not here what you looking for?</AlertTitle>
						<AlertDescription>
							Currently we don't give the ability to edit bots or manage
							webhooks since that part is this WIP
						</AlertDescription>
					</AlertContent>
				</Alert>
				<Box className={box}>
					<LineTitle>Settings</LineTitle>
					<Button
						mt={3}
						disabled={syncing}
						color={"gray"}
						onClick={() => syncBotInformation({ variables: { input: { id } } })}
					>
						<ArrowPathIcon
							className={cx(
								buttonIcon("left"),
								css({ animation: syncing ? "spin" : "none" }),
							)}
						/>
						Sync bot information
					</Button>
				</Box>
			</Flex>
		</TabPanel>
	);
}
