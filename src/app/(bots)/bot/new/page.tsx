"use client";

import Step from "@/components/modules/bots/step";
import LineTitle from "@/components/shared/feedback/line-title";
import {
	Alert,
	AlertIcon,
	AlertContent,
	AlertTitle,
	AlertDescription,
} from "@/components/ui/alert";
import { Button, buttonIcon } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";
import { Input, Textarea, input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { box } from "@/components/ui/styles/box";
import { fieldset } from "@/components/ui/styles/fieldset";
import { menuItem, menuItems } from "@/components/ui/styles/menu";
import { Text } from "@/components/ui/text";
import { fadeIn, popUpAnimation } from "@/lib/constants/animations";
import {
	useCreateBotMutation,
	useGetTagsSuspenseQuery,
} from "@/lib/graphql/apollo";
import { type NewBotSchema, newBotSchema } from "@/lib/schemas/new-bot";
import useAuthStore from "@/lib/stores/auth";
import { handleError } from "@/lib/utils/format";
import { css, cx } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import {
	Combobox,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Field,
	Fieldset,
} from "@headlessui/react";
import {
	ArrowPathIcon,
	CheckIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { notFound, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
	const router = useRouter();
	const [tags, setTags] = useState<string[]>([]);
	const [query, setQuery] = useState("");
	const [currentStep, setCurrentStep] = useState<number>(1);

	const { data: auth, loading: gettingAuth } = useAuthStore();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitted },
		reset: resetForm,
		getValues,
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
				input: {
					...data,
					tags: tags,
					owners: getValues("owners")?.split(",") ?? [],
				},
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

	const hasNextStep = currentStep <= 4;
	const hasPrevStep = currentStep >= 2;

	return (
		<form noValidate onSubmit={onSubmit}>
			<Flex gap={9}>
				<Box
					className={cx(
						box,
						css({ maxW: "xs", w: "screen", h: "min-content" }),
					)}
				>
					<LineTitle>Submit a bot</LineTitle>
					<Flex flexDir="column" gap={3} mt={4}>
						<Step
							step={1}
							title="Basic information"
							currentStep={currentStep}
						/>
						<Step step={2} title="Co-owners" currentStep={currentStep} />
						<Step step={3} title="Tags" currentStep={currentStep} />
						<Step step={4} title="Links" currentStep={currentStep} />
						<AnimatePresence>
							{isSubmitted && !isValid && (
								<Button
									transitionProperty={"color"}
									as={motion.div}
									variants={popUpAnimation}
									animate="enter"
									initial="initial"
									exit="exit"
									color={"gray"}
									onClick={resetForm}
									type="button"
									w="full"
								>
									<ArrowPathIcon className={buttonIcon("left")} />
									Reset form
								</Button>
							)}
						</AnimatePresence>
						<Button disabled={creatingBot} type="submit" w="full">
							Submit
						</Button>
						{isSubmitted && !isValid && (
							<motion.div
								variants={fadeIn}
								animate="enter"
								initial="initial"
								exit="exit"
							>
								<ErrorText>The form has errors!</ErrorText>
							</motion.div>
						)}
					</Flex>
				</Box>
				<Box>
					<Flex flexDir={"column"} gap={3}>
						{currentStep === 1 && (
							<Fieldset className={fieldset}>
								<Field>
									<Label htmlFor="id">Bot ID</Label>
									<Input
										placeholder="Your bot's ID"
										w={"full"}
										id="id"
										{...register("id")}
									/>
									{errors.id?.message && (
										<ErrorText size="xs" mt={1}>
											{errors.id.message}
										</ErrorText>
									)}
								</Field>
								<Field>
									<Label htmlFor="shortDescription">
										Bot short description
									</Label>
									<Textarea
										placeholder="Your bot's short description"
										w={"full"}
										id="shortDescription"
										{...register("shortDescription")}
									/>
									{errors.shortDescription?.message && (
										<ErrorText size="xs" mt={1}>
											{errors.shortDescription.message}
										</ErrorText>
									)}
								</Field>
								<Field>
									<Label htmlFor="description">Bot description</Label>
									<Textarea
										rows={10}
										placeholder="Your bot's description (supports MD and HTML)"
										w={"full"}
										id="description"
										{...register("description")}
									/>
									{errors.description?.message && (
										<ErrorText size="xs" mt={1}>
											{errors.description.message}
										</ErrorText>
									)}
								</Field>
							</Fieldset>
						)}
						{currentStep === 2 && (
							<Fieldset className={fieldset}>
								<Field>
									<Label htmlFor="coOwners">Co-owners</Label>
									<Input
										placeholder="Your bot's co-owners ids"
										w={"full"}
										id="owners"
										{...register("owners")}
									/>
									{errors.owners?.message && (
										<ErrorText size="xs" mt={1}>
											{errors.owners.message}
										</ErrorText>
									)}
								</Field>
							</Fieldset>
						)}
						{currentStep === 3 && (
							<Fieldset className={fieldset}>
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
						)}
						{currentStep === 4 && (
							<Alert>
								<AlertIcon>
									<InformationCircleIcon />
								</AlertIcon>
								<AlertContent>
									<AlertTitle>This part is work-in-progress</AlertTitle>
									<AlertDescription>
										At the moment you can't set up custom links, but soon you
										will!
									</AlertDescription>
								</AlertContent>
							</Alert>
						)}
						{currentStep === 5 && (
							<Text>
								You are ready! Press the "Submit" button to finish the bot
								submission
							</Text>
						)}
						<Flex gap={1}>
							<Button
								type="button"
								color="gray"
								disabled={!hasPrevStep}
								onClick={() => setCurrentStep(currentStep - 1)}
							>
								Previous step
							</Button>
							<Button
								type="button"
								disabled={!hasNextStep}
								onClick={() => setCurrentStep(currentStep + 1)}
							>
								Next step
							</Button>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</form>
	);
}
