import Providers from "@/components/providers";
import Header from "@/components/shared/layout/header";
import { Container } from "@/styled-system/jsx";
import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import Loader from "nextjs-toploader";

import "@/styles/globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dbots.fun | The Discord botlist",
	description: "Discover new bots everyday for all community sizes.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Loader color="var(--colors-brand-500)" showSpinner={false} />
				<Providers>
					<Header />
					<Container maxW="full" px={{ lg: 16 }} mt={11} py={11}>
						{children}
					</Container>
				</Providers>
			</body>
		</html>
	);
}
