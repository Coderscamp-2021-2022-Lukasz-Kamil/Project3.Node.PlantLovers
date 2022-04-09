import styled from "styled-components";
import { theme } from "../../../theme/theme";

interface TypographyProps {
	fontSize?: number;
	fontWeight?: number;
}

export const Typography = styled.p<TypographyProps>`
	font-size: ${({ fontSize }) =>
		fontSize ? theme.size.desktop.lg : theme.size.desktop.sm};
	font-weight: ${({ fontWeight }) =>
		fontWeight ? theme.weight.bold : theme.weight.regular};

	@media (max-width: 576px) {
		font-size: ${({ fontSize }) =>
			fontSize ? theme.size.mobile.mdl : theme.size.mobile.sm};
	}
`;
