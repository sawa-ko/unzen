import { Chip } from "@nextui-org/react";

export default function OverviewBotTab() {
	return (
		<div className="flex items-center gap-3">
			<div className="w-full">1</div>
			<div className="w-1/3">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Overview</h1>
					<div className="flex flex-col gap-1">
						<div className="flex w-full justify-between items-center">
							<span>Votes</span>
							<Chip>4k</Chip>
						</div>
						<div className="flex w-full justify-between items-center">
							<span>Guilds</span>
							<Chip>2.3k</Chip>
						</div>
						<div className="flex w-full justify-between items-center">
							<span>Prefix</span>
							<Chip>#</Chip>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
