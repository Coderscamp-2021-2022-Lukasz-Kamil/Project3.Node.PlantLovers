import React from "react";
import styled from "styled-components";
import { PlantPageOfferts } from "./PlantPageOfferts";

const YourOfferPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const PlantsPage = () => {
  return (
    <YourOfferPageContainer>
      <div>
        <PlantPageOfferts />
      </div>
    </YourOfferPageContainer>
  );
};

export default PlantsPage;
