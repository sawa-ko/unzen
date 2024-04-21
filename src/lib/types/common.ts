import type { ReactNode } from "react";

export interface DefaultProps {
	children: ReactNode;
}

export interface DefaultModalProps {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
}

export interface ApiErrorResponse {
	extensions: {
		code: number;
		face: string;
		status: number;
	};
	message: string;
}
