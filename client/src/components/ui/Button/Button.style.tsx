import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "highlighted";
}

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  background: ${({ theme, variant }) =>
    variant ? theme.colors[variant] : theme.colors.primary};
`;

export const ButtonWithBorders = styled(Button)`
  border: 5px solid black;
  border-radius: 0.5rem;
`;
