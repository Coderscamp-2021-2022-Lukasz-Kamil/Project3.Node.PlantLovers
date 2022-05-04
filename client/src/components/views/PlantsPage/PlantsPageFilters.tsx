import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../ui/Input/Input.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Arrow from "../../../assets/ArrowDownVector.svg";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";

const FilterButton = styled.button`
  width: 20vw;
  background: ${({ theme }) => theme.colors.card.secondary};
  padding: 0.48em 1em 0.48em 1em;
  font-size: ${({ theme }) => theme.size.desktop.mds}px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textInactive};
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }

  @media (max-width: 576px) {
    width: 60vw;
    font-size: ${({ theme }) => theme.size.mobile.lg}px;
  }
`;
const ArrowImage = styled.img`
  position: absolute;

  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;

const FiltersInputContainer = styled(FlexWrapper)`
  position: relative;

  @media (max-width: 576px) {
    width: 60vw;
  }
`;

const DropdownInput = styled(Input)`
  margin: 5px 0;
`;

const ArrowContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: end;
  padding: 0 1em 0 1em;

  @media (max-width: 576px) {
    display: none;
  }
`;

const ArrowContainerAllFilters = styled(ArrowContainer)`
  @media (max-width: 576px) {
    display: flex;
  }
`;

const AllFiltersFilterButton = styled(FilterButton)`
  display: none;
  border-bottom: none;
  border-radius: 10px;

  @media (max-width: 576px) {
    display: flex;
    font-size: ${({ theme }) => theme.size.mobile.md}px;
    width: 35vw;
  }
`;

export const CitySearch = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <FilterButton onClick={() => setShow(!show)}>
        City{" "}
        <ArrowContainer>
          <ArrowImage src={Arrow} />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="Find a city"
            width="95%"
            height="35px"
            fontSizeDesktop="sm"
          />
        </FiltersInputContainer>
      ) : null}
    </div>
  );
};

export const PriceRange = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <FilterButton onClick={() => setShow(!show)}>
        Price{" "}
        <ArrowContainer>
          <ArrowImage src={Arrow} />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="From"
            width="45%"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
          />
          <DropdownInput
            placeholder="To"
            width="45%"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
          />
        </FiltersInputContainer>
      ) : null}
    </div>
  );
};

export const AllFilters = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <AllFiltersFilterButton onClick={() => setShow(!show)}>
        Filters{" "}
        <ArrowContainerAllFilters>
          <ArrowImage src={Arrow} />
        </ArrowContainerAllFilters>
      </AllFiltersFilterButton>
      {show ? (
        <PlantsPageWholeFilterComponent
          desktopDisplay="none"
          mobileDisplay="block"
          position="absolute"
          filterContainerHeigth="auto"
        />
      ) : null}
    </div>
  );
};
