import styled from "styled-components";

export interface CardProps {
  color?: "primary" | "secondary" | "highlighted";
  width?: string;
  height?: string;
  borderRadius?: number;
  boxShadow?: boolean;
}

export const Card = styled.div<CardProps>`
  height: ${({ height }) => (height ? height : "70vh")};
  width: ${({ width }) => (width ? width : "32vw")};
  background-color: ${({ theme, color }) =>
    color ? theme.colors.card[color] : theme.colors.card.secondary};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.colors.card.boxShadow : "none"};
  padding: 2rem;
  word-wrap: break-word;

  @media (max-width: 576px) {
    height: ${({ height }) => (height ? height : "100vh")};
    width: ${({ width }) => (width ? width : "100vw")};
    background-color: ${({ theme, color }) =>
      color ? theme.colors.card[color] : theme.colors.common.backgroundcolor};
  }
`;
