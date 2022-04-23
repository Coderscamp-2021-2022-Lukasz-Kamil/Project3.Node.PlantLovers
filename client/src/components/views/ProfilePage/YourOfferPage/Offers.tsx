import React from "react";
import styled from "styled-components";
import { Card } from "../../../ui/Card/Card.style";
import { Typography } from "../../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { GridContainer } from "../../../wrappers/FlexCenter/GridContainer.style";
import { ReactComponent as RandomImage } from "../../OfferPage/examplePlantPhoto.svg";
import Icons from "./Icons";
import useFetchData from "../../../../hooks/UseFetch";
import {
  createInferTypeNode,
  getImpliedNodeFormatForFile,
  idText,
} from "typescript";
import { Offer, Photo } from "./OfferModel";

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

export const Offers = () => {
  const { response } = useFetchData({
    url: "/offers",
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
          <ImageContainer>
            <CardImage>{offer.photos[0].url}</CardImage>
          </ImageContainer>
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
