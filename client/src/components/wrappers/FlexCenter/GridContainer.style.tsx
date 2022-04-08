import styled from "styled-components";

interface GridColumnProps {
  bigScreenColumns?: number;
  smallScreenColumns?: number;
}

export const GridContainer = styled.div<GridColumnProps>`
  display: grid;
  grid-template-columns: ${({ bigScreenColumns }) =>
    bigScreenColumns ? `repeat(${bigScreenColumns}, 1fr)` : `repeat(4, 1fr)`};
  grid-template-rows: auto;
  grid-auto-flow: dense;
  grid-gap: 1em;
  justify-content: center;

  @media (max-width: 576px) {
    grid-template-columns: ${({ smallScreenColumns }) =>
      smallScreenColumns
        ? `repeat(${smallScreenColumns}, 1fr)`
        : `repeat(2, 1fr)`};
  }
`;
