export function GET() {
	return Response.json({
		ok: true,
		data: {
			message: "welcome to dbots internal API, auth purposes",
		},
	});
}
