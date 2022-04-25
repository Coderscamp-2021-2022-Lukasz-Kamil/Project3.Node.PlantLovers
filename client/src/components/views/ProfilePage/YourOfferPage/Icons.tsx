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

export interface IconsProps {
  onArchiveButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onEditButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Icons = (props: IconsProps) => {
  return (
    <OfferIconsContainer justifyContent="flex-end">
      <IconButton
        key="Archive"
        background="transparent"
        width="auto"
        height="auto"
        padding="0"
        mobileWidth="auto"
        mobileHeight="auto"
        onClick={props.onArchiveButtonClick}
      >
        <Icon
          src={ArchiveVector}
          aria-label="Archive"
          width={15}
          height={15}
          mobileWidth={10}
          mobileHeight={10}
          marginRight="0"
        />
      </IconButton>
      <IconButton
        key="Edit"
        background="transparent"
        width="auto"
        height="auto"
        padding="0"
        mobileWidth="auto"
        mobileHeight="auto"
        onClick={props.onEditButtonClick}
      >
        <Icon
          src={EditIcon}
          aria-label="Edit"
          width={15}
          height={15}
          mobileWidth={10}
          mobileHeight={10}
          marginRight="0"
        />
      </IconButton>
      <IconButton
        key="Delete"
        background="transparent"
        width="auto"
        height="auto"
        padding="0"
        mobileWidth="auto"
        mobileHeight="auto"
        onClick={props.onDeleteButtonClick}
      >
        <Icon
          src={DeleteVector}
          aria-label="Delete"
          width={15}
          height={15}
          mobileWidth={10}
          mobileHeight={10}
          marginRight="0"
        />
      </IconButton>
    </OfferIconsContainer>
  );
};

export default Icons;
