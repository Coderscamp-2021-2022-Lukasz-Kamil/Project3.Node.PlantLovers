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
			id: 5,
			name: "others",
		},
	];

export const Dropdown = ({ title, ico }: IDropdown) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(state => !state);

	return (
		<DropdownContainer>
			<Wrapper onClick={toggling}>
			<DropdownHeader >
				{title}
				{ico}
			</DropdownHeader>
			</Wrapper>
			{isOpen && (
				<List>
					<ListItem></ListItem>
					<ListItem>hanging plants</ListItem>
					<ListItem>cacti and succulents</ListItem>
					<ListItem>blooming</ListItem>
					{/* <ListItem>green</ListItem> */}
					{/* <ListItem>trees and shrubs</ListItem> */}
				</List>
			)}
		</DropdownContainer>
	);
};
