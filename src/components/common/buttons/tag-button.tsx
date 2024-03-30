import type { CommonProps } from "@/lib/types/common";
import { HashtagIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";

export default function TagButton({ children }: CommonProps) {
    return <Button
        startContent={
            <HashtagIcon className="w-4 h-4 text-secondary" />
        }
        size="sm"
    >
        {children}
    </Button>
}