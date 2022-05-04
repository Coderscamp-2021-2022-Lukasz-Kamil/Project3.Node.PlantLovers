import React from "react";
import styled from "styled-components";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { PlantPageOffers } from "./PlantPageOfferts";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";
import { AllFilters } from "./PlantsPageFilters";
import {
  SearchAndFilterContainer,
  SearchInput,
} from "../ProfilePage/YourOfferPage/YourOfferPage";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { useState } from "react";
import { Method } from "axios";
import useFetchData from "../../../hooks/UseFetch";
import Offer from "../../../shared/intefaces/offer.interface";

export const YourOfferPageContainer = styled(FlexWrapper)`
  margin: 100px 0;
`;

export const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const EmptyDiv = styled.div`
  width: 25vw;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const PlantsPageSearchAndFilterContainer = styled(
  SearchAndFilterContainer
)`
  width: 72%;

  @media (max-width: 576px) {
    width: 80%;
    justify-content: space-between;
  }
`;

export const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
`;

export const PlantsPageSearchInput = styled(SearchInput)`
  @media (max-width: 576px) {
    display: flex;
  }
`;
export const PlantsPageOnlyMobileSearchInput = styled(PlantsPageSearchInput)`
  display: none;
  width: 80%;

  @media (max-width: 576px) {
    display: flex;
    margin: 0;
  }
`;

export const PlantsPageSearchDesktopOnlyInput = styled(SearchInput)`
  @media (max-width: 576px) {
    display: none;
  }
`;

export const FilterContener = styled.div`
  background: ${({ theme }) => theme.colors.card.secondary};
  height: 75vh;
  margin: 0 2vw;

  @media (max-width: 576px) {
    display: none;
  }
`;

const PlantsPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const defaultParams = {
    url: "/offers",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  };

  let params = defaultParams;

  if (searchPhrase === "") {
    params = defaultParams;
  } else {
    params = {
      url: "/offers/search/" + searchPhrase,
      method: "GET",
      headers: {
        accept: "*/*",
      },
    };
  }

  const { response, error } = useFetchData({
    url: params.url,
    method: params.method,
  });

  const offer: Offer[] = response;

  const displayOffers = () => {
    if (!error) {
      return <PlantPageOffers offers={offer} />;
    } else if (error) {
      return <div>cannot load recipes</div>;
    }
  };

  return (
    <YourOfferPageContainer direction="column">
      <PlantsPageSearchAndFilterFlexWrapper>
        <PlantsPageOnlyMobileSearchInput
          placeholder="Search for plant"
          width="320px"
          height="35px"
          onChange={(e) => {
            setSearchPhrase(e.target.value);
          }}
        />

        <EmptyDiv></EmptyDiv>
        <PlantsPageSearchAndFilterContainer>
          <AllFilters />
          <PlantsPageSearchDesktopOnlyInput
            placeholder="Search for plant"
            width="320px"
            height="35px"
            onChange={(e) => {
              setSearchPhrase(e.target.value);
            }}
          />

          <Dropdown
            title="Sort by"
            ico={<Arrow />}
            list={SortList}
            desktopWidth="20vw"
            mobileWidth="30vw"
            padding="0.3em 1em 0.3em 1em"
            marginBottom="0"
            border="none"
            borderRadius="0"
            listDesktopWidth="20vw"
            listMobileWidth="30vw"
            position="absolute"
          />
        </PlantsPageSearchAndFilterContainer>
      </PlantsPageSearchAndFilterFlexWrapper>
      <PlantsPageFlexWrapper justifyContent="flex-start">
        <PlantsPageWholeFilterComponent />
        {displayOffers()}
      </PlantsPageFlexWrapper>
    </YourOfferPageContainer>
  );
};

export default PlantsPage;
