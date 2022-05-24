import styled from "styled-components";

export interface ButtonProps {
  fontSizeDesktop?:
    | "sm"
    | "mds"
    | "md"
    | "mdl"
    | "lg"
    | "xl"
    | "titleMd"
    | "titleLg";
  fontSizeMobile?:
    | "sm"
    | "md"
    | "mdl"
    | "titleXs"
    | "titleSm"
    | "titleMd"
    | "titleLg";
  fontWeight?: "bold" | "regular";
  color?:
    | "backgroundcolor"
    | "textInactive"
    | "textColor"
    | "secondaryTextInactive";
  background?:
    | "primary"
    | "hover"
    | "secondary"
    | "secondaryHover"
    | "transparent"
    | "addButton";

  width?: string;
  height?: string;
  padding?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  borderRadius?: string;
  border?: string;
  hoverColor?: "backgroundcolor" | "textColor" | "textInactive";
  hoverBackground?: "hover" | "secondaryHover" | "transparent";
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}px;
  border: ${({ border }) => (border ? border : "none")};
  cursor: pointer;
  transition: 0.2s;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mds}px;
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.weight[fontWeight] : theme.weight.bold};
  color: ${({ theme, color }) =>
    color ? theme.colors.common[color] : theme.colors.common.backgroundcolor};
  background: ${({ theme, background }) =>
    background ? theme.colors.button[background] : theme.colors.button.primary};
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "45px")};

  &:hover {
    color: ${({ theme, hoverColor }) =>
      hoverColor
        ? theme.colors.common[hoverColor]
        : theme.colors.common.textColor};
    background: ${({ theme, hoverBackground }) =>
      hoverBackground
        ? theme.colors.button[hoverBackground]
        : theme.colors.button.hover};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.md}px;
    width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : "160px")};
    height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : "42px")};
  }
`;

export const FilterButton = styled(Button)`
  border-radius: 10px;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.sm}px;
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
  color: ${({ theme, color }) =>
    color
      ? theme.colors.common[color]
      : theme.colors.common.secondaryTextInactive};
  background: ${({ theme, background }) =>
    background ? theme.colors.button[background] : theme.colors.card.secondary};
  width: ${({ width }) => (width ? width : "93px")};
  height: ${({ height }) => (height ? height : "35px")};

  &:hover {
    color: ${({ theme, color }) =>
      color ? theme.colors.common[color] : theme.colors.common.backgroundcolor};
    background: ${({ theme, background }) =>
      background
        ? theme.colors.button[background]
        : theme.colors.button.secondaryHover};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.sm}px;
    width: ${({ width }) => (width ? width : "68px")};
    height: ${({ height }) => (height ? height : "21px")};
  }
`;
