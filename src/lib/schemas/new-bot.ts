import { z } from "zod";

export const newBotSchema = z.object({
	// Required fields
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
		.min(25, { message: "25 chars min" })
		.max(100, { message: "100 chars max" }),
	description: z
		.string()
		.min(100, { message: "100 chars min" })
		.max(5_000, { message: "5.000 chars max" }),

	// Co-owners
	coOwners: z.string().optional(),

	// Extra
	prefix: z
		.string()
		.max(6, { message: "Prefix must be 6 characters or less" })
		.optional(),

	// Links
	inviteLink: z.string().url().optional(),
	github: z.string().url().optional(),
	website: z.string().url().optional(),
	supportServer: z.string().url().optional(),
});

export type NewBotSchema = z.infer<typeof newBotSchema>;
