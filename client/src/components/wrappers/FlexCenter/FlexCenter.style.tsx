import styled from "styled-components";

interface FlexCenterProps {
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
}

export const FlexCenter = styled.div<FlexCenterProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
