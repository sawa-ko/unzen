import { Tooltip, cn } from "@nextui-org/react";
import { type IconProps, IconX } from "@tabler/icons-react";

export default function DeniedBotBadge({
	className,
	...props
}: Omit<IconProps, "ref">) {
	return (
		<Tooltip content="This bot is denied">
			<IconX className={cn("h-6 w-6 text-danger", className)} {...props} />
		</Tooltip>
	);
}
