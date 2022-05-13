import styled from "styled-components";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";

export const TableWrapper = styled(FlexWrapper)`
  overflow-x: scroll;
  min-height: 80vh;
  width: 100%;
  align-items: center;
  padding: 2rem 1rem;

  .align-right {
    text-align: right;
    line-height: 100%;
  }

  .align-center {
    text-align: center;
  }

  .offer-photo {
    text-align: center;
  }
  .offer-photo img {
    width: 100px;
    height: 100px;
  }
`;

export const Table = styled.table`
  display: block;
  max-width: fit-content;
  margin: 0 auto;
  overflow-x: auto;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.table.primary};
  border-collapse: collapse;

  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.table.oddRow};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.table.secondary};
  }
`;

export const THead = styled.thead`
  font-size: ${({ theme }) => theme.size.desktop.mds}px;

  &:first-child {
    background-color: #c8c8c8;
  }
`;

export const TBody = styled.tbody`
  font-size: ${({ theme }) => theme.size.desktop.sm}px;
`;

export const TR = styled.tr``;

export const TH = styled.th`
  align-items: center;
  padding: 0.4rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  text-transform: capitalize;
  border: 1px solid #ddd;
`;

export const TD = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

export const InputCheckbox = styled.input`
  width: 0.9rem;
  height: 0.9rem;
`;

export const InputSearch = styled.input`
  min-width: 15vw;
  height: 4vh;
  padding: 0 0.2rem;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.table.primary};
`;

export const ActionButton = styled.button`
  min-width: fit-content;
  max-width: 4vw;
  padding: 0.4rem;
  background-color: #fff;
  border-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.secondary};
  }

  &.delete {
    color: ${({ theme }) => theme.colors.button.deleteButton};
  }

  &.delete:hover {
    border: 2px solid #f41414;
  }

  &.activate {
    color: ${({ theme }) => theme.colors.button.primary};
  }

  &.activate:hover {
    border: 2px solid #538d22;
  }
`;
