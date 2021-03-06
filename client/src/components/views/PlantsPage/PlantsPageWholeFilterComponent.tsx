import React from "react";
import styled from "styled-components";
import {
  FilterCategoryList,
  FilterHeightList,
} from "../../ui/Dropdown/DropdownLists";
import { CitySearch, PriceRange } from "./PlantsPageFilters";
import Arrow from "../../../assets/ArrowDownVector.svg";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import {
  TriangleAboveList,
  TriangleAboveListContainer,
  TriangleAboveListWrapper,
} from "../../ui/Dropdown/Dropdown.style";

export interface AllFiltresProps {
  desktopDisplay?: string;
  mobileDisplay?: string;
  position?: string;
  filterContainerHeigth?: string;
}

export const FilterContener = styled.div<AllFiltresProps>`
  display: ${({ desktopDisplay }) =>
    desktopDisplay ? desktopDisplay : "block"};
  background: ${({ theme }) => theme.colors.card.secondary};
  height: ${({ filterContainerHeigth }) =>
    filterContainerHeigth ? filterContainerHeigth : " 75vh"};
  margin: 0 2vw;

  @media (max-width: 576px) {
    display: ${({ mobileDisplay }) => (mobileDisplay ? mobileDisplay : "none")};
    position: ${({ position }) => (position ? position : "relative")};
    margin: 14px 15vw 0;
  }
`;

export const TriangleAboveListContainerWholeFilter = styled(
  TriangleAboveListContainer
)`
  @media (max-width: 576px) {
    display: flex;
    justify-content: start;
  }
`;

const PlantsPageWholeFilterComponent = ({
  mobileDisplay,
  desktopDisplay,
  position,
  filterContainerHeigth,
}: AllFiltresProps) => {
  return (
    <FilterContener
      mobileDisplay={mobileDisplay}
      desktopDisplay={desktopDisplay}
      position={position}
      filterContainerHeigth={filterContainerHeigth}
    >
      <TriangleAboveListContainerWholeFilter justifyContent="flex-end">
        <TriangleAboveListWrapper
          triangleMobileJustify="end"
          triangleWrapperMobileWidth="20vw"
        >
          <TriangleAboveList />
        </TriangleAboveListWrapper>
      </TriangleAboveListContainerWholeFilter>
      <Dropdown
        title="Category"
        imageSrc={Arrow}
        imageWidth={20}
        imageHeigth={20}
        iconMobileDisplay="none"
        imageMarginRight="0"
        list={FilterCategoryList}
        desktopWidth="20vw"
        mobileWidth="60vw"
        fontSizeMobile="lg"
        padding="0.3em 1em 0.3em 1em"
        marginBottom="0"
        border="none"
        borderRadius="0"
        listDesktopWidth="20vw"
        listMobileWidth="60vw"
        listfontSizeMobile="mdl"
        position="relative"
        borderBottom="1px solid #A59E9E"
        textPosition="left"
      />
      <Dropdown
        title="Height"
        imageSrc={Arrow}
        imageWidth={20}
        imageHeigth={20}
        iconMobileDisplay="none"
        imageMarginRight="0"
        list={FilterHeightList}
        desktopWidth="20vw"
        mobileWidth="60vw"
        fontSizeMobile="lg"
        padding="0.3em 1em 0.3em 1em"
        marginBottom="0"
        border=" none"
        borderRadius="0"
        listDesktopWidth="20vw"
        listMobileWidth="60vw"
        listfontSizeMobile="mdl"
        position="relative"
        borderBottom="1px solid #A59E9E"
        textPosition="left"
      />
      <CitySearch />
      <PriceRange />
    </FilterContener>
  );
};

export default PlantsPageWholeFilterComponent;
