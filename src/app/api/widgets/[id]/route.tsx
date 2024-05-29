import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const name = searchParams.get("name");
	const avatar = searchParams.get("avatar")!;

	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: 32,
				fontWeight: 400,
				color: "#fff",
				backgroundColor: "#000",
			}}
		>
			<img alt="" src={avatar} tw="absolute opacity-30 rotate-90 blur-sm" />
			<img
				alt=""
				src={avatar}
				width="150"
				tw="z-10"
				style={{ borderRadius: "9999" }}
			/>
			<div style={{ marginTop: 30, display: "flex", gap: 6 }}>
				<strong style={{ fontWeight: 800 }}>{name}</strong> on dbots.fun
			</div>
		</div>,
		{
			width: 800,
			height: 400,
		},
	);
}
