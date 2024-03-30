import type { CommonProps } from "@/lib/types/common";
import { Button } from "@nextui-org/react";
import { IconHash } from "@tabler/icons-react";

export default function TagButton({ children }: CommonProps) {
	return (
		<Button
			startContent={<IconHash className="w-4 h-4 text-secondary" />}
			size="sm"
		>
			{children}
		</Button>
	);
}
