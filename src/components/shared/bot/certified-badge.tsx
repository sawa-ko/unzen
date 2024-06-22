"use client";

import { icon } from "@/components/ui/button";
import { css, cx } from "@/styled-system/css";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function CertifiedBadge() {
	return (
		<CheckBadgeIcon
			title="This bot is certified"
			className={cx(icon(7), css({ color: "brand.500" }))}
		/>
	);
}
