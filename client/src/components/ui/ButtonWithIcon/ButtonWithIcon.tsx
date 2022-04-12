import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button.style";

interface ButtonWithImage {
  src: string;
  alt: string;
  imageSize?: {
    width: string;
    height: string;
  };
}

export const Icon = styled.img<ButtonWithImage>`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "30px")};
  height: ${({ imageSize }) => (imageSize?.height ? imageSize.height : "30px")};
  color: white;
  margin-right: 10px;
  transition: 0.2s;
  @media (max-width: 576px) {
    width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "20px")};
    height: ${({ imageSize }) =>
      imageSize?.height ? imageSize.height : "20px"};
  }
`;

export const AddPhotos = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mdl}px;
  color: ${({ theme, color }) =>
    color ? theme.colors.common[color] : theme.colors.common.textColor};
  background: ${({ theme, background }) =>
    background ? theme.colors.button[background] : theme.colors.card.secondary};
  width: ${({ width }) => (width ? width : 454)}px;
  height: ${({ height }) => (height ? height : 87)}px;
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
    grid-template-columns: 0.32fr 0.68fr;
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.mdl}px;
    width: ${({ width }) => (width ? width : 188)}px;
    height: ${({ height }) => (height ? height : 42)}px;
  }
`;

export const ButtonWithImage = (props: {
  content: string;
  src: string;
  alt: string;
}) => {
  return (
    <div>
      <AddPhotos>
        <Icon src={props.src} alt="add photos button" />
        {props.content}
      </AddPhotos>
    </div>
  );
};
