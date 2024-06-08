import type React from "react";
import { Toaster } from "sonner";
import { ApolloWrapper } from "./apollo-wrapper";

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<ApolloWrapper>
			<Toaster theme="dark" />
			{children}
		</ApolloWrapper>
	);
}
