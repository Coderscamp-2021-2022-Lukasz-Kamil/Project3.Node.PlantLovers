import styled from "styled-components";
import { DropdownListProps, DropdownLookProps } from "./Dropdown.intefrace";

export const DropdownContainer = styled.div`
  display: flex;
  flex-flow: column;

  @media (max-width: 576px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div<DropdownLookProps>`
  width: ${({ desktopWidth }) => (desktopWidth ? desktopWidth : "40vw")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "0.8em"};
  padding: ${({ padding }) => (padding ? padding : "0.4em 1em 0.4em 1em")};
  font-size: ${({ fontSizeDesktop }) =>
    fontSizeDesktop ? fontSizeDesktop : "18px"};
  color: ${({ theme }) => theme.colors.common.textColor};
  background: ${({ theme }) => theme.colors.card.secondary};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  border: ${({ border }) => (border ? border : "1px solid black")};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? borderBottom : "1px solid black"};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }

  @media (max-width: 576px) {
    width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : "90vw")};
    font-size: ${({ fontSizeMobile }) =>
      fontSizeMobile ? fontSizeMobile : "14px"};
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

  @media (max-width: 576px) {
    display: none;
  }
`;

export const List = styled.ul<DropdownListProps>`
  width: ${({ listDesktopWidth }) =>
    listDesktopWidth ? listDesktopWidth : "40vw"};
  border-radius: ${({ theme }) => theme.size.common.borderRadius};
  background: ${({ theme }) => theme.colors.card.secondary};
  border: 2px solid #e5e5e5;
  color: ${({ theme }) => theme.colors.common.textColor};
  position: ${({ position }) => (position ? position : "absolute")};
  z-index: 20;
  cursor: pointer;

  &:first-child {
    padding-top: 0.8em;
  }

  @media (max-width: 576px) {
    width: ${({ listMobileWidth }) =>
      listMobileWidth ? listMobileWidth : "90vw"};
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
