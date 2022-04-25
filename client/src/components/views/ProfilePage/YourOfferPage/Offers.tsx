import React from "react";
import styled from "styled-components";
import { Card } from "../../../ui/Card/Card.style";
import { Typography } from "../../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { GridContainer } from "../../../wrappers/FlexCenter/GridContainer.style";
import { ImageCard } from "../../../ui/ImageCard.style";
import Icons from "./Icons";
import useFetchData, { BASE_URL } from "../../../../hooks/UseFetch";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Offer } from "./OfferModel";

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

export const Offers = () => {
  const [userIdCookie] = useCookies(["user-id"]);
  const [token] = useCookies(["token"]);
  const { response } = useFetchData({
    url: `/offers/${userIdCookie["user-id"]}`,
    method: "GET",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  });

  const offers: Offer[] = response;

  const onArchiveButtonClick = (offerId: string) => {
    axios({
      method: "PUT",
      url: BASE_URL + `/offers/archive/${offerId}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    })
      .then((response) => {
        console.log("archived");
      })
      .catch(() => {
        console.log("failed to edit");
      });
  };

  const onEditButtonClick = (offerId: string) => {
    console.log("edit");

    axios({
      method: "PUT",
      url: BASE_URL + `/offers/${offerId}`,
      data: {
        daneDoUpdejtowania: null,
      },
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    })
      .then((response) => {
        console.log("edited");
      })
      .catch(() => {
        console.log("failed to edit");
      });
  };

  const onDeleteButtonClick = (offerId: string) => {
    console.log("delete");

    axios({
      method: "DELETE",
      url: BASE_URL + `/offers/${offerId}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    })
      .then((response) => {
        console.log("deleted");
      })
      .catch(() => {
        console.log("failed to delete");
      });
  };

  return (
    <YourOfferGridContainer smallScreenColumns={2}>
      {offers.map((offer) => (
        <OfferCard width="auto" color="offer" key={offer._id}>
          <ImageCard
            alt="plantPhoto"
            src={offer.photos[0].url}
            height="200"
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
              <Icons
                onArchiveButtonClick={() => onArchiveButtonClick(offer._id)}
                onEditButtonClick={() => onEditButtonClick(offer._id)}
                onDeleteButtonClick={() => onDeleteButtonClick(offer._id)}
              />
            </div>
          </FlexWrapper>
        </OfferCard>
      ))}
    </YourOfferGridContainer>
  );
};
