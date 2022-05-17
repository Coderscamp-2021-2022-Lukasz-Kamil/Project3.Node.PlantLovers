import React, { KeyboardEvent } from "react";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { PlantPageOffers } from "./PlantPageOffers";
import Arrow from "../../../assets/ArrowDownVector.svg";
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
  PlantsPageSearchAndFilterContainer,
  PlantsPageSearchInput,
  PlantsPageFlexWrapper,
  ErrorMessage,
  SearchButton,
  SearchGroup,
  SearchContainer,
} from "./PlantPage.styled";

const PlantsPage = () => {
  const [sortOption, setSortOption] = useState<string | undefined>();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchPhraseToLookUp, setSearchPhraseToLookUp] = useState("");

  const getSortParam = () => {
    switch (sortOption) {
      case "newest":
        return "?sort=-dateUpdated";
      case "oldest":
        return "?sort=dateUpdated";
      case "alphabetical order A-Z":
        return "?sort=title";
      case "alphabetical order Z-A":
        return "?sort=-title";
      case "highest price":
        return "?sort=-price";
      case "lowest price":
        return "?sort=price";
    }
  };

  const defaultParams = {
    url: "/offers",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  };

  const onOptionChosen = (option: string) => {
    setSortOption(option);
  };

  let params = defaultParams;

  if (!sortOption && searchPhraseToLookUp === "") {
    params = defaultParams;
  } else if (!sortOption && searchPhraseToLookUp !== "") {
    params.url = "/offers/search/" + searchPhraseToLookUp;
  } else if (sortOption && searchPhraseToLookUp === "") {
    params.url = "/offers" + getSortParam();
  } else {
    params.url = "/offers/search/" + searchPhraseToLookUp + getSortParam();
  }

  const { response, error } = useFetchData<Offer[]>({
    url: params.url,
    method: params.method,
  });

  const offers: Offer[] = response ? response : [];

  const displayOffers = () => {
    if (offers?.length === 0) {
      return (
        <ErrorMessage>
          0 results found for your search. Please try another search term
        </ErrorMessage>
      );
    } else if (!error) {
      return <PlantPageOffers offers={offers} />;
    } else {
      return <ErrorMessage> Cannot load offers</ErrorMessage>;
    }
  };

  return (
    <YourOfferPageContainer direction="column">
      <PlantsPageSearchAndFilterFlexWrapper>
        <SearchContainer>
          <SearchGroup>
            <PlantsPageSearchInput
              placeholder="Search for plant"
              width="320px"
              height="35px"
              onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
                e.key === "Enter" && setSearchPhraseToLookUp(searchPhrase);
              }}
              onChange={(e) => {
                const inputValue = e.target.value;
                setSearchPhrase(inputValue);
                if (!inputValue) {
                  setSearchPhraseToLookUp("");
                }
              }}
            />
            <SearchButton
              type="submit"
              onClick={() => setSearchPhraseToLookUp(searchPhrase)}
            >
              <img src="/searchIcon.png" height={"100%"} />
            </SearchButton>
          </SearchGroup>
        </SearchContainer>
        <PlantsPageSearchAndFilterContainer>
          <AllFilters />
          <Dropdown
            title="Sort by"
            imageSrc={Arrow}
            list={SortList}
            desktopWidth="20vw"
            mobileWidth="30vw"
            marginBottom="0"
            border="none"
            borderRadius="0"
            listDesktopWidth="20vw"
            listMobileWidth="30vw"
            display="flex"
            onOptionChosen={onOptionChosen}
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
