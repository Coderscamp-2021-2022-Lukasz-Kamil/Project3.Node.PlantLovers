import styled from "styled-components";
import { FlexWrapper } from "../../../wrappers/FlexCenter/FlexWrapper.style";
import { TableWrapper } from "../UsersOffersPage/AdminUsersOffersPage.styled";

export const FlexLayout = styled(FlexWrapper)`
  width: 100%;
  min-height: 70vh;
  padding: 3rem;
`;

export const TableInputWrapper = styled(FlexWrapper)`
  justify-content: center;
  min-height: 60vh;
  width: 30vw;
  padding: 0;
  flex-wrap: wrap;
`;

export const InputWrapper = styled(FlexWrapper)`
  align-items: flex-end;
  height: 5vh;
`;

export const WrapperOfTable = styled(TableWrapper)`
  min-height: 85%;
  overflow-x: hidden;
`;
