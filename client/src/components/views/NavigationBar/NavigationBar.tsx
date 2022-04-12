import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../ui/Button/Button.style";
import { Icon } from "../../ui/ButtonWithIcon/ButtonWithIcon";

export const NavigationBar = styled.nav`
  background: #73a942;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    height: 65px;
  }
`;

export const NavigationBarButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const NavigationBarButton = styled.button<ButtonProps>`
  padding: 0px 20px;
  margin: 0px 10px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mdl}px;
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.weight[fontWeight] : theme.weight.bold};
  color: ${({ theme, color }) =>
    color ? theme.colors.common[color] : theme.colors.common.textColor};
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : 60)}px;

  &:hover {
    color: white;
    background: transparent;
  }

  &:hover ${Icon} {
    filter: invert(91%) sepia(99%) saturate(2%) hue-rotate(230deg)
      brightness(108%) contrast(100%);
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavigationBarButtonMobile = styled(NavigationBarButton)`
  display: none;

  @media (max-width: 576px) {
    display: block;
    padding: 0px;
  }
`;

// I will adjust this element when font will be right one//
export const TitleButton = styled(NavigationBarButton)`
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.title}px;
  width: ${({ width }) => (width ? width : 800)}px;

  @media (max-width: 576px) {
    display: block;
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.title}px;
  }
`;

export const NavBar = () => {
  return (
    <NavigationBar>
      <TitleButton>Plant Lovers</TitleButton>
      <NavigationBarButtonContainer>
        <NavigationBarButton>Plants</NavigationBarButton>
        <NavigationBarButton>Add Offer</NavigationBarButton>
        <NavigationBarButton>
          <Icon src="UserVector.svg" alt="User button" />
        </NavigationBarButton>
        <NavigationBarButtonMobile>
          <Icon src="PlantVector.svg" alt="plants button" />
        </NavigationBarButtonMobile>
        <NavigationBarButtonMobile>
          <Icon src="AddVector.svg" alt="add offer button" />
        </NavigationBarButtonMobile>
        <NavigationBarButtonMobile>
          <Icon src="UserVector.svg" alt="User button" />
        </NavigationBarButtonMobile>
      </NavigationBarButtonContainer>
    </NavigationBar>
  );
};
