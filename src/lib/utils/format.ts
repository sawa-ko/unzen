export function formatDateSince(stringDate: string) {
	const diff = Date.now() - new Date(stringDate).getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	return days === 0 ? "today" : `${days} days ago`;
}
