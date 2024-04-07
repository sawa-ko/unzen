"use client";

import {
	type SubmitBotFormSchemaType,
	submitBotFormSchema,
} from "@/lib/types/zod/submit-bot.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { IconReload, IconSend, IconSparkles } from "@tabler/icons-react";
import { type SubmitHandler, useForm } from "react-hook-form";

export default function Page() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SubmitBotFormSchemaType>({
		resolver: zodResolver(submitBotFormSchema),
	});

	const onSubmit: SubmitHandler<SubmitBotFormSchemaType> = (data) =>
		console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="mx-auto max-w-2xl w-full p-5 bg-content1 text-content1-foreground flex flex-col gap-5 lg:gap-3 rounded-xl"
		>
			<h1 className="text-3xl font-bold">
				Submit your bot
				<span className="text-xs text-default-600 font-normal ml-1">
					Labels marked with <span className="text-danger">*</span> are strictly
					required
				</span>
			</h1>
			<Input
				errorMessage={errors.id?.message}
				label="Your bot ID"
				description="Get it from the Discord Developer Portal"
				{...register("id")}
				isRequired
			/>
			<Textarea
				errorMessage={errors.shortDescription?.message}
				description="Min 25, max 100"
				label="A short description"
				{...register("shortDescription")}
				isRequired
			/>
			<Input
				errorMessage={errors.prefix?.message}
				label="Your bot prefix"
				description="Leaving this field in blank will set the prefix as 'Slash commands'"
				{...register("prefix")}
			/>
			<Select
				description={
					<div className="flex w-full justify-end">
						<Button
							startContent={<IconSparkles className="w-4 h-4" />}
							variant="bordered"
							size="sm"
							className="justify-end flex border-secondary"
						>
							Suggest tags
						</Button>
					</div>
				}
				errorMessage={errors.tags?.message}
				{...register("tags")}
				label="Select at least 1 tag"
				selectionMode="multiple"
			>
				<SelectItem key={"fun"} value={"Fun"}>
					Fun
				</SelectItem>
				<SelectItem key={"mod"} value={"Moderation"}>
					Moderation
				</SelectItem>
			</Select>
			<div className="flex justify-between">
				<Button
					color="default"
					variant="faded"
					className="group"
					onClick={() => reset()}
					startContent={
						<IconReload className="w-5 h-5 duration-150 group-hover:translate-x-6 group-hover:rotate-180" />
					}
					type="button"
				>
					<span className="group-hover:translate-x-14 duration-150">Reset</span>
				</Button>
				<Button
					color="secondary"
					className="group"
					startContent={
						<IconSend className="w-5 h-5 duration-150 group-hover:translate-x-6" />
					}
					type="submit"
				>
					<span className="group-hover:translate-x-14 duration-150">Send</span>
				</Button>
			</div>
		</form>
	);
}
