import { z } from "zod";

export const newBotSchema = z.object({
	id: z
		.string({
			description: "Bot ID",
			invalid_type_error: "ID must be a valid Discord ID",
			required_error: "Bot ID is required",
		})
		.min(18, { message: "Id must be at least 18 characters length" })
		.max(19, { message: "Id must be at most 19 characters length" }),
	shortDescription: z
		.string()
		.min(25, { message: "Invalid short description" })
		.max(100, { message: "Invalid short description" }),
	description: z
		.string()
		.min(100, { message: "Invalid description" })
		.max(5_000, { message: "Invalid description" }),
});

export type NewBotSchema = z.infer<typeof newBotSchema>;
