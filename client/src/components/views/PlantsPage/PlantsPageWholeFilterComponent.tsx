import React from "react";
import styled from "styled-components";
import {
  FilterCategoryList,
  FilterHeightList,
} from "../../ui/Dropdown/DropdownLists";
import { PlantsDropdown } from "./PlantsDropdown";
import { CitySearch, PriceRange } from "./PlantsPageFilters";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";

export interface AllFiltresProps {
  desktopDisplay?: string;
  mobileDisplay?: string;
}

export const FilterContener = styled.div<AllFiltresProps>`
  display: ${({ desktopDisplay }) =>
    desktopDisplay ? desktopDisplay : "block"};
  background: ${({ theme }) => theme.colors.card.secondary};
  height: 75vh;
  margin: 0 2vw;

  @media (max-width: 576px) {
    display: ${({ mobileDisplay }) => (mobileDisplay ? mobileDisplay : "none")};
  }
`;

const PlantsPageWholeFilterComponent = ({
  mobileDisplay,
  desktopDisplay,
}: AllFiltresProps) => {
  return (
    <FilterContener
      mobileDisplay={mobileDisplay}
      desktopDisplay={desktopDisplay}
    >
      <PlantsDropdown
        title="Category"
        ico={<Arrow />}
        list={FilterCategoryList}
      />
      <PlantsDropdown title="Height" ico={<Arrow />} list={FilterHeightList} />
      <CitySearch />
      <PriceRange />
    </FilterContener>
  );
};

export default PlantsPageWholeFilterComponent;
