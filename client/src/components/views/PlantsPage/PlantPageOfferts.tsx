import React from "react";
import styled from "styled-components";
import { Card } from "../../ui/Card/Card.style";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Icons from "../ProfilePage/YourOfferPage/Icons";
import { ReactComponent as RandomImage } from "../../../assets/examplePlantPhoto.svg";
import { GridContainer } from "../../wrappers/FlexCenter/GridContainer.style";
import useFetchData from "../../../hooks/UseFetch";
import { Offer } from "../ProfilePage/YourOfferPage/OfferModel";
import { ImageCard } from "../../ui/ImageCard.style";

const OfferCard = styled(Card)`
  height: 36vh;
  padding: 0;

  @media (max-width: 1050px) {
    height: auto;
  }
`;

const CardImage = styled(RandomImage)`
  width: 100%;
  height: 100%;
`;

const YourOfferGridContainer = styled(GridContainer)`
  grid-gap: 1vw 4vw;

  @media (max-width: 1050px) {
    grid-gap: 2vw 2vw;
  }

  @media (max-width: 576px) {
    grid-gap: 10vw 10vw;
  }
`;

const PriceTypography = styled(Typography)`
  text-align: end;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 86%;
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
    <YourOfferGridContainer smallScreenColumns={2}>
      {offers.map((offer) => (
        <OfferCard width="auto" color="offer" key={offer._id}>
          {/* <ImageContainer>{offer.photos[0].url}</ImageContainer> */}
          <ImageCard
            alt="plantPhoto"
            src={offer.photos[0].url}
            height="auto"
          ></ImageCard>
          <FlexWrapper justifyContent="space-between">
            <div>
              <Typography fontSize="xxs" fontSizeMobile="xs">
                {offer.title}
              </Typography>
              <Typography fontSize="xxxs" fontSizeMobile="xs">
                {offer.city}
              </Typography>
            </div>
            <div>
              <PriceTypography fontSize="xxs" fontSizeMobile="xs">
                {offer.price}$
              </PriceTypography>
              <Icons />
            </div>
          </FlexWrapper>
        </OfferCard>
      ))}
    </YourOfferGridContainer>
  );
};
