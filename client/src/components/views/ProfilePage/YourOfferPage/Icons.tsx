import React from "react";
import styled from "styled-components";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import EditIcon from "../../../../assets/EditVector.svg";
import DeleteVector from "../../../../assets/DeleteVector.svg";
import ArchiveVector from "../../../../assets/ArchiveVector.svg";
import { NavBarButton } from "../../NavigationBar/MainNavigationBar/NavigationBar.style";

const OfferIconsContainer = styled(FlexWrapper)`
  gap: 5px;
`;

const IconButton = styled(NavBarButton)`
  cursor: pointer;

  &:hover ${Icon} {
    filter: none;
  }
`;

const Icons = () => {
  const icons = [
    { src: ArchiveVector, aria: "Archive" },
    { src: EditIcon, aria: "Edit" },
    { src: DeleteVector, aria: "Delete" },
  ];
  return (
    <OfferIconsContainer justifyContent="flex-end">
      {icons.map((icon) => (
        <IconButton key={icon.aria}>
          <Icon
            src={icon.src}
            aria-label={icon.aria}
            width={15}
            height={15}
            mobileWidth={10}
            mobileHeight={10}
          />
        </IconButton>
      ))}
    </OfferIconsContainer>
  );
};

export default Icons;
