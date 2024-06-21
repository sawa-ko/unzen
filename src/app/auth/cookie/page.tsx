"use client";

import Logo from "@/components/shared/logo";
import { Heading } from "@/components/ui/heading";
import { Center, Flex } from "@/styled-system/jsx";
import { setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
	const router = useRouter();
	const query = useSearchParams();
	const cookie = query.get("c");
	const expires = Number(query.get("e"));

	useEffect(() => {
		if (cookie && expires) {
			setCookie("session", cookie, {
				path: "/",
				secure: false,
				httpOnly: false,
				expires: new Date(Date.now() + expires),
			});
			router.replace("/");
		}
	}, [cookie, expires, router]);

	return (
		<React.Fragment>
			<Center h="60vh">
				<Flex alignItems={"center"} flexDir="column" gap={5}>
					<Logo />
					<Heading>Authorizing...</Heading>
				</Flex>
			</Center>
		</React.Fragment>
	);
}
