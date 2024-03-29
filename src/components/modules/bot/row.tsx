import { cn } from "@nextui-org/react";
import type { ReactNode } from "react";

interface BotRowProps {
	title: string;
	icon: ReactNode;
	gridClassNames?: string;
	children: ReactNode;
}

export default function BotRow({
	title,
	icon,
	gridClassNames = "md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3",
	children,
}: BotRowProps) {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex gap-3 items-center">
				<div className="bg-secondary text-secondary-foreground p-3 rounded-full">
					{icon}
				</div>
				<h1 className="text-2xl font-semibold">{title}</h1>
			</div>
			<div className={cn("grid", gridClassNames)}>{children}</div>
		</div>
	);
}
