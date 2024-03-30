import {
	CubeTransparentIcon,
	PencilIcon,
	TrashIcon,
} from "@heroicons/react/20/solid";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";

export default function SettingsBotTab() {
	return (
		<div className="flex flex-col">
			<Tabs variant="light" color="default" aria-label="Tabs">
				<Tab key="developer" title="Developer">
					<div className="flex flex-wrap gap-1">
						<Button
							className="w-fit"
							startContent={<PencilIcon className="w-5 h-5" />}
						>
							Edit Probot
						</Button>
						<Button
							className="w-fit"
							startContent={<CubeTransparentIcon className="w-5 h-5" />}
						>
							Sync Probot
						</Button>
					</div>
				</Tab>
				<Tab key="webhooks" title="Webhooks">
					<Input labelPlacement="outside" autoFocus label="Webhook URL" />
				</Tab>
				<Tab key="danger" title="Danger zone">
					<Button
						color="danger"
						className="w-fit"
						startContent={<TrashIcon className="w-5 h-5" />}
					>
						Delete Probot
					</Button>
				</Tab>
			</Tabs>
		</div>
	);
}
