import styled from "styled-components";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { SearchAndFilterContainer } from "../ProfilePage/YourOfferPage/YourOfferPage";
import { Input } from "../../ui/Input/Input.style";

export const PlantsPageContainer = styled(FlexWrapper)`
  margin: 40px 0px;

  @media (max-width: 576px) {
    margin: 10px 5vw 20px;
  }
`;

export const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PlantsPageSearchAndFilterContainer = styled(
  SearchAndFilterContainer
)`
  margin-right: 2vw;

  @media (max-width: 1000px) {
    margin-right: 3.2vw;
  }

  @media (max-width: 576px) {
    justify-content: space-between;
    margin: 0 0 10px;
  }
`;

export const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
  width: 100%;
  justify-content: center;
`;

export const PlantsPageSearchInput = styled(Input)`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
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
  height: 37.78px;
  width: 293px;
  align-items: center;

  @media (max-width: 576px) {
    height: 29.44px;
    width: 100%;
  }
`;

export const SearchGroupMobile = styled.div`
  display: none;
  width: auto;
  height: 5vh;
  align-items: center;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const SearchIcon = styled.img`
  width: 25px;
  height: 25px;

  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  border: none;
  border-left: 1px solid #8b8b8b;
  padding: 0 6px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  height: 37.88px;
  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`;

export const EmptyDiv = styled.div`
  width: 26vw;
  margin: 0 2.5vw;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const PlantsPageSearchAndFilterBar = styled.div`
  display: flex;
  width: 100%;
`;
export const PlantsPageSearchAndFilterOnly = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;
