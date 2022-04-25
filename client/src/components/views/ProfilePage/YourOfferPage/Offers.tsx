import React from "react";
import styled from "styled-components";
import { Card } from "../../../ui/Card/Card.style";
import { Typography } from "../../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { GridContainer } from "../../../wrappers/FlexCenter/GridContainer.style";
import { ImageCard } from "../../../ui/ImageCard/ImageCard.style";
import Icons from "./Icons";
import useFetchData from "../../../../hooks/UseFetch";
import { useCookies } from "react-cookie";

import { Offer } from "./OfferModel";

export const OfferCard = styled(Card)`
  height: auto;
  width: 15vw;
  padding: 0;

  @media (max-width: 1000px) {
    width: 25vw;
  }

  @media (max-width: 576px) {
    width: 40vw;
  }
`;

export const OfferCardButton = styled.button`
  background: ${({ theme }) => theme.colors.button.transparent};
  border: none;
  cursor: pointer;
`;

export const YourOfferGridContainer = styled(GridContainer)`
  grid-gap: 4vw 4vw;

  @media (max-width: 576px) {
    grid-gap: 10vw 10vw;
  }
`;

export const ImageContainer = styled.div`
  width: 15vw;

  @media (max-width: 1000px) {
    width: 25vw;
  }

  @media (max-width: 576px) {
    width: 40vw;
  }
`;

export const OffersInfoFlexWrapper = styled(FlexWrapper)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PriceTypography = styled(Typography)`
  text-align: end;
`;

export const Offers = () => {
  const [userIdCookie] = useCookies(["user-id"]);
  console.log(userIdCookie["user-id"]);
  const { response } = useFetchData({
    url: `/offers/${userIdCookie["user-id"]}`,
    method: "GET",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  });

  const offers: Offer[] = response;

  return (
    <YourOfferGridContainer smallScreenColumns={2}>
      {offers.map((offer) => (
        <OfferCard width="auto" color="offer" key={offer._id}>
          <OfferCardButton>
            <ImageContainer>
              <ImageCard alt="plantPhoto" src={offer.photos[0].url}></ImageCard>
            </ImageContainer>
          </OfferCardButton>
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
              <Icons />
            </OffersInfoFlexWrapper>
          </FlexWrapper>
        </OfferCard>
      ))}
    </YourOfferGridContainer>
  );
};
