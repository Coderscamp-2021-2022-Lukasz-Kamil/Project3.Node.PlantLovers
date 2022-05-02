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

export const YourOfferPageContainer = styled(FlexWrapper)`
  margin: 80px 0;

  @media (max-width: 576px) {
    margin: 10px 0;
  }
`;

export const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const EmptyDiv = styled.div`
  width: 24vw;
  height: 53.78px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const PlantsPageSearchAndFilterContainer = styled(
  SearchAndFilterContainer
)`
  width: 100%;
  @media (max-width: 576px) {
    width: 80%;
    justify-content: space-between;
  }
`;

const PlantsPageSearchAndFilterDesktopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 2vw;

  @media (max-width: 1000px) {
    margin-right: 3.4vw;
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
  border-radius: 10px;
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
  return (
    <YourOfferPageContainer direction="column">
      <PlantsPageFlexWrapper justifyContent="flex-start">
        <div>
          <EmptyDiv></EmptyDiv>
          <PlantsPageWholeFilterComponent />
        </div>
        <div>
          <PlantsPageSearchAndFilterFlexWrapper>
            <PlantsPageOnlyMobileSearchInput
              placeholder="Search for plant"
              width="320px"
              height="35px"
            />
            <PlantsPageSearchAndFilterContainer>
              <AllFilters />
              <PlantsPageSearchAndFilterDesktopContainer>
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
                />
              </PlantsPageSearchAndFilterDesktopContainer>
            </PlantsPageSearchAndFilterContainer>
          </PlantsPageSearchAndFilterFlexWrapper>
          <PlantPageOfferts />
        </div>
      </PlantsPageFlexWrapper>
    </YourOfferPageContainer>
  );
};

export default PlantsPage;
