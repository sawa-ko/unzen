"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import { APIPermissions } from "@/lib/constants/api";
import useSessionStore from "@/lib/stores/session";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export default function PanelLayout({ children }: { children: ReactNode }) {
	const { data: auth, loading } = useSessionStore();

	if (loading) return <LoadingScreen />;
	if (!auth || auth.me.permissions !== APIPermissions.Administrator)
		return notFound();

	return children;
}
