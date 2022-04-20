import styled from "styled-components";

export const DropdownContainer = styled.div`
	margin-top: ${({ theme }) => theme.size.common.marginTop};
	display: flex;
	flex-flow: column;

	@media (max-width: 576px) {
		align-items: center;
	}
`;
export const Wrapper = styled.div`
	width: 670px;
    margin-bottom: 0.8em;
	padding: 0.4em 2em 0.4em 1em;
	font-size: ${({ theme }) => theme.size.desktop.mds}px;
	color: ${({ theme }) => theme.colors.common.textColor};
	background: ${({ theme }) => theme.colors.card.secondary};
	border-radius: ${({ theme }) => theme.size.common.borderRadius};
	border: 1px solid ${({ theme }) => theme.colors.common.textColor};

    &:hover {
		background-color: ${({ theme }) => theme.colors.card.highlighted};
	}

	@media (max-width: 576px) {
		width: 290px;
		font-size: ${({ theme }) => theme.size.mobile.md}px;
	}
`;
export const DropdownHeader = styled.div`
    display: flex; 
	justify-content: space-between;
    align-items: center;
`;

export const List = styled.ul`
	width: 670px;
	border-radius: ${({ theme }) => theme.size.common.borderRadius};
	background: ${({ theme }) => theme.colors.card.secondary};
	border: 2px solid #e5e5e5;
	color: ${({ theme }) => theme.colors.common.textColor};

	&:first-child {
		padding-top: 0.8em;
	}

	@media (max-width: 576px) {
		width: 290px;
		font-size: ${({ theme }) => theme.size.mobile.md}px;
	} ;
`;

export const ListItem = styled.li`
	padding-left: 1em;
	list-style: none;
	margin-bottom: 0.8em;

	&:hover {
		background-color: ${({ theme }) => theme.colors.card.highlighted};
	}
`;
