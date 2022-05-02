import React from "react";
import styled from "styled-components";
import axios from "axios";
import { OneOffer } from "./OneOffer";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useState, useEffect } from "react";
import Offer from "../../../shared/intefaces/offer.interface";

const OfferContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 90vh;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  height: ${({ height }) => (height ? height : 540)}px;
  width: ${({ width }) => (width ? width : 420)}px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1000px) {
    margin: 50px 0;
    height: ${({ height }) => (height ? height : "auto")};
    width: ${({ width }) => (width ? width : 70)}vw;
  }

  @media (max-width: 576px) {
    margin: 30px 0;
    width: ${({ width }) => (width ? width : 80)}vw;
  }
`;

const OfferPage = () => {
  const [offer, setOffer] = useState<null | Offer>();

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: BASE_URL + "/offers/6264ed5884afa9f66088a4ee",
        headers: {
          accept: "*/*",
        },
      })
      .then((response) => {
        console.log(response.data);
        setOffer(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        setOffer(null);
      });
  }, []);

  if (!offer) {
    return <div>Loading...</div>;
  }

  console.log(offer);

  return (
    <OfferContainer>
      <Image src={offer.photos[0].url} alt="sth" />
      <OneOffer
        key={offer.id}
        title={offer.title}
        price={offer.price}
        description={offer.description}
        category={offer.category.name}
        height={offer.height.range}
        city={offer.city}
        email={offer.email}
        phoneNumber={offer.phoneNumber}
      />
    </OfferContainer>
  );
};

export default OfferPage;
