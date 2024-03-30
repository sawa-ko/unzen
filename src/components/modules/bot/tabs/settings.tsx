import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import {
	IconBallpenFilled,
	IconLoader2,
	IconRefresh,
	IconTrashFilled,
} from "@tabler/icons-react";

export default function SettingsBotTab() {
	return (
		<div className="flex flex-col">
			<Tabs variant="light" color="default" aria-label="Tabs">
				<Tab key="developer" title="Developer">
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
						<Button
							spinner={
								<div>
									<IconLoader2 className="w-5 h-5 animate-spin" />
								</div>
							}
							isLoading
							size="lg"
							color="success"
						>
							Test webhook
						</Button>
					</div>
				</Tab>
				<Tab key="danger" title="Danger zone">
					<Button
						color="danger"
						className="w-fit"
						startContent={<IconTrashFilled className="w-5 h-5" />}
					>
						Delete Probot
					</Button>
				</Tab>
			</Tabs>
		</div>
	);
}
