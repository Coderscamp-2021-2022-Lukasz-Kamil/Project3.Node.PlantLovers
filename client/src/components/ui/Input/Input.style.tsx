import styled from "styled-components";

interface InputProps {
    fontSizeDesktop?: "sm" | "mds" | "md" | "mdl";
    fontSizeMobile?: "sm" | "md" | "mdl";
    fontWeight?: "regular" | "light";
    color?:
    | "primary"
    | "secondary"
    | "placeholder"
    | "transparent";
    width?: number;
    height?: number;
}

export const Input = styled.input<InputProps>`
    border-radius: 5px;
    border: 1px solid #000;
    cursor: text;
    font-size: ${({ theme, fontSizeDesktop }) =>
        fontSizeDesktop ? theme.size.desktop[fontSizeDesktop] : theme.size.desktop.mds}px;
    font-weight: ${({ theme, fontWeight }) =>
        fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
    background: ${({ theme }) => theme.colors.input.primary};
    width: ${({ width }) => (width ? width : 670)}px;
    height: ${({ height }) => (height ? height : 45)}px;

  &::placeholder {
    opacity: 0.2;
    font-family: "Poppins";
    text-align: center;
    color: ${({ theme, color }) =>
      color ? theme.colors.input[color] : theme.colors.input.placeholder};
  }

    @media (max-width: 576px) {
        font-size: ${({ theme, fontSizeMobile }) =>
            fontSizeMobile ? theme.size.mobile[fontSizeMobile] : theme.size.mobile.xs}px;
        width: ${({ width }) => (width ? width : 280)}px;
        height: ${({ height }) => (height ? height : 30)}px;
    }
`;
