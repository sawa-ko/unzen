import LoadingScreen from "@/components/common/layout/loading-screen";
import {
	type BotObject,
	WebhookEvent,
	WebhookPayloadField,
	useCreateWebhookMutation,
	useUpdateWebhookMutation,
	useWebhookQuery,
} from "@/lib/types/apollo";
import type { WebhookFormSchemaType } from "@/lib/types/zod/webhooks";
import { handleError } from "@/lib/utils/common";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";
import { IconRefresh } from "@tabler/icons-react";
import { toast } from "sonner";

// todo: finish this once webhooks are finished (api)

export default function ManageWebhooksBotTab({
	name,
	id,
}: Pick<BotObject, "id" | "name">) {
	const {
		data: webhook,
		loading: gettingWebhook,
		refetch: refetchWebhook,
	} = useWebhookQuery({
		variables: {
			input: {
				id,
			},
		},
		errorPolicy: "ignore",
	});

	const [updateWebhook, { loading: updating }] = useUpdateWebhookMutation({
		onCompleted: () => {
			toast.success("Updated webhook configuration ✨");
			refetchWebhook();
		},
		onError: handleError,
	});

	const [createWebhook, { loading: creating }] = useCreateWebhookMutation({
		onCompleted: () => {
			toast.success("Created webhook configuration ✨");
			refetchWebhook();
		},
		onError: handleError,
	});

	const onSubmit = (data: WebhookFormSchemaType) => {
		if (webhook)
			updateWebhook({
				variables: {
					input: {
						id,
						events: [WebhookEvent.AllEvents],
						payloadFields: [WebhookPayloadField.User],
						url: data.url!,
						secret: data.secret!,
					},
				},
			});
		else
			createWebhook({
				variables: {
					input: {
						id,
						events: [WebhookEvent.AllEvents],
						payloadFields: [WebhookPayloadField.User],
						url: data.url!,
						secret: data.secret!,
					},
				},
			});
	};

	if (gettingWebhook ?? updating ?? creating) return <LoadingScreen />;
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
					<p>form here.</p>
				</CardBody>
				<CardFooter>
					<div className="flex justify-end gap-2 w-full">
						<Button type="button" variant="faded">
							Test webhook
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
