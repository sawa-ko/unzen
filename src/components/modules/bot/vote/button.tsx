"use client";

import ErrorMessage from "@/components/common/feedback/error-message";
import Loader from "@/components/common/feedback/loader";
import type { SessionStore } from "@/lib/stores/session";
import { type BotObject, useCreateVoteMutation } from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

export default function BotVoteButton({
	id,
	canVote,
	data,
	loading,
}: Pick<BotObject, "id"> & { canVote: boolean } & SessionStore) {
	const [createVote, { loading: voting }] = useCreateVoteMutation({
		onCompleted: () => {
			toast.success("Voted successfully ✨");
		},
		refetchQueries: ["SingleBotVote"],
		onError: handleError,
	});

	if (!data && !loading)
		return <ErrorMessage icon={null} message="You need to login to vote" />;

	return loading ? (
		<Loader />
	) : canVote ? (
		<Button
			onClick={() => createVote({ variables: { input: { id } } })}
			isLoading={voting}
			spinner={<Loader />}
			color="secondary"
		>
			Vote now
		</Button>
	) : (
		<ErrorMessage icon={null} message="You have voted this bot" />
	);
}
