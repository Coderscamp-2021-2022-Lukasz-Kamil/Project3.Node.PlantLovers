import React, { KeyboardEvent } from "react";
import { SortList } from "../../ui/Dropdown/DropdownLists";
import { PlantPageOffers } from "./PlantPageOfferts";
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

const PlantsPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchPhraseToLookUp, setSearchPhraseToLookUp] = useState("");

  const defaultParams = {
    url: "/offers",
    method: "GET" as Method,
    headers: {
      accept: "*/*",
    },
  };

  let params = defaultParams;

  if (searchPhraseToLookUp === "") {
    params = defaultParams;
  } else {
    params = {
      url: "/offers/search/" + searchPhraseToLookUp,
      method: "GET",
      headers: {
        accept: "*/*",
      },
    };
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
