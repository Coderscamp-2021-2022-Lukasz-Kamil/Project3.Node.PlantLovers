import React, { useState } from "react";
import {
	DropdownContainer,
	DropdownHeader,
	SVGElement,
	List,
	ListItem,
} from "./Dropdown.style";
import IDropdown from "./Dropdown.intefrace";

export const Dropdown = ({ title, src, alt}: IDropdown) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(state => !state);

	return (
		<DropdownContainer>
			<DropdownHeader onClick={toggling}>
				{title}
				<SVGElement src={src} alt={alt} />
			</DropdownHeader>
			{isOpen && (
				<List>
					<ListItem ></ListItem>
					{/* <ListItem>hanging plants</ListItem> */}
					{/* <ListItem>cacti and succulents</ListItem> */}
					{/* <ListItem>blooming</ListItem> */}
					{/* <ListItem>green</ListItem> */}
					{/* <ListItem>trees and shrubs</ListItem> */}
				</List>
			)}
		</DropdownContainer>
	);
};
