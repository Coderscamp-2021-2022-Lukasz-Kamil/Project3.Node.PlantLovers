import styled from "styled-components";

interface InputProps {
  fontSizeDesktop?: "sm" | "mds" | "md" | "mdl";
  fontSizeMobile?: "sm" | "md" | "mdl";
  fontWeight?: "regular" | "light";
  color?: "primary" | "secondary" | "placeholder" | "transparent";
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Input = styled.input<InputProps>`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}px;
  border: 1px solid #000;
  cursor: text;
  padding-left: 10px;
  outline: none;
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mds}px;
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
  background: ${({ theme }) => theme.colors.input.primary};
  width: ${({ width }) => (width ? width : "670px")};
  height: ${({ height }) => (height ? height : "45px")};

  &::placeholder {
    opacity: 0.8;
    font-family: "Poppins";
    text-align: center;
    color: ${({ theme, color }) =>
      color ? theme.colors.input[color] : theme.colors.input.placeholder};
  }

  @media (max-width: 576px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.xs}px;
    width: ${({ width }) => (width ? width : "280px")};
    height: ${({ height }) => (height ? height : "33px")};
  }
`;
export const InputUser = styled(Input)`
  margin-bottom: 15px;
  width: ${({ width }) => (width ? width : "300px")};
  height: ${({ height }) => (height ? height : "45px")};

  &::placeholder {
    text-transform: uppercase;
  }

  @media (max-width: 576px) {
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.md}px;
    font-weight: ${({ theme, fontWeight }) =>
      fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
    background: ${({ theme }) => theme.colors.input.transparent};
    width: ${({ width }) => (width ? width : "300px")};
    height: ${({ height }) => (height ? height : "45px")};
  }
`;
