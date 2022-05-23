import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../ui/Input/Input.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Arrow from "../../../assets/ArrowDownVector.svg";
import PlantsPageWholeFilterComponent from "./PlantsPageWholeFilterComponent";
import { Icon } from "../../ui/ButtonWithIcon/ButtonWithIcon";

const FilterButton = styled.button`
  width: 20vw;
  background: ${({ theme }) => theme.colors.card.secondary};
  padding: 0.48em 1em 0.48em 1em;
  font-size: ${({ theme }) => theme.size.desktop.mds}px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textInactive};
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }

  @media (max-width: 850px) {
    justify-content: start;
  }

  @media (max-width: 576px) {
    width: 60vw;
    font-size: ${({ theme }) => theme.size.mobile.lg}px;
  }
`;

const FiltersInputContainer = styled(FlexWrapper)`
  position: relative;
  width: 20vw;

  @media (max-width: 576px) {
    width: 60vw;
  }
`;

const DropdownInput = styled(Input)`
  margin: 5px 0;
`;

const ArrowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  @media (max-width: 576px) {
    display: none;
  }
`;

const ArrowContainerAllFilters = styled(ArrowContainer)`
  @media (max-width: 576px) {
    display: flex;
  }
`;

const AllFiltersFilterButton = styled(FilterButton)`
  display: none;
  border-bottom: none;
  border-radius: 10px;

  @media (max-width: 576px) {
    display: flex;
    font-size: ${({ theme }) => theme.size.mobile.md}px;
    width: 35vw;
  }
`;

export const CitySearch = () => {
  const [show, setShow] = useState(false);
  const [rotating, setRotate] = useState(false);
  const openFiltr = () => setShow(!show);
  const rotateArrow = () => setRotate((state) => !state);

  const wrapperFunction = () => {
    openFiltr();
    rotateArrow();
  };
  return (
    <div>
      <FilterButton onClick={wrapperFunction}>
        City{" "}
        <ArrowContainer>
          <Icon
            src={Arrow}
            width={20}
            height={20}
            mobileWidth={15}
            mobileHeight={15}
            marginRight="0px"
            rotating={rotating}
          />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="Find a city"
            width="95%"
            height="35px"
            fontSizeDesktop="sm"
            textAlign="left"
          />
        </FiltersInputContainer>
      ) : null}
    </div>
  );
};

export const PriceRange = () => {
  const [show, setShow] = useState(false);
  const [rotating, setRotate] = useState(false);
  const openFiltr = () => setShow(!show);
  const rotateArrow = () => setRotate((state) => !state);
  const wrapperFunction = () => {
    openFiltr();
    rotateArrow();
  };
  return (
    <div>
      <FilterButton onClick={wrapperFunction}>
        Price{" "}
        <ArrowContainer>
          <Icon
            src={Arrow}
            width={20}
            height={20}
            mobileWidth={15}
            mobileHeight={15}
            marginRight="0px"
            rotating={rotating}
          />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="From"
            width="45%"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
            textAlign="left"
          />
          <DropdownInput
            placeholder="To"
            width="45%"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
            textAlign="left"
          />
        </FiltersInputContainer>
      ) : null}
    </div>
  );
};

export const AllFilters = () => {
  const [show, setShow] = useState(false);
  const [rotating, setRotate] = useState(false);
  //const [changeBackground, setChangeBackground] = useState(false);
  const openFiltr = () => setShow(!show);
  const rotateArrow = () => setRotate((state) => !state);
  //const toogleBackground = () => setChangeBackground((state) => !state);
  const wrapperFunction = () => {
    openFiltr();
    rotateArrow();
    //   toogleBackground();
  };

  return (
    <div>
      <AllFiltersFilterButton onClick={wrapperFunction}>
        <span>Filters </span>
        <ArrowContainerAllFilters>
          <Icon
            src={Arrow}
            width={20}
            height={20}
            mobileWidth={15}
            mobileHeight={15}
            marginRight="0px"
            rotating={rotating}
          />
        </ArrowContainerAllFilters>
      </AllFiltersFilterButton>
      {show ? (
        <PlantsPageWholeFilterComponent
          desktopDisplay="none"
          mobileDisplay="block"
          position="absolute"
          filterContainerHeigth="auto"
        />
      ) : null}
    </div>
  );
};
