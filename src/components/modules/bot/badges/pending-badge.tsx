import { Tooltip, cn } from "@nextui-org/react";
import { IconClockFilled, type IconProps } from "@tabler/icons-react";

export default function PendingBotBadge({
	className,
	...props
}: Omit<IconProps, "ref">) {
	return (
		<Tooltip content="This bot is pending">
			<IconClockFilled
				className={cn("h-6 w-6 text-warning", className)}
				{...props}
			/>
		</Tooltip>
	);
}
