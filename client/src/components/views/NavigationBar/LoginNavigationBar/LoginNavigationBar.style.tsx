import styled from "styled-components";
import {
  NavBar,
  NavBarButtonContainer,
  PageLink,
} from "../MainNavigationBar/NavigationBar.style";

export const LoginNavBar = styled(NavBar)`
  background: ${({ theme }) => theme.colors.common.backgroundcolor};
`;

export const LoginNavBarButtonContainer = styled(NavBarButtonContainer)`
  @media (max-width: 576px) {
    display: flex;
  }
`;
export const LoginPageLink = styled(PageLink)`
  &:hover {
    color: ${({ theme }) => theme.colors.button.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.common.textColor};
  }
`;
