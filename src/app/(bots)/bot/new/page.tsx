"use client";

import { useForm } from "safe-form";
import LineTitle from "@/components/shared/feedback/line-title";
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { ErrorText } from "@/components/ui/error-text";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { box } from "@/components/ui/styles/box";
import { Box, Center, Container, VStack } from "@/styled-system/jsx";
import { Field, Fieldset } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { newBotSchema } from "@/lib/schemas/new-bot";
import {
	useCreateBotMutation,
	useGetTagsSuspenseQuery,
} from "@/lib/graphql/apollo";
import { useRouter } from "next/navigation";
import { handleError } from "@/lib/utils/format";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import TagInput from "@/components/modules/bots/form/tag-input";

// Had to make this page client side since it uses a lot of hooks. please kaname dont kill me

export default function Page() {
	const router = useRouter();
	const [tags, setTags] = useState<string[]>([]);
	const [owners, setOwners] = useState<string[]>([]);
	const [query, setQuery] = useState<string>("");

	const [createBot, { loading }] = useCreateBotMutation({
		onError: handleError,
		onCompleted: () => {
			toast.success("Bot submitted successfully");
			router.replace("/");
		},
	});

	const { connect, bindField, isPending, fieldErrors } = useForm({
		validateOnChange: true,
		validateOnBlur: false,
		onSubmit: (data) => {
			createBot({
				variables: {
					input: {
						...data,
						owners: owners.length === 0 ? undefined : owners,
						tags,
					},
				},
			});
		},
		schema: newBotSchema,
	});

	const {
		data: { tags: listTags },
	} = useGetTagsSuspenseQuery();

	const filteredTags =
		query === ""
			? listTags.nodes?.map((t) => t.displayName)
			: listTags.nodes
					?.filter((tag) => {
						return tag.id.toLowerCase().includes(query.toLowerCase());
					})
					.map((t) => t.displayName);

	return (
		<Center>
			<Container maxW={"xl"}>
				<VStack>
					<Alert>
						<AlertIcon>
							<ExclamationTriangleIcon />
						</AlertIcon>
						<AlertContent>
							<AlertTitle>Please read me</AlertTitle>
							<AlertDescription>
								You might be wondering why this page is so ugly and why we
								removed the old-new wizard-like form. We removed it because of
								some issues that form had and we preferred not to mantain.
							</AlertDescription>
						</AlertContent>
					</Alert>
					<Box className={box}>
						<LineTitle>Submit a bot</LineTitle>
						<form noValidate {...connect()}>
							<Fieldset as={VStack} w="full">
								<Field as={Box} w="full">
									<Label htmlFor="id">Bot ID *</Label>
									<Input
										{...bindField("id")}
										placeholder="Your bot's unique ID"
									/>
									<ErrorText size="sm">{fieldErrors.id?.first}</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="prefix">Prefix</Label>
									<Input
										{...bindField("prefix")}
										placeholder="The prefix your bot will listen to (leave in blank for slash commands)"
									/>
									<ErrorText size="sm">{fieldErrors.prefix?.first}</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="shortDescription">Short description *</Label>
									<Textarea
										{...bindField("shortDescription")}
										placeholder="A brief description of your bot and it's functions"
									/>
									<ErrorText size="sm">
										{fieldErrors.shortDescription?.first}
									</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="description">Description *</Label>
									<Textarea
										rows={10}
										{...bindField("description")}
										placeholder="A detailed description of your bot and it's functions, supporting markdown and html."
									/>
									<ErrorText size="sm">
										{fieldErrors.description?.first}
									</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="description">Tags *</Label>
									<TagInput
										setQuery={setQuery}
										filteredTags={filteredTags ?? []}
										tags={tags}
										setTags={setTags}
									/>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="coOwners">Co-owners</Label>
									<Input
										onChange={(e) =>
											setOwners(e.currentTarget.value?.split(","))
										}
										placeholder="Extra owners for your bot, separated by commas (eg: ID1,ID2) Omit your own ID."
									/>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="inviteLink">Custom invite link</Label>
									<Input
										{...bindField("inviteLink")}
										placeholder="Custom invite link for your bot, leave in blank for a 0-permissions link"
									/>
									<ErrorText size="sm">
										{fieldErrors.inviteLink?.first}
									</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="github">GitHub</Label>
									<Input
										{...bindField("github")}
										placeholder="GitHub repo or org"
									/>
									<ErrorText size="sm">{fieldErrors.github?.first}</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="website">Website</Label>
									<Input
										{...bindField("website")}
										placeholder="Your bot's website"
									/>
									<ErrorText size="sm">{fieldErrors.website?.first}</ErrorText>
								</Field>
								<Field as={Box} w="full">
									<Label htmlFor="supportServer">Support server</Label>
									<Input
										{...bindField("supportServer")}
										placeholder="Your bot's support server"
									/>
									<ErrorText size="sm">
										{fieldErrors.supportServer?.first}
									</ErrorText>
								</Field>
								<Button type="submit" w="full" disabled={isPending || loading}>
									Submit
								</Button>
							</Fieldset>
						</form>
					</Box>
				</VStack>
			</Container>
		</Center>
	);
}
