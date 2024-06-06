import type { CommonProps } from "@/lib/types/common";
import { ApolloWrapper } from "./apollo-wrapper";

export default function Providers({ children }: CommonProps) {
	return <ApolloWrapper>{children}</ApolloWrapper>;
}
