import { z } from "zod";

export const submitBotFormSchema = z.object({
	id: z
		.string({
			required_error: "The ID is required",
			description: "Your bot ID",
		})
		.min(18, { message: "ID should be a valid snowflake" })
		.max(19, { message: "ID should be a valid snowflake" }),
	shortDescription: z
		.string({
			required_error: "The short description is required",
		})
		.min(25, { message: "Short description should be greater or equal to 25" })
		.max(100, { message: "Short description should be lower or equal to 100" }),
	prefix: z
		.string({
			required_error: "The prefix is required",
		})
		.min(0)
		.max(10, { message: "Prefix length must be lower or equal than 10" })
		.optional(),
	tags: z
		.string({
			invalid_type_error: "You must select at least 1 tag",
			required_error: "You must select at least 1 tag",
		})
		.refine((t) => t.split(",").length >= 1)
		.transform((t) => t.split(",")),
});

export type SubmitBotFormSchemaType = z.infer<typeof submitBotFormSchema>;
