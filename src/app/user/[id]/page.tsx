export default function Page({
	params: { id: userId },
}: { params: { id: string } }) {
	return <p>{userId ?? "Unknown ID"}</p>;
}
