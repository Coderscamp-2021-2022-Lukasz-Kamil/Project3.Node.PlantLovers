import React from "react";
import styled from "styled-components";
import { Card } from "../../ui/Card/Card.style";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Icons from "../ProfilePage/YourOfferPage/Icons";
import { ReactComponent as RandomImage } from "../../../assets/examplePlantPhoto.svg";
import { GridContainer } from "../../wrappers/FlexCenter/GridContainer.style";

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

//Temporary Array//
export const PlantPageOfferts = () => {
  const cards = [
    {
      id: "EFFF3Eessdf",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "EFFgdssdEessdf",
      name: "Mandragora",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "EFFgdss",
      name: "ARG",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "EdsfFFgdss",
      name: "GFZfg",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "ESGEgg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "ESGEg5g",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "ESGgfEgg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "ESGEsfdgg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
    {
      id: "ESGEafggg",
      name: "Chwast",
      city: "Żarów",
      price: 32,
      picture: <CardImage />,
    },
  ];
  return (
    <YourOfferGridContainer smallScreenColumns={2}>
      {cards.map((card) => (
        <OfferCard width="auto" color="offer" key={card.id}>
          <ImageContainer>{card.picture}</ImageContainer>
          <FlexWrapper justifyContent="space-between">
            <div>
              <Typography fontSize="xxs" fontSizeMobile="xs">
                {card.name}
              </Typography>
              <Typography fontSize="xxxs" fontSizeMobile="xs">
                {card.city}
              </Typography>
            </div>
            <div>
              <PriceTypography fontSize="xxs" fontSizeMobile="xs">
                {card.price}$
              </PriceTypography>
              <Icons />
            </div>
          </FlexWrapper>
        </OfferCard>
      ))}
    </YourOfferGridContainer>
  );
};
