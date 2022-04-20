import React, { useState } from "react";
import {
	DropdownContainer,
	DropdownHeader,
	List,
	ListItem,
	Wrapper,
} from "./Dropdown.style";
import IDropdown from "./Dropdown.intefrace";

const items = [
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

export const Dropdown = ({ title, ico }: IDropdown) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const toggling = () => setIsOpen(state => !state);
	const handleSelect = (e: any) => {
		console.log(e.target.textContent);
		// setSelected(e.target.textContent);
	};

	return (
		<DropdownContainer>
			<Wrapper onClick={toggling}>
				<DropdownHeader>
					{title}
					{ico}
				</DropdownHeader>
			</Wrapper>
			{isOpen && (
				<List>
					{items.map(item => (
						// <ListItem key={item.id}>{item.name}</ListItem>
						<ListItem key={item.id} onClick={handleSelect} >{item.name}</ListItem>
					))}
				</List>
			)}
		</DropdownContainer>
	);
};
