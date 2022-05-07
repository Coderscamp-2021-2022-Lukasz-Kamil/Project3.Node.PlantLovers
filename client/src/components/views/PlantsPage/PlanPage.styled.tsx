import styled from "styled-components";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { SearchAndFilterContainer } from "../ProfilePage/YourOfferPage/YourOfferPage";
import { Input } from "../../ui/Input/Input.style";

export const YourOfferPageContainer = styled(FlexWrapper)`
  margin: 40px 0px;
`;

export const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;
  height: 8vh;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PlantsPageSearchAndFilterContainer = styled(
  SearchAndFilterContainer
)`
  width: 30%;
  margin: 0 20px 0 0;

  @media (max-width: 576px) {
    width: 80%;
    justify-content: space-between;
  }
`;

export const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
  width: 100%;
`;

export const PlantsPageSearchInput = styled(Input)`
  border: none;
  width: 100%;
  height: 100%;

  @media (max-width: 576px) {
    display: flex;
    font-size: ${({ theme }) => theme.size.mobile.mdl}px;
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

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  font-size: ${({ theme }) => theme.size.desktop.mdl}px;
  align-items: center;
  justify-content: center;
`;

export const SearchGroup = styled.div`
  display: flex;
  height: 5vh;
  width: 25vw;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 576px) {
    display: flex;
    height: 4vh;
    width: auto;
  }
`;

export const SearchGroupMobile = styled.div`
  display: none;
  width: auto;
  height: 5vh;
  align-items: center;
  border-radius: 5px;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  border: none;
  border-left: 1px solid #8b8b8b;
  padding: 6px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: flex-end;
  justify-content: end;

  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`;
