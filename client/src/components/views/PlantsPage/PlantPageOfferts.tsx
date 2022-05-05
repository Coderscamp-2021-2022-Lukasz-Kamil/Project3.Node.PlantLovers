import React from "react";
import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { ImageCard } from "../../ui/ImageCard/ImageCard.style";
import {
  ImageContainer,
  OfferCard,
  OfferCardButton,
  OffersInfoFlexWrapper,
  PriceTypography,
  YourOfferGridContainer,
} from "../ProfilePage/YourOfferPage/Offers";
import useFetchData from "../../../hooks/UseFetch";
import { Offer } from "../ProfilePage/YourOfferPage/OfferModel";
import { SortList } from "../../ui/Dropdown/DropdownLists";

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

interface PlantPageOffersProps {
  sortBy?: string;
}

export const PlantPageOfferts: React.FC<PlantPageOffersProps> = ({
  sortBy,
}) => {
  const { response } = useFetchData({
    url: `/offers`,
    method: "GET",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  });

  let offers: Offer[] = response;

  const sortCase = SortList.find((item) => item.name === sortBy);

  if (offers) {
    switch (sortCase?.name) {
      case "newest":
        offers = offers.sort((a, b) => {
          const dateA = new Date(a.dateUpdated);
          const dateB = new Date(b.dateUpdated);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "oldest":
        offers = offers.sort((a, b) => {
          const dateA = new Date(a.dateUpdated);
          const dateB = new Date(b.dateUpdated);
          return dateB.getTime() - dateA.getTime();
        });
        break;
      case "alphabetical order A-Z":
        offers = offers.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alphabetical order Z-A":
        offers = offers.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "highest price":
        offers = offers.sort(
          (a, b) =>
            parseFloat(b.price.toString()) - parseFloat(a.price.toString())
        );
        break;
      case "lowest price":
        offers = offers.sort(
          (a, b) =>
            parseFloat(a.price.toString()) - parseFloat(b.price.toString())
        );
        break;
      default:
        "";
    }
  }

  return (
    <PlantsPageGridContainer smallScreenColumns={2}>
      {offers.map((offer) => (
        <PlantPageOfferCard width="auto" color="offer" key={offer._id}>
          <OfferCardButton>
            <PlantPageImageContainer>
              <PlantPageImageCard
                alt="plantPhoto"
                src={offer.photos[0].url}
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
