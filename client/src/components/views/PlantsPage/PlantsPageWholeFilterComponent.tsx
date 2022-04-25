import React from "react";
import styled from "styled-components";
import {
  FilterCategoryList,
  FilterHeightList,
} from "../../ui/Dropdown/DropdownLists";
import { CitySearch, PriceRange } from "./PlantsPageFilters";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";
import { Dropdown } from "../../ui/Dropdown/Dropdown";

export interface AllFiltresProps {
  desktopDisplay?: string;
  mobileDisplay?: string;
  position?: string;
}

export const FilterContener = styled.div<AllFiltresProps>`
  display: ${({ desktopDisplay }) =>
    desktopDisplay ? desktopDisplay : "block"};
  background: ${({ theme }) => theme.colors.card.secondary};
  height: 75vh;
  margin: 0 2vw;

  @media (max-width: 576px) {
    display: ${({ mobileDisplay }) => (mobileDisplay ? mobileDisplay : "none")};
    position: ${({ position }) => (position ? position : "relative")};
    margin: 0;
  }
`;

const PlantsPageWholeFilterComponent = ({
  mobileDisplay,
  desktopDisplay,
  position,
}: AllFiltresProps) => {
  return (
    <FilterContener
      mobileDisplay={mobileDisplay}
      desktopDisplay={desktopDisplay}
      position={position}
    >
      <Dropdown
        title="Category"
        ico={<Arrow />}
        list={FilterCategoryList}
        desktopWidth="20vw"
        mobileWidth="20vw"
        padding="0.3em 1em 0.3em 1em"
        marginBottom="0"
        border="none"
        borderRadius="0"
        listDesktopWidth="20vw"
        listMobileWidth="20vw"
        position="relative"
      />
      <Dropdown
        title="Height"
        ico={<Arrow />}
        list={FilterHeightList}
        desktopWidth="20vw"
        padding="0.3em 1em 0.3em 1em"
        marginBottom="0"
        border=" none"
        borderRadius="0"
        mobileWidth="20vw"
        listDesktopWidth="20vw"
        listMobileWidth="20vw"
        position="relative"
      />
      <CitySearch />
      <PriceRange />
    </FilterContener>
  );
};

export default PlantsPageWholeFilterComponent;
