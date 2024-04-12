import { cn } from "@nextui-org/react";
import { IconMoodSadFilled } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface ErrorMessageProps {
	icon?: ReactNode;
	message: string;
	isCentered?: boolean;
}

export default function ErrorMessage({
	icon,
	message,
	isCentered,
}: ErrorMessageProps) {
	return (
		<div
			className={cn(
				"font-bold text-danger",
				isCentered ? "flex items-center justify-center h-32 w-full" : "",
			)}
		>
			<div className="mr-2">
				{icon ?? <IconMoodSadFilled className="w-6 h-6" />}
			</div>
			<span>{message}</span>
		</div>
	);
}
