import React from "react";
import styled from "styled-components";
import { Button } from "../../../ui/Button/Button.style";

const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const OfferFilterButton = styled(Button)`
  @media (max-width: 950px) {
    width: 70px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    width: 55px;
    height: 25px;
    font-size: 12px;
  }

  @media (max-width: 576px) {
    width: 68px;
    height: 21px;
  }
`;

export const FilterButtons = () => {
  const buttons = [
    { name: "Active" },
    { name: "Awaiting" },
    { name: "Archived" },
  ];
  return (
    <FilterButtonsContainer>
      {buttons.map((button) => (
        <OfferFilterButton
          key={button.name}
          color="secondaryTextInactive"
          background="secondary"
          fontSizeDesktop="sm"
          fontSizeMobile="sm"
          fontWeight="regular"
          width="93px"
          height="35px"
          borderRadius="10"
        >
          {button.name}
        </OfferFilterButton>
      ))}
    </FilterButtonsContainer>
  );
};
