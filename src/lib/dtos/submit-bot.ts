import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const submitBotSchema = z.object({
	id: z.string().min(18).max(19),
	shortDescription: z.string().min(25).max(100),
	description: z.string().min(100).max(5_000),
	prefix: z.string().max(10),
	tags: z.string(),
});

export const submitBotResolver = zodResolver(submitBotSchema);
