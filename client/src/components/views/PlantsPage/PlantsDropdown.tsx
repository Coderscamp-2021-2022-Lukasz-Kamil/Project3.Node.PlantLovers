import React, { useState } from "react";
import {
  PlantsDropdownWrapper,
  PlantsDropdownList,
} from "./PlantsDropdown.style";
import { ReactNode } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownHeaderIcon,
  DropdownHeaderTitle,
  ListItem,
} from "../../ui/Dropdown/Dropdown.style";

export interface Item {
  id: number;
  name: string;
}

export interface IDropdown {
  title: string;
  ico: ReactNode;
  list: Item[];
  src?: string;
  alt?: string;
}

export interface IDropdownInput {
  title: string;
  ico: ReactNode;
  list: Input[];
  src?: string;
  alt?: string;
}

export interface Input {
  placeholder: string;
}

export const PlantsDropdown = ({ title, ico, list }: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const toggling = () => setIsOpen((state) => !state);
  const handleSelected = (value: Item) => {
    setSelectedOption(value.name);
    setIsOpen(false);
  };
  return (
    <DropdownContainer>
      <PlantsDropdownWrapper onClick={toggling}>
        <DropdownHeader>
          <DropdownHeaderTitle>{selectedOption || title}</DropdownHeaderTitle>
          <DropdownHeaderIcon>{ico}</DropdownHeaderIcon>
        </DropdownHeader>
      </PlantsDropdownWrapper>
      {isOpen && (
        <PlantsDropdownList>
          {list.map((item) => (
            <ListItem key={item.id} onClick={() => handleSelected(item)}>
              {item.name}
            </ListItem>
          ))}
        </PlantsDropdownList>
      )}
    </DropdownContainer>
  );
};

export const PlantsDropdownWithInput = ({
  title,
  ico,
  list,
}: IDropdownInput) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const toggling = () => setIsOpen((state) => !state);
  const handleSelected = (value: Input) => {
    setSelectedOption(value.placeholder);
    setIsOpen(false);
  };
  return (
    <DropdownContainer>
      <PlantsDropdownWrapper onClick={toggling}>
        <DropdownHeader>
          <DropdownHeaderTitle>{selectedOption || title}</DropdownHeaderTitle>
          <DropdownHeaderIcon>{ico}</DropdownHeaderIcon>
        </DropdownHeader>
      </PlantsDropdownWrapper>
      {isOpen && (
        <PlantsDropdownList>
          {list.map((item) => (
            <ListItem
              key={item.placeholder}
              onClick={() => handleSelected(item)}
            >
              {item.placeholder}
            </ListItem>
          ))}
        </PlantsDropdownList>
      )}
    </DropdownContainer>
  );
};
