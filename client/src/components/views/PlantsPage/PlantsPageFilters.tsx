import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../ui/Input/Input.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Arrow from "../../../assets/ArrowDownVector.svg";

const FilterButton = styled.button`
  width: 20vw;
  background: ${({ theme }) => theme.colors.card.secondary};
  padding: 0.48em 1em 0.48em 1em;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textColor};
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }
`;
const ArrowImage = styled.img`
  position: absolute;
`;

const FiltersInputContainer = styled(FlexWrapper)`
  position: relative;
`;

const DropdownInput = styled(Input)`
  margin: 5px 0;
`;

const ArrowContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: end;
  padding: 0 1em 0 1em;
`;

export const CitySearch = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <FilterButton onClick={() => setShow(!show)}>
        City{" "}
        <ArrowContainer>
          <ArrowImage src={Arrow} />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="Find a city"
            width="19vw"
            height="35px"
            fontSizeDesktop="sm"
          />
        </FiltersInputContainer>
      ) : null}
    </div>
  );
};

export const PriceRange = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <FilterButton onClick={() => setShow(!show)}>
        Price{" "}
        <ArrowContainer>
          <ArrowImage src={Arrow} />
        </ArrowContainer>
      </FilterButton>
      {show ? (
        <FiltersInputContainer>
          <DropdownInput
            placeholder="From"
            width="9vw"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
          />
          <DropdownInput
            placeholder="To"
            width="9vw"
            height="25px"
            fontSizeDesktop="sm"
            type="number"
          />
        </FiltersInputContainer>
      ) : null}
    </div>
  );
};
