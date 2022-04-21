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
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(state => !state);
	const handleSelected = (value: any) => {
		setSelectedOption(value);
		setIsOpen(false);
		console.log(selectedOption);
		};
	
	// setSelected(e.target.textContent);
	return (
		<DropdownContainer>
			<Wrapper onClick={toggling}>
				<DropdownHeader>
				{selectedOption || {title}}
					{title}
					{ico}
				</DropdownHeader>
			</Wrapper>
			{isOpen && (
				<List>
					{items.map(item => (
						// <ListItem key={item.id}>{item.name}</ListItem>
						<ListItem key={item.id} onClick={()=> handleSelected(item)} >{item.name}</ListItem>
					))}
				</List>
			)}
		</DropdownContainer>
	);
};
