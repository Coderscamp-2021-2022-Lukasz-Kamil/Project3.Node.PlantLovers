import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button.style";
import LogoStyle from "../../../global-styles/GlobalStyles";
import { Icon } from "../ButtonWithIcon/ButtonWithIcon";

interface NavigationBarProps {
  width?: number;
}
//Unfinished//
export const NavigationBar = styled.nav<NavigationBarProps>`
  background: #73a942;
  height: 100px;
  width: ${({ width }) => (width ? width : 100)}%;
`;
export const TitleButton = styled(Button)`
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
  height: 100px;
`;

export const NavigationBarButton = styled(Button)`
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
`;

export const UserButton = styled(Button)`
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
`;

export const NavigationBarIcon = styled(Icon)`
  left: 0px;
`;

export const NavBar = () => {
  return (
    <NavigationBar>
      <TitleButton>Plant Lovers</TitleButton>
      <NavigationBarButton>Plants</NavigationBarButton>
      <NavigationBarButton>Add Offer</NavigationBarButton>
      <Button>
        <Icon src="UserVector.svg" alt="User button" />
      </Button>
    </NavigationBar>
  );
};
