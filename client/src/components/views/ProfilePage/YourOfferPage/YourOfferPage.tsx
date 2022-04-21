import React from "react";
import styled from "styled-components";
import { FilterButton } from "../../../ui/Button/Button.style";
import { Card } from "../../../ui/Card/Card.style";
import { Input } from "../../../ui/Input/Input.style";
import { Typography } from "../../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { GridContainer } from "../../../wrappers/FlexCenter/GridContainer.style";
import { ReactComponent as RandomImage } from "../../OfferPage/examplePlantPhoto.svg";

const YourOfferPageContainer = styled.div`
  width: 75vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const OfferCard = styled(Card)`
  width: 11vw;
  height: 33vh;
  padding: 0;
`;

const CardImage = styled(RandomImage)`
  width: 100%;
  height: 90%;
`;

const PhotoInformationConstainer = styled(FlexWrapper)``;

const YourOfferPage = () => {
  return (
    <YourOfferPageContainer>
      <SearchAndFilterContainer>
        <Input placeholder="Search for plant" />
        <FilterButtonsContainer>
          <FilterButton>Active</FilterButton>
          <FilterButton>Awaiting</FilterButton>
          <FilterButton>Archived</FilterButton>
        </FilterButtonsContainer>
      </SearchAndFilterContainer>
      <GridContainer>
        <OfferCard width="15vw">
          <CardImage />
          <PhotoInformationConstainer>
            <div>
              <Typography fontSize="xxs">Jarek</Typography>
              <Typography fontSize="xxxs">Żoliborz</Typography>
            </div>
          </PhotoInformationConstainer>
        </OfferCard>
        <OfferCard width="15vw"></OfferCard>
        <OfferCard width="15vw"></OfferCard>
        <OfferCard width="15vw"></OfferCard>
      </GridContainer>
    </YourOfferPageContainer>
  );
};

export default YourOfferPage;
