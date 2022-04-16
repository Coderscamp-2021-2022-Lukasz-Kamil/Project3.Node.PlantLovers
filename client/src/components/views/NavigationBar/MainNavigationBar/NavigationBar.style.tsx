import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonProps } from "../../../ui/Button/Button.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";

export const NavBar = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.navigationBar.primary};
  @media (max-width: 576px) {
    height: 65px;
  }
`;

export const NavBarButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-right: 20px;
  justify-content: right;
  align-items: center;
  gap: 30px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavBarButtonContainerMobile = styled(NavBarButtonContainer)`
  display: none;
  margin-right: 0px;
  gap: 10px;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const NavBarButton = styled.button<ButtonProps>`
  border: none;
  transition: 0.2s;
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mdl}px;
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.weight[fontWeight] : theme.weight.bold};
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
  width: ${({ width }) => (width ? width : "auto")};

  &:hover ${Icon} {
    filter: invert(91%) sepia(99%) saturate(2%) hue-rotate(230deg)
      brightness(108%) contrast(100%);
  }

  @media (max-width: 576px) {
    display: block;
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.mdl}px;
  }
`;

// I will adjust this element when font will be right one//
export const TitleButton = styled(NavBarButton)`
  display: flex;
  margin-left: 30px;
  background: ${({ theme, background }) =>
    background
      ? theme.colors.button[background]
      : theme.colors.button.transparent};
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.title}px;
  width: ${({ width }) => (width ? width : 100)}%;

  @media (max-width: 576px) {
    display: block;
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.title}px;
  }
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.common.textColor};

  &:hover {
    color: white;
  }

  &.active {
    color: ${({ theme }) => theme.colors.navigationBar.secondary};
    text-decoration: underline;
    text-underline-offset: 10px;
  }

  &.active ${Icon} {
    filter: invert(89%) sepia(23%) saturate(572%) hue-rotate(37deg)
      brightness(104%) contrast(103%);
  }
`;

export const StartPageLink = styled(PageLink)`
  &.active {
    color: ${({ theme }) => theme.colors.common.textColor};
    text-decoration: none;
  }
`;
