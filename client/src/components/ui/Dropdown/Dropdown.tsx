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
import { Icon } from "../ButtonWithIcon/ButtonWithIcon";

export const Dropdown = ({
  title,
  imageSrc,
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
  borderBottom,
  borderRadius,
  imageWidth,
  imageHeigth,
  imageMobileWidth,
  imageMobileHeigth,
  imageMarginRight,
  listfontSizeMobile,
  smallerScreenIconPosition,
  listMobileMargin,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [rotating, setRotate] = useState(false);
  const toggling = () => setIsOpen((state) => !state);
  const rotateArrow = () => setRotate((state) => !state);
  const wrapperFunction = () => {
    rotateArrow();
    toggling();
  };
  const handleSelected = (value: Item) => {
    setSelectedOption(value.name);
    setIsOpen(false);
    rotateArrow();
  };
  return (
    <DropdownContainer>
      <Wrapper
        onClick={wrapperFunction}
        desktopWidth={desktopWidth}
        mobileWidth={mobileWidth}
        marginBottom={marginBottom}
        padding={padding}
        border={border}
        borderBottom={borderBottom}
        fontSizeDesktop={fontSizeDesktop}
        fontSizeMobile={fontSizeMobile}
        borderRadius={borderRadius}
      >
        <DropdownHeader>
          <DropdownHeaderTitle>{selectedOption || title}</DropdownHeaderTitle>
          <DropdownHeaderIcon
            smallerScreenIconPosition={smallerScreenIconPosition}
          >
            <Icon
              src={imageSrc}
              width={imageWidth}
              height={imageHeigth}
              mobileWidth={imageMobileWidth}
              mobileHeight={imageMobileHeigth}
              marginRight={imageMarginRight}
              rotating={rotating}
            />
          </DropdownHeaderIcon>
        </DropdownHeader>
      </Wrapper>
      {isOpen && (
        <List
          listDesktopWidth={listDesktopWidth}
          listMobileWidth={listMobileWidth}
          position={position}
          listfontSizeMobile={listfontSizeMobile}
          listMobileMargin={listMobileMargin}
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
