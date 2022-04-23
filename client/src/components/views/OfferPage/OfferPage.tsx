import React from "react";
import styled from "styled-components";
import { TestOffer } from "./TestOffer";
import { ReactComponent as RandomImage } from "./examplePlantPhoto.svg";

const OfferContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 90vh;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const RndmImage = styled(RandomImage)`
  height: ${({ height }) => (height ? height : 620)}px;
  width: ${({ width }) => (width ? width : 470)}px;

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
  return (
    <OfferContainer>
      <RndmImage />
      <TestOffer />
    </OfferContainer>
  );
};

export default OfferPage;
