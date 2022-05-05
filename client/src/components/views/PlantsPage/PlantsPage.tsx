import React from "react";
import styled from "styled-components";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { PlantPageOfferts } from "./PlantPageOfferts";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";
import { AllFilters } from "./PlantsPageFilters";
import {
  SearchAndFilterContainer,
  SearchInput,
} from "../ProfilePage/YourOfferPage/YourOfferPage";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { useState } from "react";

export const YourOfferPageContainer = styled(FlexWrapper)`
  margin: 100px 0;
`;

export const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const EmptyDiv = styled.div`
  width: 25vw;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const PlantsPageSearchAndFilterContainer = styled(
  SearchAndFilterContainer
)`
  width: 72%;

  @media (max-width: 576px) {
    width: 80%;
    justify-content: space-between;
  }
`;

export const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
`;

export const PlantsPageSearchInput = styled(SearchInput)`
  @media (max-width: 576px) {
    display: flex;
  }
`;
export const PlantsPageOnlyMobileSearchInput = styled(PlantsPageSearchInput)`
  display: none;
  width: 80%;

  @media (max-width: 576px) {
    display: flex;
    margin: 0;
  }
`;

export const PlantsPageSearchDesktopOnlyInput = styled(SearchInput)`
  @media (max-width: 576px) {
    display: none;
  }
`;

export const FilterContener = styled.div`
  background: ${({ theme }) => theme.colors.card.secondary};
  height: 75vh;
  margin: 0 2vw;

  @media (max-width: 576px) {
    display: none;
  }
`;

const PlantsPage = () => {
  const [sortOption, setSortOption] = useState<string | undefined>();

  const onOptionChosen = (option: string) => {
    setSortOption(option);
  };
  return (
    <YourOfferPageContainer direction="column">
      <PlantsPageSearchAndFilterFlexWrapper>
        <PlantsPageOnlyMobileSearchInput
          placeholder="Search for plant"
          width="320px"
          height="35px"
        />
        <EmptyDiv></EmptyDiv>
        <PlantsPageSearchAndFilterContainer>
          <AllFilters />
          <PlantsPageSearchDesktopOnlyInput
            placeholder="Search for plant"
            width="320px"
            height="35px"
          />
          <Dropdown
            title="Sort by"
            ico={<Arrow />}
            list={SortList}
            desktopWidth="20vw"
            mobileWidth="30vw"
            padding="0.3em 1em 0.3em 1em"
            marginBottom="0"
            border="none"
            borderRadius="0"
            listDesktopWidth="20vw"
            listMobileWidth="30vw"
            position="absolute"
            onOptionChosen={onOptionChosen}
          />
        </PlantsPageSearchAndFilterContainer>
      </PlantsPageSearchAndFilterFlexWrapper>
      <PlantsPageFlexWrapper justifyContent="flex-start">
        <PlantsPageWholeFilterComponent />
        <PlantPageOfferts sortBy={sortOption} />
      </PlantsPageFlexWrapper>
    </YourOfferPageContainer>
  );
};

export default PlantsPage;
