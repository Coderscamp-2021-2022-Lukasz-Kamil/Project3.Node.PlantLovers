import React from "react";
import { Typography } from "../../ui/Typography/Typography.style";
import {
  BoldPlusRegularContainer,
  BoldPlusRegularContainerItem,
} from "./OneOffer";
// I wanted to use this to make shorter code but I dunno how to pass this to main file and use there props form type//

interface Offer {
  category: string;
  height: string;
  city: string;
}

export const CategoryHeightAndCity = (props: Offer) => {
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
