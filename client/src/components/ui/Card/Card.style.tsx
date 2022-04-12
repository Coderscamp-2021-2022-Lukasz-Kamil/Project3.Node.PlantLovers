import styled from "styled-components";

export enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  HIGHLIGHTED = "highlighted",
}

export interface CardProps {
  color?: Color;
  width?: number;
  height?: number;
  borderRadius?: number;
  boxShadow?: boolean;
}

export const Card = styled.div<CardProps>`
  height: ${({ height }) => (height ? height : 70)}vh;
  width: ${({ width }) => (width ? width : 32)}vw;
  background-color: ${({ theme, color }) =>
    color ? theme.colors.card[color] : theme.colors.card.secondary};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.colors.card.boxShadow : "none"};
  padding: 2rem;
  word-wrap: break-word;

  @media (max-width: 576px) {
    height: ${({ height }) => (height ? height : 100)}vh;
    width: ${({ width }) => (width ? width : 100)}vw;
    background-color: ${({ theme, color }) =>
      color ? theme.colors.card[color] : theme.colors.common.backgroundcolor};
  }
`;
