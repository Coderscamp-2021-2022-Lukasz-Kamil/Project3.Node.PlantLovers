import React from "react";
import styled from "styled-components";
import { Card } from "../../ui/Card/Card.style";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Icons from "../ProfilePage/YourOfferPage/Icons";
import { GridContainer } from "../../wrappers/FlexCenter/GridContainer.style";
import { ImageCard } from "../../ui/ImageCard/ImageCard.style";
import ExamplePhoto from "../../../assets/examplePlantPhoto.svg";

const OfferCard = styled(Card)`
  height: 36vh;
  padding: 0;

  @media (max-width: 1050px) {
    height: auto;
  }
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

//Temporary Array//
export const PlantPageOfferts = () => {
  const offers = [
    {
      id: "EFFF3Eessdf",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "EFFgdssdEessdf",
      name: "Mandragora",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "EFFgdss",
      name: "ARG",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "EdsfFFgdss",
      name: "GFZfg",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "ESGEgg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "ESGEg5g",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "ESGgfEgg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "ESGEsfdgg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
    {
      id: "ESGEafggg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      src: ExamplePhoto,
    },
  ];
  return (
    <YourOfferGridContainer smallScreenColumns={2}>
      {offers.map((offer) => (
        <OfferCard width="auto" color="offer" key={offer.id}>
          <div>
            <ImageCard
              alt="plantPhoto"
              src={offer.src}
              height="200"
            ></ImageCard>
          </div>

          <FlexWrapper justifyContent="space-between">
            <div>
              <Typography fontSize="xxs" fontSizeMobile="xs">
                {offer.name}
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
