import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownHeaderTitle,
  DropdownHeaderIcon,
  List,
  ListItem,
  Wrapper,
} from "./Dropdown.style";
import { IDropdown, Item } from "./Dropdown.intefrace";

export const Dropdown = ({
  title,
  ico,
  list,
  desktopWidth,
  mobileWidth,
  marginBottom,
  padding,
  fontSizeDesktop,
  fontSizeMobile,
  listDesktopWidth,
  listMobileWidth,
  position,
  border,
  borderRadius,
  onOptionChosen,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const toggling = () => setIsOpen((state) => !state);

  const handleSelected = (value: Item) => {
    setSelectedOption(value.name);
    setIsOpen(false);
    if (onOptionChosen) {
      onOptionChosen(value.name);
    }
  };
  return (
    <DropdownContainer>
      <Wrapper
        onClick={toggling}
        desktopWidth={desktopWidth}
        mobileWidth={mobileWidth}
        marginBottom={marginBottom}
        padding={padding}
        border={border}
        fontSizeDesktop={fontSizeDesktop}
        fontSizeMobile={fontSizeMobile}
        borderRadius={borderRadius}
      >
        <DropdownHeader>
          <DropdownHeaderTitle>{selectedOption || title}</DropdownHeaderTitle>
          <DropdownHeaderIcon>{ico}</DropdownHeaderIcon>
        </DropdownHeader>
      </Wrapper>
      {isOpen && (
        <List
          listDesktopWidth={listDesktopWidth}
          listMobileWidth={listMobileWidth}
          position={position}
        >
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
