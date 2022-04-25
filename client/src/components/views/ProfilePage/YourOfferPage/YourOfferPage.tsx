import React from "react";
import styled from "styled-components";
import { Input } from "../../../ui/Input/Input.style";
import { FilterButtons } from "./FilterButtons";
import { Offers } from "./Offers";

export const YourOfferPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

export const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const SearchInput = styled(Input)`
  border: none;

  @media (max-width: 576px) {
    display: none;
  }

  @media (max-width: 950px) {
    width: 240px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    width: 200px;
    height: 25px;
    margin-right: 20px;
  }
`;

const YourOfferPage = () => {
  return (
    <YourOfferPageContainer>
      <div>
        <SearchAndFilterContainer>
          <SearchInput
            placeholder="Search for plant"
            width="320px"
            height="35px"
          />
          <FilterButtons />
        </SearchAndFilterContainer>
        <Offers />
      </div>
    </YourOfferPageContainer>
  );
};

export default YourOfferPage;
