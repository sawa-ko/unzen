import { Providers } from "@/components/common/providers";
import type { Metadata } from "next";
import { Sora as FontSans } from "next/font/google";

import Header from "@/components/common/layout/header";
import "@/styles/globals.css";

const font = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home | dbots.fun",
	description: "Hassle-free Discord bot list.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en" className="main">
			<body className={font.className}>
				<Providers>
					<Header />
					<main className="px-6 lg:px-32">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
