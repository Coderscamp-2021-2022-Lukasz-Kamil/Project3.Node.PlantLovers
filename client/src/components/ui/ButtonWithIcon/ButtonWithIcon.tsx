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

interface LogOutInterface {
  content?: string;
  src?: string;
  bottom?: string;
  right?: string;
  textColor?: "backgroundcolor" | "textColor";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface LogOutPosition {
  bottom?: string;
  right?: string;
  textColor?: "backgroundcolor" | "textColor";
}

export const Icon = styled.img<IconInButton>`
  display: flex;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "0px")};
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
  margin-bottom: 0.8em;
  &:hover ${Icon} {
    filter: invert(91%) sepia(99%) saturate(2%) hue-rotate(230deg)
      brightness(108%) contrast(100%);
  }
`;

const LogOut = styled(Button)<LogOutPosition>`
  position: absolute;
  width: auto;
  bottom: ${({ bottom }) => (bottom ? bottom : "unset")};
  right: ${({ right }) => (right ? right : "2%")};
  color: ${({ theme, textColor }) =>
    textColor ? theme.colors.common[textColor] : theme.colors.common.textColor};
`;

export const LogOutButton = ({
  right,
  bottom,
  src,
  content,
  textColor,
  onClick,
}: LogOutInterface) => {
  return (
    <LogOut
      background="transparent"
      color="textColor"
      hoverBackground="transparent"
      hoverColor="textInactive"
      width="auto"
      right={right}
      bottom={bottom}
      textColor={textColor}
      onClick={onClick}
    >
      <Icon src={src} />
      {content}
    </LogOut>
  );
};

export const ButtonWithIcon = (props: { content: string; src: string }) => {
  return (
    <Add
      border="1px solid black"
      fontSizeDesktop="mdl"
      color="textColor"
      background="addButton"
      width="100%"
      height="65px"
      mobileHeight="42px"
      fontSizeMobile="mdl"
      hoverColor="backgroundcolor"
      hoverBackground="secondaryHover"
    >
      <Icon src={props.src} />
      {props.content}
    </Add>
  );
};
