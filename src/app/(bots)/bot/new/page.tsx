"use client";

import LineTitle from "@/components/shared/feedback/line-title";
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { Button, buttonIcon } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";
import { Input, Textarea, input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { menuItem, menuItems } from "@/components/ui/styles/menu";
import {
	useCreateBotMutation,
	useGetTagsSuspenseQuery,
} from "@/lib/graphql/apollo";
import { type NewBotSchema, newBotSchema } from "@/lib/schemas/new-bot";
import useAuthStore from "@/lib/stores/auth";
import { handleError } from "@/lib/utils/format";
import { css, cx } from "@/styled-system/css";
import { Box, Center, Flex } from "@/styled-system/jsx";
import {
	Combobox,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Field,
	Fieldset,
} from "@headlessui/react";
import {
	InformationCircleIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
	const router = useRouter();
	const [tags, setTags] = useState<string[]>([]);
	const [query, setQuery] = useState("");

	const { data: auth, loading: gettingAuth } = useAuthStore();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<NewBotSchema>({
		resolver: zodResolver(newBotSchema),
	});

	const [createBot, { loading: creatingBot }] = useCreateBotMutation({
		onError: handleError,
		onCompleted: () => {
			toast.success("Bot submitted successfully");
			router.replace("/");
		},
	});

	const {
		data: { tags: availableTags },
	} = useGetTagsSuspenseQuery();

	const onSubmit = handleSubmit((data) =>
		createBot({
			variables: {
				input: { ...data, tags: tags },
			},
		}),
	);

	const filteredTags =
		query === ""
			? availableTags.nodes?.map((t) => t.displayName)
			: availableTags.nodes
					?.filter((tag) => {
						return tag.id.toLowerCase().includes(query.toLowerCase());
					})
					.map((t) => t.displayName);

	if (!gettingAuth && !auth) return notFound();

	return (
		<Center>
			<Box
				my={15}
				p={5}
				maxW={"xl"}
				w={"full"}
				borderRadius={"xl"}
				bg={"background.900"}
				borderWidth={1}
				borderColor={"background.800"}
				boxShadow={"lg"}
			>
				<Alert mb={5}>
					<AlertIcon>
						<InformationCircleIcon />
					</AlertIcon>
					<AlertContent>
						<AlertTitle>This form is work-in-progress</AlertTitle>
						<AlertDescription>
							For the moment it only has the necessary fields to submit a bot
						</AlertDescription>
					</AlertContent>
				</Alert>
				<LineTitle>Submit</LineTitle>
				<form noValidate onSubmit={onSubmit}>
					<Fieldset as={Flex} flexDir={"column"} gap={2}>
						<Field>
							<Label htmlFor="id">Bot ID</Label>
							<Input
								autoComplete="off"
								isError={!!errors.id}
								{...register("id")}
								name="id"
								w={"full"}
								placeholder={"Your bot's ID"}
							/>
							{errors.id?.message && (
								<ErrorText size="sm">{errors.id.message}</ErrorText>
							)}
						</Field>
						<Field>
							<Label htmlFor="shortDescription">Bot short description</Label>
							<Textarea
								autoComplete="off"
								isError={!!errors.shortDescription}
								{...register("shortDescription")}
								name="shortDescription"
								w={"full"}
								placeholder={"Describe your bot in 25 words or more."}
							/>
							{errors.shortDescription?.message && (
								<ErrorText size="sm">
									{errors.shortDescription.message}
								</ErrorText>
							)}
						</Field>
						<Field>
							<Label htmlFor="description">Bot description</Label>
							<Textarea
								autoComplete="off"
								isError={!!errors.description}
								{...register("description")}
								name="description"
								w={"full"}
								rows={9}
								placeholder={"Describe your bot in 100 words or more."}
							/>
							{errors.description?.message && (
								<ErrorText size="sm">{errors.description.message}</ErrorText>
							)}
						</Field>
						<Field>
							<Label htmlFor="tags">Bot tags</Label>
							<Combobox
								immediate
								multiple
								value={tags}
								onChange={setTags}
								onClose={() => setQuery("")}
							>
								<ComboboxInput
									autoComplete="off"
									placeholder="Select up to 7 tags"
									aria-label="Assignee"
									onChange={(event) => setQuery(event.target.value)}
									displayValue={(tags: string[]) => tags.join(", ")}
									className={cx(input(), css({ w: "full" }))}
								/>
								<ComboboxOptions className={menuItems} anchor="top end">
									{filteredTags?.map((t) => (
										<ComboboxOption
											disabled={!tags.includes(t) && tags.length >= 7}
											className={menuItem}
											key={t}
											value={t}
										>
											{({ selected }) => (
												<>
													<CheckIcon
														className={cx(
															buttonIcon("left", 5),
															css({
																opacity: selected ? 1 : 0,
																color: "brand.500",
															}),
														)}
													/>
													{t}
												</>
											)}
										</ComboboxOption>
									))}
								</ComboboxOptions>
							</Combobox>
						</Field>
					</Fieldset>
					{isValid && (
						<Button disabled={creatingBot} type="submit" mt={2} w={"full"}>
							Submit
							<PaperAirplaneIcon className={buttonIcon("right", 5)} />
						</Button>
					)}
				</form>
			</Box>
		</Center>
	);
}
