import styled from "styled-components";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { SearchAndFilterContainer } from "../ProfilePage/YourOfferPage/YourOfferPage";
import { SearchInput } from "../ProfilePage/YourOfferPage/YourOfferPage";

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
  width: 100%;
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

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  font-size: ${({ theme }) => theme.size.desktop.mdl}px;
  align-items: center;
  justify-content: center;
`;
