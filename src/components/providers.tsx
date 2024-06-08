import type React from "react";
import { Toaster } from "sonner";
import { ApolloWrapper } from "./apollo-wrapper";

export default function Providers({ children }: React.PropsWithChildren) {
	return (
		<ApolloWrapper>
			<Toaster
				toastOptions={{
					style: {
						backgroundColor: "var(--colors-background-900)",
						color: "var(--colors-background-100)",
						borderColor: "var(--colors-background-700)",
					},
				}}
			/>
			{children}
		</ApolloWrapper>
	);
}
