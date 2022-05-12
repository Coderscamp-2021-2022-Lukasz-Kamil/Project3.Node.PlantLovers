import React from "react";
import styled from "styled-components";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { PlantPageOfferts } from "./PlantPageOfferts";
import Arrow from "../../../assets/ArrowDownVector.svg";
import { AllFilters } from "./PlantsPageFilters";
import {
  SearchAndFilterContainer,
  SearchInput,
} from "../ProfilePage/YourOfferPage/YourOfferPage";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { Input } from "../../ui/Input/Input.style";

interface PlantsPageContainerProps {
  changeBackground?: boolean;
}

export const PlantsPageContainer = styled(
  FlexWrapper
)<PlantsPageContainerProps>`
  margin: 80px 0;

  @media (max-width: 576px) {
    margin: 10px 0;
    //   ${({ changeBackground }) =>
      changeBackground && `background: #A3A5A8 `};
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
    justify-content: space-between;
    align-items: end;
  }
`;

const PlantsPageSearchAndFilterDesktopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 2vw;
  align-items: end;

  @media (max-width: 1000px) {
    margin-right: 3.4vw;
  }

  @media (max-width: 576px) {
    width: auto;
    margin-right: 0;
  }
`;

export const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    gap: 0;
  }
`;

export const PlantsPageSearchInput = styled(SearchInput)`
  @media (max-width: 576px) {
    display: flex;
  }
`;
export const PlantsPageOnlyMobileSearchInput = styled(PlantsPageSearchInput)`
  display: none;
  width: 100%;
  height: 29.4px;

  @media (max-width: 576px) {
    display: flex;
    margin: 0;
  }
`;

export const PlantsPageSearchDesktopOnlyInput = styled(Input)`
  border: none;
  border-radius: 10px;

  @media (max-width: 750px) {
    width: 200px;
  }

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
    <PlantsPageContainer direction="column">
      <PlantsPageFlexWrapper justifyContent="flex-start">
        <div>
          <EmptyDiv></EmptyDiv>
          <PlantsPageWholeFilterComponent />
        </div>
        <div>
          <PlantsPageSearchAndFilterFlexWrapper>
            <PlantsPageOnlyMobileSearchInput
              placeholder="Search for plant"
              textAlign="left"
            />
            <PlantsPageSearchAndFilterContainer>
              <AllFilters />
              <PlantsPageSearchAndFilterDesktopContainer>
                <PlantsPageSearchDesktopOnlyInput
                  placeholder="Search for plant"
                  width="320px"
                  height="37.78px"
                  textAlign="left"
                />
                <Dropdown
                  title="Sort by"
                  imageSrc={Arrow}
                  imageWidth={20}
                  imageHeigth={20}
                  imageMarginRight="0"
                  imageMobileWidth={15}
                  imageMobileHeigth={15}
                  list={SortList}
                  desktopWidth="200px"
                  mobileWidth="35vw"
                  padding="0.3em 1em 0.3em 1em"
                  marginBottom="0"
                  border="none"
                  borderRadius="10px"
                  listDesktopWidth="200px"
                  listMobileWidth="60vw"
                  listfontSizeMobile="mdl"
                  position="absolute"
                  borderBottom="none"
                  listMobileMargin="42px 50vw 0 0"
                  textPosition="left"
                  listMarginTop="53px"
                  triangleDisplay="flex"
                  headerIconWidth="unset"
                  dropdownHeaderTitleWidth="unset"
                />
              </PlantsPageSearchAndFilterDesktopContainer>
            </PlantsPageSearchAndFilterContainer>
          </PlantsPageSearchAndFilterFlexWrapper>
          <PlantPageOfferts />
        </div>
      </PlantsPageFlexWrapper>
    </PlantsPageContainer>
  );
};

export default PlantsPage;
