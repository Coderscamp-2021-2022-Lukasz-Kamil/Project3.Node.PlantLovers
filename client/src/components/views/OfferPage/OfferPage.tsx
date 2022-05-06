import React from "react";
import styled from "styled-components";
import { OneOffer } from "./OneOffer";
import { BASE_URL } from "../../../hooks/UseFetch";
import { useState, useEffect } from "react";
import Offer from "../../../shared/intefaces/offer.interface";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useFetchData from "../../../hooks/UseFetch";

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
  const { id } = useParams();
  const [offer, setOffer] = useState<null | Offer>(null);

  const { response, error, loading } = useFetchData<Offer>({
    url: `${BASE_URL}/offers/${id}`,
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  useEffect(() => {
    if (response) {
      setOffer(response);
    }
    if (error) {
      toast.error("Offer not found");
    }
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {offer ? (
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
            email={offer.userId.email}
            phoneNumber={offer.phoneNumber}
          />
        </OfferContainer>
      ) : (
        <div>No offer</div>
      )}
    </>
  );
};

export default OfferPage;
