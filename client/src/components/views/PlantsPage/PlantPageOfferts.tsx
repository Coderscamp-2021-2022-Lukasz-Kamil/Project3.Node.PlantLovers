import React from "react";
import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { ImageCard } from "../../ui/ImageCard/ImageCard.style";
import {
  ImageContainer,
  OfferCard,
  OffersInfoFlexWrapper,
  PriceTypography,
  YourOfferGridContainer,
} from "../ProfilePage/YourOfferPage/Offers";
import useFetchData from "../../../hooks/UseFetch";
import { Offer } from "../ProfilePage/YourOfferPage/OfferModel";
import { NavLink } from "react-router-dom";
const PlantsPageGridContainer = styled(YourOfferGridContainer)`
  margin-right: 2vw;

  @media (max-width: 576px) {
    grid-gap: 5vw 5vw;
  }
`;
const PlantPageImageCard = styled(ImageCard)`
  @media (max-width: 1000px) {
    height: ${({ mobileImageSize }) =>
      mobileImageSize?.height ? mobileImageSize.height : "23vh"};
  }
`;
const PlantPageOfferCard = styled(OfferCard)`
  @media (max-width: 1000px) {
    width: 20vw;
  }

  @media (max-width: 576px) {
    width: 40vw;
  }
`;

const PlantPageImageContainer = styled(ImageContainer)`
  @media (max-width: 1000px) {
    width: 20vw;
  }

  @media (max-width: 576px) {
    width: 40vw;
  }
`;

export const PlantPageOfferts = () => {
  const { response } = useFetchData({
    url: `/offers`,
    method: "GET",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  });

  const offers: Offer[] = response;

  return (
    <PlantsPageGridContainer smallScreenColumns={2}>
      <PlantsPageGridContainer smallScreenColumns={2}>
        {offers.map((offer) => (
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
    </PlantsPageGridContainer>
  );
};
