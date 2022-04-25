import React from "react";
import styled from "styled-components";
import {
  FilterCategoryList,
  FilterHeightList,
} from "../../ui/Dropdown/DropdownLists";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { PlantPageOfferts } from "./PlantPageOfferts";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";
import { PlantsDropdown } from "./PlantsDropdown";
import { CitySearch, PriceRange } from "./PlantsPageFilters";
import {
  SearchAndFilterContainer,
  SearchInput,
} from "../ProfilePage/YourOfferPage/YourOfferPage";

const YourOfferPageContainer = styled(FlexWrapper)`
  margin: 100px 0;
`;

const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;
`;

const EmptyDiv = styled.div`
  width: 25vw;
`;

const PlantsPageSearchAndFilterContainer = styled(SearchAndFilterContainer)`
  width: 72%;
`;

const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
`;

const FilterContener = styled.div`
  background: ${({ theme }) => theme.colors.card.secondary};
  height: 75vh;
  margin: 0 2vw;
`;

const PlantsPage = () => {
  return (
    <YourOfferPageContainer direction="column">
      <PlantsPageSearchAndFilterFlexWrapper>
        <EmptyDiv></EmptyDiv>
        <PlantsPageSearchAndFilterContainer>
          <SearchInput
            placeholder="Search for plant"
            width="320px"
            height="35px"
          />
          <SearchInput placeholder="Sort by" width="320px" height="35px" />
        </PlantsPageSearchAndFilterContainer>
      </PlantsPageSearchAndFilterFlexWrapper>

      <PlantsPageFlexWrapper justifyContent="flex-start">
        <FilterContener>
          <PlantsDropdown
            title="Category"
            ico={<Arrow />}
            list={FilterCategoryList}
          />
          <PlantsDropdown
            title="Height"
            ico={<Arrow />}
            list={FilterHeightList}
          />
          <CitySearch />
          <PriceRange />
        </FilterContener>
        <PlantPageOfferts />
      </PlantsPageFlexWrapper>
    </YourOfferPageContainer>
  );
};

export default PlantsPage;
