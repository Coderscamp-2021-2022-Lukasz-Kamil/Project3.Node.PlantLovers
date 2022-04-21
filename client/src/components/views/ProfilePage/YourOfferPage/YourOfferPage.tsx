import React from "react";
import styled from "styled-components";
import { FilterButton } from "../../../ui/Button/Button.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";
import { Card } from "../../../ui/Card/Card.style";
import { Input } from "../../../ui/Input/Input.style";
import { Typography } from "../../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { GridContainer } from "../../../wrappers/FlexCenter/GridContainer.style";
import { ReactComponent as RandomImage } from "../../OfferPage/examplePlantPhoto.svg";

const YourOfferPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const YourOfferGridContainer = styled(GridContainer)`
  grid-gap: 4vw;
`;
const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const OfferCard = styled(Card)`
  height: 33vh;
  padding: 0;
`;

const CardImage = styled(RandomImage)`
  width: 100%;
  height: 90%;
`;

const OfferIconsContainer = styled(FlexWrapper)`
  gap: 0;
`;
const PriceTypography = styled(Typography)`
  text-align: end;
`;

const YourOfferPage = () => {
  return (
    <YourOfferPageContainer>
      <div>
        <SearchAndFilterContainer>
          <Input placeholder="Search for plant" width="320px" height={35} />
          <FilterButtonsContainer>
            <FilterButton>Active</FilterButton>
            <FilterButton>Awaiting</FilterButton>
            <FilterButton>Archived</FilterButton>
          </FilterButtonsContainer>
        </SearchAndFilterContainer>
        <YourOfferGridContainer>
          <OfferCard width="200px">
            <CardImage />
            <FlexWrapper justifyContent="space-between">
              <div>
                <Typography fontSize="xxs">Jarek</Typography>
                <Typography fontSize="xxxs">Żoliborz</Typography>
              </div>
              <div>
                <PriceTypography fontSize="xxs">32$</PriceTypography>
                <OfferIconsContainer justifyContent="flex-end">
                  <Icon src="EditVector.svg" width={15} height={15} />
                  <Icon src="DeleteVector.svg" width={15} height={15} />
                </OfferIconsContainer>
              </div>
            </FlexWrapper>
          </OfferCard>
          <OfferCard width="200px"></OfferCard>
          <OfferCard width="200px"></OfferCard>
          <OfferCard width="200px"></OfferCard>
        </YourOfferGridContainer>
      </div>
    </YourOfferPageContainer>
  );
};

export default YourOfferPage;
