import styled from "styled-components";
import { Wrapper } from "../../ui/Dropdown/Dropdown.style";

export const PlantsDropdownWrapper = styled(Wrapper)`
  width: 20vw;
  padding: 0.3em 1em 0.3em 1em;
  font-size: ${({ theme }) => theme.size.desktop.md}px;
  margin-bottom: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textColor};

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.size.desktop.sm}px;
    width: 25vw;
  }

  @media (max-width: 576px) {
    width: 25vw;
    font-size: ${({ theme }) => theme.size.mobile.md}px;
  }
`;

export const PlantsDropdownList = styled.ul`
  width: 20vw;

  &:first-child {
    padding-top: 0.8em;
  }

  @media (max-width: 576px) {
    width: 25vw;
    font-size: ${({ theme }) => theme.size.mobile.md}px;
  } ;
`;
