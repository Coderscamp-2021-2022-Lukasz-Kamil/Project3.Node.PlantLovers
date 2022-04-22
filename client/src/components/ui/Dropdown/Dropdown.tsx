import React, { useState } from "react";
import {
	DropdownContainer,
	DropdownHeader,
	List,
	ListItem,
	Wrapper,
} from "./Dropdown.style";
import IDropdown from "./Dropdown.intefrace";

interface Item {
	id: number;
	name: string;
}

const items:Item[] = [
	{
		id: 1,
		name: "hanging plants",
	},
	{
		id: 2,
		name: "cacti and succulents",
	},
	{
		id: 3,
		name: "blooming",
	},
	{
		id: 4,
		name: "green",
	},
	{
		id: 5,
		name: "trees and shrubs",
	},
	{
		id: 6,
		name: "others",
	},
];

export const Dropdown = ({ title, ico, list }: IDropdown) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string|null>(null);
	const toggling = () => setIsOpen(state => !state);
	const handleSelected = (value: Item) => {
		setSelectedOption(value.name);
		setIsOpen(false);
		// console.log(selectedOption);
		};
	return (
		<DropdownContainer>
			<Wrapper onClick={toggling}>
				<DropdownHeader>
				{selectedOption || title}
					{ico}
				</DropdownHeader>
			</Wrapper>
			{isOpen && (
				<List>
					{items.map(item => (
						<ListItem key={item.id} onClick={()=> handleSelected(item)} >{item.name}</ListItem>
					))}
				</List>
			)}
		</DropdownContainer>
	);
};
