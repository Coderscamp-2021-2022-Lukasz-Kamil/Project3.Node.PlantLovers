import React from "react";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { PlantPageOfferts } from "./PlantPageOfferts";
import Arrow from "../../../assets/ArrowDownVector.svg";
import { AllFilters } from "./PlantsPageFilters";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import {
  EmptyDiv,
  PlantsPageContainer,
  PlantsPageFlexWrapper,
  PlantsPageOnlyMobileSearchInput,
  PlantsPageSearchAndFilterContainer,
  PlantsPageSearchAndFilterDesktopContainer,
  PlantsPageSearchAndFilterFlexWrapper,
  PlantsPageSearchDesktopOnlyInput,
} from "./PlantPage.styled";

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
