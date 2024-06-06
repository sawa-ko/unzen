export async function GET() {
	return Response.redirect(process.env.NEXT_PUBLIC_LOGIN_URL as string);
}
