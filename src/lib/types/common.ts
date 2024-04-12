import type { ReactNode } from "react";

export interface CommonProps {
	children: ReactNode;
}

export interface ApiErrorResponse {
	extensions: {
		code: number;
		face: string;
		status: number;
	};
	message: string;
}
