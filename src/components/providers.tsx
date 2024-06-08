import type React from "react";
import { ApolloWrapper } from "./apollo-wrapper";
import { Toaster } from "sonner";

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<ApolloWrapper>
			<Toaster theme="dark" />
			{children}
		</ApolloWrapper>
	);
}
