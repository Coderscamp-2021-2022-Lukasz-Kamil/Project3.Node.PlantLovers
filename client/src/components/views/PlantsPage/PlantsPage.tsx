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
  PlantsPageContainer,
  PlantsPageSearchAndFilterFlexWrapper,
  PlantsPageSearchAndFilterContainer,
  PlantsPageSearchInput,
  PlantsPageFlexWrapper,
  ErrorMessage,
  SearchButton,
  SearchGroup,
  SearchContainer,
  EmptyDiv,
  PlantsPageSearchAndFilterBar,
  PlantsPageSearchAndFilterOnly,
  SearchIcon,
} from "./PlantPage.styled";
import { Item } from "../../ui/Dropdown/Dropdown.intefrace";

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
    url: "/offers/",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  };

  const onOptionChosen = (option: Item) => {
    setSortOption(option.name);
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
    <PlantsPageContainer direction="column">
      <PlantsPageSearchAndFilterFlexWrapper>
        <PlantsPageSearchAndFilterBar>
          <EmptyDiv></EmptyDiv>
          <PlantsPageSearchAndFilterOnly>
            <SearchContainer>
              <SearchGroup>
                <PlantsPageSearchInput
                  placeholder="Search for plant"
                  width="320px"
                  height="37.78px"
                  textAlign="left"
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
                  <SearchIcon src="/searchIcon.png" />
                </SearchButton>
              </SearchGroup>
            </SearchContainer>
            <PlantsPageSearchAndFilterContainer>
              <AllFilters />
              <Dropdown
                title="Sort by"
                imageSrc={Arrow}
                imageWidth={20}
                imageHeigth={20}
                imageMarginRight="0"
                imageMobileWidth={15}
                imageMobileHeigth={15}
                list={SortList}
                desktopWidth="200px"
                mobileWidth="35vw"
                padding="0.3em 1em 0.3em 1em"
                marginBottom="0"
                border="none"
                borderRadius="10px"
                listDesktopWidth="200px"
                listMobileWidth="60vw"
                listfontSizeMobile="mdl"
                position="absolute"
                borderBottom="none"
                listMobileMargin="42px 50vw 0 0"
                textPosition="left"
                listMarginTop="53px"
                triangleDisplay="flex"
                headerIconWidth="unset"
                dropdownHeaderTitleWidth="unset"
                onOptionChosen={onOptionChosen}
              />
            </PlantsPageSearchAndFilterContainer>
          </PlantsPageSearchAndFilterOnly>
        </PlantsPageSearchAndFilterBar>
      </PlantsPageSearchAndFilterFlexWrapper>
      <PlantsPageFlexWrapper justifyContent="flex-start">
        <PlantsPageWholeFilterComponent />
        {displayOffers()}
      </PlantsPageFlexWrapper>
    </PlantsPageContainer>
  );
};

export default PlantsPage;
