import type { ReactNode } from "react";

interface PolicyProps {
	condition: boolean;
	children: ReactNode;
	fallback?: ReactNode | undefined;
}

export default function Policy({
	condition,
	children,
	fallback = null,
}: PolicyProps) {
	return condition ? children : fallback;
}
