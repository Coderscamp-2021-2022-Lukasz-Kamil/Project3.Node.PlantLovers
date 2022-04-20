import React from "react";
import { Typography } from "../../ui/Typography/Typography.style";
import { BoldPlusRegularContainerItem } from "./OneOffer";

// I wanted to use this to make shorter code but I dunno how to pass this to main file and use there props form type//

export const CategoryEmailAndPhone = () => {
  const offers = [
    { name: "e-mail", type: "{props.email}" },
    { name: "phone", type: "{props.phoneNumber}" },
  ];

  return (
    <div>
      {offers.map((offer) => (
        <BoldPlusRegularContainerItem key={offer.name}>
          <Typography fontSize="sm">{offer.name}:</Typography>
          <Typography fontSize="sm">{offer.type}</Typography>
        </BoldPlusRegularContainerItem>
      ))}
    </div>
  );
};
