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

const YourOfferPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 100px 0;
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
    <YourOfferPageContainer>
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
