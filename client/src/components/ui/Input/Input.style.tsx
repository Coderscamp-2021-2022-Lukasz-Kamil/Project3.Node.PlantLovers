import styled from "styled-components";

interface InputProps {
    fontSize?: "xs" | "sm" | "mds" | "md" | "mdl";
    fontWeight?: "regular" | "light";
    color?:
    | "primary"
    | "secondary"
    | "placeholder";
    width?: number;
}

export const Input = styled.input<InputProps>`
    border-radius: 5px;
    border: 2px solid #000;
    cursor: pointer;
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.size.desktop[fontSize] : theme.size.desktop.mds}px;
    font-weight: ${({ theme, fontWeight }) =>
        fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
    background: ${({ theme }) => theme.colors.input.primary};
    width: ${({ width }) => (width ? width : 670)}px;

    &::placeholder {
        opacity: 0.2;
        font-family: 'Poppins';
        color: ${({ theme, color }) =>
            color ? theme.colors.input[color] : theme.colors.input.placeholder};
    }

    @media (max-width: 576px) {
        font-size: ${({ theme, fontSize }) =>
            fontSize ? theme.size.desktop[fontSize] : theme.size.desktop.xs}px;
        width: ${({ width }) => (width ? width : 280)}px;
    }
`;
