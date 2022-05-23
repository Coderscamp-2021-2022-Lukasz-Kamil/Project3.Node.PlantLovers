import styled from "styled-components";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { Input } from "../../../ui/Input/Input.style";
import { Button } from "../../../ui/Button/Button.style";

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
`;

export const TableHead = styled.thead`
  font-size: ${({ theme }) => theme.size.desktop.mds}px;

  &:first-child {
    background-color: #c8c8c8;
  }
`;

export const TableBody = styled.tbody`
  font-size: ${({ theme }) => theme.size.desktop.sm}px;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.table.oddRow};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.table.secondary};
  }
`;

export const TableHeader = styled.th`
  align-items: center;
  padding: 0.4rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  text-transform: capitalize;
  border: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
`;

export const InputSearch = styled(Input)`
  width: 15vw;
  height: 4vh;
  padding: 0 0.2rem;
  border-color: ${({ theme }) => theme.colors.table.primary};

  @media (max-width: 1240px) {
    min-width: 30vw;
  }

  @media (max-width: 850px) {
    min-width: 45vw;
  }

  @media (max-width: 576px) {
    min-width: 55vw;
  }
`;

export const ActionButton = styled(Button)`
  height: 5vh;
  min-width: 3vw;
  max-width: fit-content;
  margin: 0 1rem;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  font-weight: ${({ theme }) => theme.weight.regular};
  font-size: ${({ theme }) => theme.size.desktop.sm}px;
  border: 2px solid ${({ theme }) => theme.colors.button.secondary};

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
