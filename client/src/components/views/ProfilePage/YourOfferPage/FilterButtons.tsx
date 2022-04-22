import React from "react";
import styled from "styled-components";
import { FilterButton } from "../../../ui/Button/Button.style";

const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const OfferFilterButton = styled(FilterButton)`
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
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.sm}px;
    width: ${({ width }) => (width ? width : 68)}px;
    height: ${({ height }) => (height ? height : 21)}px;
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
        <OfferFilterButton key={button.name}>{button.name}</OfferFilterButton>
      ))}
    </FilterButtonsContainer>
  );
};
