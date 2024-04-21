"use client";

import ErrorMessage from "@/components/common/error-message";
import { useGetBotOwnerSuspenseQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar, Image, Tab, Tabs, Tooltip } from "@nextui-org/react";
import { IconAppsFilled, IconArchiveFilled } from "@tabler/icons-react";
import { notFound } from "next/navigation";

export default function Page({ params: { id } }: { params: { id: string } }) {
	const {
		data: { getOwner: user },
	} = useGetBotOwnerSuspenseQuery({
		variables: {
			input: {
				id,
			},
		},
	});

	const mockedUserBadges = [
		{
			id: "assembly",
			label: "Developer",
		},
	];

	if (!user) return notFound();

	return (
		<div className="flex flex-col gap-5">
			<div className="h-full rounded-large p-3 flex flex-col gap-3">
				<div className="flex gap-5 items-center">
					<Avatar
						isBordered
						color="secondary"
						src={parseAvatar(user.avatar, user.id)}
						className="w-32 h-32"
					/>
					<div className="flex flex-col">
						<div className="flex items-center gap-3">
							<h1 className="text-3xl font-bold">{user.username}</h1>
							<div className="flex flex-wrap gap-1 items-center p-2 rounded-small w-fit bg-default">
								{mockedUserBadges.map((badge, key) => (
									<Tooltip key={key} content={badge.label}>
										<Image
											draggable={false}
											src={`/assets/badges/${badge.id}.svg`}
											className="w-6 h-6"
										/>
									</Tooltip>
								))}
							</div>
						</div>
						<p>{user.bio ?? "No bio"}</p>
					</div>
				</div>
				<Tabs
					classNames={{
						tabList:
							"gap-6 w-full relative rounded-none p-0 border-b border-divider",
						cursor: "w-full bg-secondary",
						tab: "max-w-fit px-0 h-12",
						tabContent: "group-data-[selected=true]:text-secondary",
						panel: "h-full",
					}}
					variant="underlined"
					aria-label="User tabs"
				>
					<Tab
						title={
							<div className="flex items-center gap-2">
								<IconAppsFilled className="w-5 h-5" />
								Bots
							</div>
						}
					>
						<ErrorMessage isCentered message={`${user.username} has no bots`} />
					</Tab>
					<Tab
						title={
							<div className="flex items-center gap-2">
								<IconArchiveFilled className="w-5 h-5" />
								Packs
							</div>
						}
					>
						<ErrorMessage
							isCentered
							message={`${user.username} has no packs`}
						/>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
}
