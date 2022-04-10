import styled from "styled-components";
import { theme } from "../../../theme/theme";

interface TypographyProps {
  fontSize?: "xs" | "sm" | "mds" | "md" | "mdl" | "lg" | "xl" | "xxl" | "xxxl";
  fontSizeMobile?: "xs" | "sm" | "md" | "mdl" | "lg" | "xl" | "xxl";
  fontWeight?: "light" | "regular" | "bold";
}

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ fontSize }) =>
    fontSize ? theme.size.desktop[fontSize] : theme.size.desktop.sm}px;
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : theme.weight.regular};

  @media (max-width: 576px) {
    font-size: ${({ fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.sm}px;
  }
`;
