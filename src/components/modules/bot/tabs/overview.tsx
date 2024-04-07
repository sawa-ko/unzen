import TagButton from "@/components/common/buttons/tag-button";
import DiscordIcon from "@/components/common/icons/discord";
import type { BotObject } from "@/lib/types/apollo";
import { Avatar, Button, Chip, Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function OverviewBotTab({
	description,
	owners,
	guildCount,
	prefix,
}: Pick<BotObject, "description" | "owners" | "guildCount" | "prefix">) {
	return (
		<div className="flex lg:flex-row flex-col gap-3">
			<div className="w-full">
				<div className="break-all min-w-full table">{description}</div>
			</div>
			<div className="lg:w-1/3 w-full flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold">Overview</h1>
					<div className="flex flex-col gap-1 font-bold text-default-600">
						<div className="flex w-full justify-between items-center">
							<span>Votes</span>
							<Chip>4k</Chip>
						</div>
						<div className="flex w-full justify-between items-center">
							<span>Guilds</span>
							<Chip>{guildCount}</Chip>
						</div>
						<div className="flex w-full justify-between items-center">
							<span>Prefix</span>
							<Chip>{prefix ?? "Slash commands"}</Chip>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Owners</h1>
					<div className="flex flex-col gap-1">
						{owners.map((owner, key) => (
							<Button
								key={key}
								className="flex justify-start gap-2 h-11"
								variant="bordered"
								radius="full"
							>
								<Avatar
									className="w-7 h-7"
									src="/default-avatar.png"
									radius="full"
									size="sm"
								/>{" "}
								{owner.username}
							</Button>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Tags</h1>
					<div className="flex flex-wrap gap-1">
						<TagButton>Test</TagButton>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Links</h1>
					<div className="flex flex-col gap-2">
						<Link color="secondary" underline="always" as={NextLink} href="/gg">
							<DiscordIcon className="w-5 h-5 mr-2" />
							Support server
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
