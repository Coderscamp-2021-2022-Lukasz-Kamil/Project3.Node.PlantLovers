import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonProps } from "../../../ui/Button/Button.style";
import { Icon } from "../../../ui/ButtonWithIcon/ButtonWithIcon";

export const NavBar = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.navigationBar.primary};

  @media (max-width: 1000px) and (max-height: 500px) {
    height: 85px;
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

export const NavBarButton = styled(Button)`
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mdl}px;
  cursor: default;
  &:hover ${Icon} {
    filter: invert(91%) sepia(99%) saturate(2%) hue-rotate(230deg)
      brightness(108%) contrast(100%);
  }

  @media (max-width: 680px) {
    font-size: ${({ theme, fontSizeDesktop }) =>
      fontSizeDesktop
        ? theme.size.desktop[fontSizeDesktop]
        : theme.size.desktop.md}px;
  }

  @media (max-width: 576px) {
    display: block;
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.mdl}px;
  }
`;

export const TitleButton = styled(NavBarButton)`
  margin-left: 30px;
  justify-content: start;
  font-family: "plants_lovin";
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.titleLg}px;
  width: 100%;
  height: 10vh;

  @media (max-width: 680px) {
    font-size: ${({ theme, fontSizeDesktop }) =>
      fontSizeDesktop
        ? theme.size.desktop[fontSizeDesktop]
        : theme.size.desktop.titleMd}px;
  }

  @media (max-width: 576px) {
    display: flex;
    margin-left: 15px;
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.titleLg}px;
  }

  @media (max-width: 370px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.titleSm}px;
  }

  @media (max-width: 315px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.titleXs}px;
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
