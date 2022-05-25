import React from "react";
import { Typography } from "../../ui/Typography/Typography.style";
import {
  BoldPlusRegularContainer,
  BoldPlusRegularContainerItem,
} from "./OneOffer";

interface Offer {
  category: string;
  height: string;
  city: string;
}

export const CategoryHeightAndCity = (props: Offer) => {
  console.log(props);
  const offers = [
    { name: "Category", type: props.category },
    { name: "Height", type: props.height },
    { name: "City", type: props.city },
  ];

  return (
    <BoldPlusRegularContainer>
      {offers.map((offer) => (
        <BoldPlusRegularContainerItem key={offer.name}>
          <Typography fontSize="sm" fontWeight="bold">
            {offer.name}:
          </Typography>
          <Typography fontSize="sm">{offer.type}</Typography>
        </BoldPlusRegularContainerItem>
      ))}
    </BoldPlusRegularContainer>
  );
};
