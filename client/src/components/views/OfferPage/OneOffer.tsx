import React from "react";
import styled from "styled-components";
import { Card } from "../../ui/Card/Card.style";
import { Typography } from "../../ui/Typography/Typography.style";
import { CategoryHeightAndCity } from "./CategoryHeightAndCity";
import { CategoryEmailAndPhone } from "./EmailAndPhone";

const OfferCard = styled(Card)`
  height: 540px;

  @media (max-width: 1000px) {
    width: 80vw;
    padding: 0 2rem;
    background-color: ${({ theme, color }) =>
      color ? theme.colors.card[color] : theme.colors.common.backgroundcolor};
  }

  @media (max-width: 576px) {
    width: 100vw;
  }
`;

const OfferTitleContainer = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const OfferTitleContainerMobile = styled.div`
  display: none;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const OfferTitleContainerMobileTitle = styled(OfferTitleContainer)`
  @media (max-width: 1000px) {
    display: flex;
    width: 80%;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const TypographyPrice = styled(Typography)`
  color: ${({ theme }) => theme.colors.navigationBar.primary};
`;

const DescriptionContainer = styled.div`
  margin: 20px 0;
`;
const TypographyDescription = styled(Typography)`
  margin-bottom: 20px;
`;

export const BoldPlusRegularContainer = styled.div`
  margin-bottom: 20px;
`;
export const BoldPlusRegularContainerItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const OneOffer = (props: {
  title: string;
  price: number;
  description: string;
  category: string;
  height: string;
  city: string;
  email: string;
  phoneNumber: string;
}) => {
  return (
    <OfferCard>
      <OfferTitleContainer>
        <Typography fontSize="xxl" fontSizeMobile="xxl">
          {props.title}
        </Typography>
        <Typography fontSize="xl">{props.price}$</Typography>
      </OfferTitleContainer>
      <OfferTitleContainerMobile>
        <OfferTitleContainerMobileTitle>
          <Typography fontSize="xxl" fontSizeMobile="xxl">
            {props.title}
          </Typography>
        </OfferTitleContainerMobileTitle>
        <TypographyPrice fontSize="xl" fontSizeMobile="xxl">
          {props.price}$
        </TypographyPrice>
        <Typography fontSize="sm">{props.city}</Typography>
      </OfferTitleContainerMobile>
      <DescriptionContainer>
        <TypographyDescription fontSize="sm" fontWeight="bold">
          Description
        </TypographyDescription>
        <Typography fontSize="sm">{props.description}</Typography>
      </DescriptionContainer>

      <CategoryHeightAndCity
        category={props.category}
        height={props.height}
        city={props.city}
      />

      <div>
        <Typography fontSize="sm" fontWeight="bold">
          Contact:
        </Typography>

        <CategoryEmailAndPhone
          email={props.email}
          phoneNumber={
            props.phoneNumber.substring(0, 3) +
            "-" +
            props.phoneNumber.substring(3, 6) +
            "-" +
            props.phoneNumber.substring(6)
          }
        />
      </div>
    </OfferCard>
  );
};
