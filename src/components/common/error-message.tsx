import { cn } from "@nextui-org/react";
import { IconMoodSadFilled } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface ErrorMessageProps {
	icon?: ReactNode;
	message: string;
	centered?: boolean;
}

export default function ErrorMessage({
	icon,
	message,
	centered,
}: ErrorMessageProps) {
	return (
		<div
			className={cn(
				"font-bold text-danger",
				centered ? "flex items-center justify-center h-32 w-full" : "",
			)}
		>
			<div className="mr-2">
				{icon ?? <IconMoodSadFilled className="w-5 h-5" />}
			</div>
			<span>{message}</span>
		</div>
	);
}
