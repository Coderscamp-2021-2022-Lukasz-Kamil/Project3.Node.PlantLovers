import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button.style";

interface IconInButton {
  width?: number;
  height?: number;
  marginRight?: string;
  mobileWidth?: number;
  mobileHeight?: number;
}

export const Icon = styled.img<IconInButton>`
  display: flex;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "10px")};
  transition: 0.2s;
  width: ${({ width }) => (width ? width : 30)}px;
  height: ${({ height }) => (height ? height : 30)}px;

  @media (max-width: 680px) {
    width: ${({ width }) => (width ? width : 25)}px;
    height: ${({ height }) => (height ? height : 25)}px;
  }

  @media (max-width: 576px) {
    width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : 20)}px;
    height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : 20)}px;
  }
`;

export const Add = styled(Button)`
  border: 1px solid black;
  margin-bottom: 0.8em;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mdl}px;
  color: ${({ theme, color }) =>
    color ? theme.colors.common[color] : theme.colors.common.textColor};
  background: ${({ theme, background }) =>
    background ? theme.colors.button[background] : theme.colors.card.secondary};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "65px")};
  &:hover {
    color: ${({ theme, color }) =>
      color ? theme.colors.common[color] : theme.colors.common.backgroundcolor};
    background: ${({ theme, background }) =>
      background
        ? theme.colors.button[background]
        : theme.colors.button.secondaryHover};
  }
  &:hover ${Icon} {
    filter: invert(91%) sepia(99%) saturate(2%) hue-rotate(230deg)
      brightness(108%) contrast(100%);
  }
  @media (max-width: 576px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.mdl}px;
    height: ${({ height }) => (height ? height : "42px")};
  }
`;

const LogOut = styled(Button)`
  position: absolute;
  right: 0;
`;

export const LogOutButton = (props: { content: string; src: string }) => {
  return (
    <LogOut background="transparent" color="textColor">
      <Icon src={props.src} />
      {props.content}
    </LogOut>
  );
};

export const ButtonWithIcon = (props: { content: string; src: string }) => {
  return (
    <Add>
      <Icon src={props.src} />
      {props.content}
    </Add>
  );
};
