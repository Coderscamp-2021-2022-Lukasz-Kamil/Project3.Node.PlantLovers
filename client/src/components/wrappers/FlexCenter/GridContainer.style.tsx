import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: dense;
  grid-gap: 1em;
  justify-content: center;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
