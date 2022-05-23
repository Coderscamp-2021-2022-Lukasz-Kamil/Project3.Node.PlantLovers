import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.size.desktop.lg}px;
  font-weight: 600;
  padding: 1.5rem 0 0.5rem 0;
  text-decoration: underline;
  text-underline-offset: 0.7rem;

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.size.mobile.lg}px;
  }
`;
