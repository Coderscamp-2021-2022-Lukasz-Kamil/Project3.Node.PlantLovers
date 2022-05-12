import styled from "styled-components";
import { Input } from "../../ui/Input/Input.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import {
  SearchAndFilterContainer,
  SearchInput,
} from "../ProfilePage/YourOfferPage/YourOfferPage";

interface PlantsPageContainerProps {
  changeBackground?: boolean;
}

export const PlantsPageContainer = styled(
  FlexWrapper
)<PlantsPageContainerProps>`
  margin: 80px 0;

  @media (max-width: 576px) {
    margin: 10px 0;
    /*
    ${({ changeBackground }) => changeBackground && `background: #A3A5A8`};
    */
  }
`;

export const PlantsPageSearchAndFilterFlexWrapper = styled(FlexWrapper)`
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const EmptyDiv = styled.div`
  width: 24vw;
  height: 53.78px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const PlantsPageSearchAndFilterContainer = styled(
  SearchAndFilterContainer
)`
  width: 100%;
  @media (max-width: 576px) {
    justify-content: space-between;
    align-items: end;
  }
`;

export const PlantsPageSearchAndFilterDesktopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 2vw;
  align-items: end;

  @media (max-width: 1000px) {
    margin-right: 3.4vw;
  }

  @media (max-width: 576px) {
    width: auto;
    margin-right: 0;
  }
`;

export const PlantsPageFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    gap: 0;
  }
`;

export const PlantsPageSearchInput = styled(SearchInput)`
  @media (max-width: 576px) {
    display: flex;
  }
`;
export const PlantsPageOnlyMobileSearchInput = styled(PlantsPageSearchInput)`
  display: none;
  width: 100%;
  height: 29.4px;

  @media (max-width: 576px) {
    display: flex;
    margin: 0;
  }
`;

export const PlantsPageSearchDesktopOnlyInput = styled(Input)`
  border: none;
  border-radius: 10px;

  @media (max-width: 750px) {
    width: 200px;
  }

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
