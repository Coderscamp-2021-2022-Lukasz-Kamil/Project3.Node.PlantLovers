import styled from "styled-components";

export interface ButtonProps {
  fontSizeDesktop?: "sm" | "mds" | "md" | "mdl" | "lg" | "title";
  fontSizeMobile?: "sm" | "md" | "mdl" | "title";
  fontWeight?: "bold" | "regular";
  color?:
    | "backgroundcolor"
    | "textInactive"
    | "textColor"
    | "secondaryTextInactive";
  background?: "primary" | "hover" | "secondary" | "secondaryHover";
  width?: number | "auto";
  height?: number;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
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
  width: ${({ width }) => (width ? width : 200)}px;
  height: ${({ height }) => (height ? height : 45)}px;

  &:hover {
    color: ${({ theme, color }) =>
      color ? theme.colors.common[color] : theme.colors.common.textColor};
    background: ${({ theme, background }) =>
      background ? theme.colors.button[background] : theme.colors.button.hover};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.md}px;
    width: ${({ width }) => (width ? width : 160)}px;
    height: ${({ height }) => (height ? height : 42)}px;
  }
`;

export const AddCategoryOrHeightButton = styled(Button)`
  width: ${({ width }) => (width ? width : 55)}px;

  @media (max-width: 576px) {
    width: ${({ width }) => (width ? width : 45)}px;
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
  width: ${({ width }) => (width ? width : 93)}px;
  height: ${({ height }) => (height ? height : 35)}px;

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
    width: ${({ width }) => (width ? width : 68)}px;
    height: ${({ height }) => (height ? height : 21)}px;
  }
`;
