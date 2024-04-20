import { z } from "zod";

export const webhookFormSchema = z.object({
	url: z
		.string({
			required_error: "URL is required",
		})
		.describe("Webhook URL // Not a Discord URL*")
		.url({ message: "URL must be a valid URL" })
		.optional(),
	secret: z
		.string({
			required_error: "Secret is required",
		})
		.describe("Webhook secret // Anything")
		.optional(),
});

export type WebhookFormSchemaType = z.infer<typeof webhookFormSchema>;
