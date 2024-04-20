import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import {
	ArrayMaxSize,
	ArrayMinSize,
	IsArray,
	IsDefined,
	IsOptional,
	IsString,
	Length,
	ValidateIf,
} from "class-validator";

export class SubmitBotDTO {
	@IsString()
	@Length(18, 19, {
		message: "ID should be a valid Discord ID",
	})
	@IsDefined({
		message: "ID is required",
	})
	public readonly id: string;

	@IsString()
	@Length(25, 100, {
		message: "Short description length should be between 25 and 100",
	})
	@IsDefined({
		message: "Short description is required",
	})
	public readonly shortDescription: string;

	@IsString()
	@Length(100, 5_000, {
		message: "Description length should be between 100 and 5000",
	})
	@IsDefined({
		message: "Description is required",
	})
	public readonly description: string;

	@IsString()
	@Length(0, 10, {
		message: "Prefix length should be between 0 and 10",
	})
	@IsOptional()
	public readonly prefix: string;

	@IsArray({
		message: "Tags should be an array",
	})
	@ArrayMinSize(1)
	@ArrayMaxSize(7)
	@ValidateIf((t: string[]) => t.length >= 1)
	public readonly tags: string[];
}

export const submitBotResolver = classValidatorResolver(SubmitBotDTO);
