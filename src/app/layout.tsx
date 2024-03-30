import Header from "@/components/common/layout/header";
import { Providers } from "@/components/common/providers";
import { openGraph } from "@/lib/constants/open-graph";
import type { Metadata } from "next";
import { Sora as FontSans } from "next/font/google";

import Footer from "@/components/common/layout/footer";
import "@/styles/globals.css";

const font = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: openGraph.title,
	description: openGraph.description,
	openGraph,
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
					<main className="max-w-[1280px] w-full mx-auto">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
