import React from "react";
import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Icons from "../ProfilePage/YourOfferPage/Icons";
import { ImageCard } from "../../ui/ImageCard/ImageCard.style";
import ExamplePhoto from "../../../assets/examplePlantPhoto.svg";
import {
  ImageContainer,
  OfferCard,
  OfferCardButton,
  OffersInfoFlexWrapper,
  PriceTypography,
  YourOfferGridContainer,
} from "../ProfilePage/YourOfferPage/Offers";

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
    width: 30vw;
  }
`;

const PlantPageImageContainer = styled(ImageContainer)`
  @media (max-width: 1000px) {
    width: 20vw;
  }

  @media (max-width: 576px) {
    width: 30vw;
  }
`;

//Temporary Array//
export const PlantPageOfferts = () => {
  const offers = [
    {
      _id: "EFFF3Eessdf",
      title: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "EFFgdssdEessdf",
      title: "Mandragora",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "EFFgdss",
      title: "ARG",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "EdsfFFgdss",
      title: "GFZfg",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "ESGEgg",
      title: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "ESGEg5g",
      title: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "ESGgfEgg",
      title: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "ESGEsfdgg",
      title: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      _id: "ESGEafggg",
      title: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
  ];
  return (
    <PlantsPageGridContainer smallScreenColumns={2}>
      {offers.map((offer) => (
        <PlantPageOfferCard width="auto" color="offer" key={offer._id}>
          <OfferCardButton>
            <PlantPageImageContainer>
              <PlantPageImageCard
                alt="plantPhoto"
                src={offer.src}
              ></PlantPageImageCard>
            </PlantPageImageContainer>
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
            </OffersInfoFlexWrapper>
          </FlexWrapper>
        </PlantPageOfferCard>
      ))}
    </PlantsPageGridContainer>
  );
};
