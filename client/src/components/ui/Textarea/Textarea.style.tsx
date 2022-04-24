import styled from "styled-components";

export interface TextAreaProps {
  width?: number;
  height?: number;
  fontSize?: "xs" | "sm" | "mds" | "md" | "mdl";
  fontSizeMobile?: "xs" | "sm" | "md" | "mdl" | "lg";
  borderRadius?: number;
}

export const Textarea = styled.textarea<TextAreaProps>`
  width: ${({ width }) => (width ? width : 100)}%;
  min-height: ${({ height }) => (height ? height : 15)}vh;
  background-color: ${({ theme }) => theme.colors.input.primary};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}px;
  border: 1px solid #000;
  padding: 0.5rem;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.size.desktop[fontSize] : theme.size.desktop.mds}px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
    font-family: "Poppins";
    text-align: center;
    line-height: 12vh;
  }

  @media (max-width: 576px) {
    font-size: ${({ fontSizeMobile, theme }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.md}px;
    height: ${({ height }) => (height ? height : 10)}vh;
  }
`;
