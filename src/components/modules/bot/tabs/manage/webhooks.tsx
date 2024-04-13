import type { BotObject } from "@/lib/types/apollo";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";
import { IconRefresh } from "@tabler/icons-react";

export default function ManageWebhooksBotTab({
	name,
}: Pick<BotObject, "id" | "name">) {
	return (
		<div className="flex flex-col gap-3">
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Reset API Key</CardHeader>
				<CardBody>
					<p>
						API Key can only be viewed <strong>once</strong>, so you have to
						reset it everytime you want to see it.
					</p>
				</CardBody>
				<CardFooter>
					<Button
						variant="faded"
						className="w-fit"
						startContent={<IconRefresh className="w-5 h-5" />}
					>
						Reset API Key
					</Button>
				</CardFooter>
			</Card>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Webhook</CardHeader>
				<CardBody>
					<p>
						Webhooks are used *commonly* to log/notify whenever someone votes
						for {name}
					</p>
				</CardBody>
				<CardFooter>
					I can't put a {"<Input />"} field here because of Next.js errors, but
					act like there is an input here :D
				</CardFooter>
			</Card>
		</div>
	);
}
