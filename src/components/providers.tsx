import type React from "react";
import { ApolloWrapper } from "./apollo-wrapper";

export default function Providers({ children }: React.PropsWithChildren) {
	return <ApolloWrapper>{children}</ApolloWrapper>;
}
