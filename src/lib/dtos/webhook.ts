import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import {
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUrl,
} from "class-validator";

export class WebhookDTO {
	@IsUrl({
		host_blacklist: ["discord.com", "discordapp.com"],
		protocols: ["https"],
	})
	@IsNotEmpty({
		message: "Url is required",
	})
	url!: string;

	@IsString({
		message: "Secret must be a valid string",
	})
	@IsNotEmpty({
		message: "Secret is required",
	})
	secret!: string;

	@IsOptional()
	@IsArray()
	@ArrayMinSize(1)
	events!: string[];
}

export const webhookResolver = classValidatorResolver(WebhookDTO);
