import React from "react";
import styled from "styled-components";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import EditIcon from "../../../../assets/EditVector.svg";
import DeleteVector from "../../../../assets/DeleteVector.svg";
import ArchiveVector from "../../../../assets/ArchiveVector.svg";
import { Button } from "../../../ui/Button/Button.style";

const OfferIconsContainer = styled(FlexWrapper)`
  gap: 5px;
`;

const IconButton = styled(Button)`
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
        <IconButton
          key={icon.aria}
          background="transparent"
          width="auto"
          height="auto"
          padding="0"
          mobileWidth="auto"
          mobileHeight="auto"
        >
          <Icon
            src={icon.src}
            aria-label={icon.aria}
            width={15}
            height={15}
            mobileWidth={10}
            mobileHeight={10}
            marginRight="0"
          />
        </IconButton>
      ))}
    </OfferIconsContainer>
  );
};

export default Icons;
