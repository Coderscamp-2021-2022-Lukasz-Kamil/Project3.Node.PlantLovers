import React from "react";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { PlantPageOffers } from "./PlantPageOfferts";
import { ReactComponent as Arrow } from "../../../assets/ArrowDownVector.svg";
import { AllFilters } from "./PlantsPageFilters";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { useState } from "react";
import { Method } from "axios";
import useFetchData from "../../../hooks/UseFetch";
import Offer from "../../../shared/intefaces/offer.interface";
import {
  YourOfferPageContainer,
  PlantsPageSearchAndFilterFlexWrapper,
  PlantsPageOnlyMobileSearchInput,
  EmptyDiv,
  PlantsPageSearchAndFilterContainer,
  PlantsPageSearchDesktopOnlyInput,
  PlantsPageFlexWrapper,
  ErrorMessage,
} from "./PlanPage.styled";

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
    if (offer.length === 0) {
      return (
        <ErrorMessage>
          0 results found for your search. Please try another search term
        </ErrorMessage>
      );
    } else if (!error) {
      return <PlantPageOffers offers={offer} />;
    } else {
      return <ErrorMessage> Cannot load offers</ErrorMessage>;
    }
  };

  return (
    <YourOfferPageContainer direction="column">
      <PlantsPageSearchAndFilterFlexWrapper>
        <PlantsPageOnlyMobileSearchInput
          placeholder="Search for plant"
          width="320px"
          height="35px"
          onKeyDown={(e) =>
            e.key === "Enter" &&
            setSearchPhrase((e.target as HTMLTextAreaElement).value)
          }
        />

        <EmptyDiv></EmptyDiv>
        <PlantsPageSearchAndFilterContainer>
          <AllFilters />
          <PlantsPageSearchDesktopOnlyInput
            placeholder="Search for plant"
            width="320px"
            height="35px"
            onKeyDown={(e) =>
              e.key === "Enter" &&
              setSearchPhrase((e.target as HTMLTextAreaElement).value)
            }
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
