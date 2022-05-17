import React from "react";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import {
  OffersInfoFlexWrapper,
  PriceTypography,
} from "../ProfilePage/YourOfferPage/Offers";
import {
  PlantPageImageCard,
  PlantPageOfferCard,
  PlantPageImageContainer,
  PlantsPageGridContainer,
} from "./PlantPageOffers.styled";
import Offer from "../../../shared/intefaces/offer.interface";
import { NavLink } from "react-router-dom";

interface PlantPageOffersProps {
  offers?: Offer[];
}

export const PlantPageOffers: React.FC<PlantPageOffersProps> = ({ offers }) => {
  return (
    <PlantsPageGridContainer smallScreenColumns={2}>
      {offers &&
        offers.map((offer) => (
          <PlantPageOfferCard width="auto" color="offer" key={offer._id}>
            <NavLink to={`offer/${offer._id}`}>
              <PlantPageImageContainer>
                <PlantPageImageCard
                  alt="plantPhoto"
                  src={offer.photos[0].url}
                ></PlantPageImageCard>
              </PlantPageImageContainer>
            </NavLink>
            <FlexWrapper justifyContent="space-between" direction="column">
              <OffersInfoFlexWrapper justifyContent="space-between">
                <Typography fontSize="xxs" fontSizeMobile="xs">
                  {offer.title}
                </Typography>
                <PriceTypography fontSize="xxs" fontSizeMobile="xs">
                  {offer.price}$
                </PriceTypography>
              </OffersInfoFlexWrapper>
              <OffersInfoFlexWrapper>
                <Typography fontSize="xxxs" fontSizeMobile="xs">
                  {offer.city}
                </Typography>
              </OffersInfoFlexWrapper>
            </FlexWrapper>
          </PlantPageOfferCard>
        ))}
    </PlantsPageGridContainer>
  );
};
