import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { z } from "zod";

export const webhookSchema = z.object({
	url: z.string().url(),
	secret: z.string(),
	events: z.array(z.string()).optional(),
});

export const webhookResolver = classValidatorResolver(webhookSchema);
