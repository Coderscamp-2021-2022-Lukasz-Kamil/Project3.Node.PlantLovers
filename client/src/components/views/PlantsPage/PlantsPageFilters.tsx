import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../ui/Input/Input.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import ArrowUp from "../../../assets/ArrowDownVector.svg";
import { FilterContener, PlantsPageFlexWrapper } from "./PlantsPage";
import { PlantPageOfferts } from "./PlantPageOfferts";
import { PlantsDropdown } from "./PlantsDropdown";
import {
  FilterCategoryList,
  FilterHeightList,
} from "../../ui/Dropdown/DropdownLists";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";

const FilterButton = styled.button`
  width: 20vw;
  background: ${({ theme }) => theme.colors.card.secondary};
  padding: 0.48em 1em 0.48em 1em;
  font-size: ${({ theme }) => theme.size.desktop.md}px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textColor};
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.size.desktop.sm}px;
    width: 25vw;
  }
`;
const ArrowImage = styled.img`
  position: absolute;
`;

const FiltersInputContainer = styled(FlexWrapper)`
  position: relative;
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
`;

const AllFiltersFilterButton = styled(FilterButton)`
  display: none;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const CitySearch = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <FilterButton onClick={() => setShow(!show)}>
        City{" "}
        <ArrowContainer>
          <ArrowImage src={ArrowUp} />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="Find a city"
            width="19vw"
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
          <ArrowImage src={ArrowUp} />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="From"
            width="9vw"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
          />
          <DropdownInput
            placeholder="To"
            width="9vw"
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
        <ArrowContainer>
          <ArrowImage src={ArrowUp} />
        </ArrowContainer>
      </AllFiltersFilterButton>
      {show ? (
        <PlantsPageWholeFilterComponent
          desktopDisplay="none"
          mobileDisplay="block"
        />
      ) : null}
    </div>
  );
};
