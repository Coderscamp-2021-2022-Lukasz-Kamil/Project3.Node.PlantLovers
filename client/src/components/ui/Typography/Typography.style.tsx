import styled from "styled-components";
import { theme } from "../../../theme/theme";

interface TypographyProps {
	fontSize?: number;
	fontWeight?: number;
}

export const Typography = styled.p<TypographyProps>`
	font-size: ${({ fontSize }) => fontSize ? fontSize : theme.size.desktop.sm};
	font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : theme.weight.regular};

	@media (max-width: 576px) {
		font-size: ${({ fontSize }) =>
			fontSize ? fontSize : theme.size.mobile.sm};
	}
`;
