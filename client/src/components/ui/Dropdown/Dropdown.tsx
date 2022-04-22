import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  List,
  ListItem,
  Wrapper,
} from "./Dropdown.style";
import { IDropdown, Item } from "./Dropdown.intefrace";

export const Dropdown = ({ title, ico, list }: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const toggling = () => setIsOpen((state) => !state);
  const handleSelected = (value: Item) => {
    setSelectedOption(value.name);
    setIsOpen(false);
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
          {list.map((item) => (
            <ListItem key={item.id} onClick={() => handleSelected(item)}>
              {item.name}
            </ListItem>
          ))}
        </List>
      )}
    </DropdownContainer>
  );
};
