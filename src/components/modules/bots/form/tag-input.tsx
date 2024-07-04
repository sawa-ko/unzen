import { buttonIcon } from "@/components/ui/button-icon";
import { input } from "@/components/ui/input";
import { menuItems, menuItem } from "@/components/ui/styles/menu";
import { css, cx } from "@/styled-system/css";
import {
	Combobox,
	ComboboxInput,
	ComboboxOptions,
	ComboboxOption,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import type { Dispatch, SetStateAction } from "react";

export default function TagInput({
	tags,
	setTags,
	setQuery,
	filteredTags,
}: {
	tags: string[];
	setTags: Dispatch<SetStateAction<string[]>>;
	setQuery: Dispatch<SetStateAction<string>>;
	filteredTags: string[];
}) {
	return (
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
	);
}
