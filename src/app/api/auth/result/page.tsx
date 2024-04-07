"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import { useSession } from "@/lib/hooks/session";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
	const { data: auth, loading } = useSession();
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.replace("/");
		}, 5_000);
	});
	return loading ? (
		<LoadingScreen />
	) : auth ? (
		<div className="flex flex-col justify-center items-center h-[50vh]">
			<div className="flex flex-col gap-2 items-center">
				<IconCheck className="w-12 h-12 text-success" />
				<h2 className="text-2xl font-semibold">Success</h2>
				<h2 className="text-xl font-normal">
					You will be redirected automatically...
				</h2>
			</div>
		</div>
	) : (
		<div className="flex flex-col justify-center items-center h-screen">
			<div className="flex flex-col gap-2 items-center">
				<IconX className="w-12 h-12 text-danger" />
				<h2 className="text-2xl font-semibold">Something went wrong</h2>
				<h2 className="text-xl font-normal">
					You will be redirected automatically...
				</h2>
			</div>
		</div>
	);
}
