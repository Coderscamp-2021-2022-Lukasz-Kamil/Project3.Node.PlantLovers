import styled from "styled-components";
import {
  DropdownListProps,
  DropdownLookProps,
  IconProps,
} from "./Dropdown.intefrace";

interface ListItem {
  marginBottom?: string;
}

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
  font-size: ${({ theme, fontSizeDesktop }) =>
    fontSizeDesktop
      ? theme.size.desktop[fontSizeDesktop]
      : theme.size.desktop.mds}px;
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
    font-size: ${({ theme, fontSizeMobile }) =>
      fontSizeMobile
        ? theme.size.mobile[fontSizeMobile]
        : theme.size.mobile.md}px;
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

export const DropdownHeaderIcon = styled(DropdownHeaderTitle)<IconProps>`
  position: ${({ position }) => (position ? position : "absolute")};
  justify-content: end;

  @media (max-width: 850px) {
    position: ${({ smallerScreenIconPosition }) =>
      smallerScreenIconPosition ? smallerScreenIconPosition : "absolute"};
  }

  @media (max-width: 576px) {
    position: absolute;
  }
`;

export const List = styled.ul<DropdownListProps>`
  width: ${({ listDesktopWidth }) =>
    listDesktopWidth ? listDesktopWidth : "40vw"};

  min-height: ${({ listDesktopHeight }) =>
    listDesktopHeight ? listDesktopHeight : "5vh"};

  border-radius: ${({ theme }) => theme.size.common.borderRadius};
  background: ${({ theme }) => theme.colors.card.secondary};
  border: 2px solid #e5e5e5;
  color: ${({ theme }) => theme.colors.common.textColor};
  position: ${({ position }) => (position ? position : "absolute")};
  padding: ${({ listPadding }) => (listPadding ? listPadding : "0")};

  z-index: 20;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }

  @media (max-width: 576px) {
    width: ${({ listMobileWidth }) =>
      listMobileWidth ? listMobileWidth : "90vw"};
    font-size: ${({ theme, listfontSizeMobile }) =>
      listfontSizeMobile
        ? theme.size.mobile[listfontSizeMobile]
        : theme.size.mobile.md}px;
    margin: ${({ listMobileMargin }) =>
      listMobileMargin ? listMobileMargin : "0"};
  } ;
`;

export const ListItem = styled.li<ListItem>`
  padding-left: 1em;
  list-style: none;
  font-size: 1rem;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "0.8em"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.textInactive};
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }
`;
