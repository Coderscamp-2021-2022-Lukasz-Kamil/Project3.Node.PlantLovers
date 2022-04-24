import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-flow: column;

  @media (max-width: 576px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 20vw;
  padding: 0.3em 1em 0.3em 1em;
  font-size: ${({ theme }) => theme.size.desktop.md}px;
  color: ${({ theme }) => theme.colors.common.textColor};
  background: ${({ theme }) => theme.colors.card.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textColor};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }

  @media (max-width: 576px) {
    width: 90vw;
    font-size: ${({ theme }) => theme.size.mobile.md}px;
  }
`;
export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const DropdownHeaderTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const DropdownHeaderIcon = styled(DropdownHeaderTitle)`
  position: absolute;
  justify-content: end;
`;

export const List = styled.ul`
  width: 20vw;
  background: ${({ theme }) => theme.colors.card.secondary};
  border: 2px solid #e5e5e5;
  color: ${({ theme }) => theme.colors.common.textColor};

  &:first-child {
    padding-top: 0.8em;
  }

  @media (max-width: 576px) {
    width: 90vw;
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
