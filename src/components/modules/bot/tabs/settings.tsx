import Loader from "@/components/common/loader";
import { type BotObject, useDeleteBotMutation } from "@/lib/types/apollo";
import { removeFromCache } from "@/lib/utils/cache";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import {
	IconBallpenFilled,
	IconRefresh,
	IconTrashFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SettingsBotTab({ id }: Pick<BotObject, "id">) {
	const router = useRouter();
	const [deleteBot, { loading: deletingBot }] = useDeleteBotMutation({
		variables: {
			input: {
				id,
			},
		},
		onCompleted: (data) => {
			toast.success(`Deleted ${data.deleteBot.name}, so sad 😢`);
			router.replace("/");
		},
		onError: (error) => toast.error(error.message),
		update: (cache) => removeFromCache(cache, { id, __typename: "BotObject" }),
	});
	return (
		<div className="flex flex-col">
			<Tabs variant="light" color="default" aria-label="Tabs">
				<Tab key="developer" title="Developer">
					<h1 className="text-xl font-bold">Developer actions</h1>
					<div className="flex flex-wrap gap-1">
						<Button
							className="w-fit"
							startContent={<IconBallpenFilled className="w-5 h-5" />}
						>
							Edit Probot
						</Button>
						<Button
							className="w-fit"
							startContent={<IconRefresh className="w-5 h-5" />}
						>
							Sync Probot
						</Button>
					</div>
				</Tab>
				<Tab key="webhooks" title="Webhooks">
					<div className="flex gap-2">
						<Input
							errorMessage="Invalid webhook (quick reminder: webhook url is NOT a Discord webhook)"
							autoFocus
							size="sm"
							radius="md"
							label="Webhook URL"
						/>
						<Button spinner={<Loader />} isLoading size="lg" color="success">
							Test webhook
						</Button>
					</div>
				</Tab>
				<Tab key="danger" title="Danger zone">
					<Button
						spinner={<Loader />}
						isLoading={deletingBot}
						color="danger"
						className="w-fit"
						startContent={<IconTrashFilled className="w-5 h-5" />}
						onClick={() => deleteBot()}
					>
						Delete Probot
					</Button>
				</Tab>
			</Tabs>
		</div>
	);
}
