import styled from "styled-components";
import { ImageCard } from "../../ui/ImageCard/ImageCard.style";
import {
  OfferCard,
  ImageContainer,
  YourOfferGridContainer,
} from "../ProfilePage/YourOfferPage/Offers";

export const PlantsPageGridContainer = styled(YourOfferGridContainer)`
  margin-right: 2vw;

  @media (max-width: 576px) {
    grid-gap: 5vw 5vw;
    width: 100%;
    justify-items: center;
  }
`;
export const PlantPageImageCard = styled(ImageCard)`
  @media (max-width: 1000px) {
    height: ${({ mobileImageSize }) =>
      mobileImageSize?.height ? mobileImageSize.height : "23vh"};
  }
`;
export const PlantPageOfferCard = styled(OfferCard)`
  @media (max-width: 1000px) {
    width: 20vw;
  }

  @media (max-width: 576px) {
    width: 40vw;
  }
`;

export const PlantPageImageContainer = styled(ImageContainer)`
  @media (max-width: 1000px) {
    width: 20vw;
  }

  @media (max-width: 576px) {
    width: 40vw;
  }
`;
