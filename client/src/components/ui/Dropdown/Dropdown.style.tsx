import styled from "styled-components";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import {
  DropdownHeaderTitleProps,
  DropdownListProps,
  DropdownLookProps,
  IconProps,
  TriangleAboveListContainerProps,
  TriangleAboveListProps,
  TriangleAboveListWrapperProps,
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
  cursor: pointer;
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
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

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

  @media (max-width: 576px) {
    flex-direction: row-reverse;
  }
`;

export const DropdownHeaderTitle = styled.div<DropdownHeaderTitleProps>`
  width: ${({ dropdownHeaderTitleWidth }) =>
    dropdownHeaderTitleWidth ? dropdownHeaderTitleWidth : "100%"};
  display: flex;
  justify-content: ${({ textPosition }) =>
    textPosition ? textPosition : "center"};
  position: relative;
`;

export const DropdownHeaderIcon = styled(DropdownHeaderTitle)<IconProps>`
  position: ${({ iconPosition }) => (iconPosition ? iconPosition : "relative")};
  justify-content: end;
  width: ${({ headerIconWidth }) =>
    headerIconWidth ? headerIconWidth : "100%"};

  @media (max-width: 576px) {
    display: ${({ iconMobileDisplay }) =>
      iconMobileDisplay ? iconMobileDisplay : "block"};
  }
`;

export const List = styled.ul<DropdownListProps>`
  margin-top: ${({ listMarginTop }) => (listMarginTop ? listMarginTop : "0")};
  width: ${({ listDesktopWidth }) =>
    listDesktopWidth ? listDesktopWidth : "40vw"};

  min-height: ${({ listDesktopHeight }) =>
    listDesktopHeight ? listDesktopHeight : "5vh"};

  border-radius: ${({ theme }) => theme.size.common.borderRadius};
  background: ${({ theme }) => theme.colors.card.secondary};
  border: 2px solid #f9f8f8;
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
    font-size: ${({ theme, listfontSizeMobile }) =>
      listfontSizeMobile
        ? theme.size.mobile[listfontSizeMobile]
        : theme.size.mobile.md}px;
    margin: ${({ listMobileMargin }) =>
      listMobileMargin ? listMobileMargin : "0"};
  } ;
`;

export const TriangleAboveListContainer = styled(
  FlexWrapper
)<TriangleAboveListContainerProps>`
  display: ${({ triangleDisplay }) =>
    triangleDisplay ? triangleDisplay : "none"};
`;

export const TriangleAboveListWrapper = styled(
  FlexWrapper
)<TriangleAboveListWrapperProps>`
  width: 20vw;

  @media (max-width: 576px) {
    justify-content: ${({ triangleMobileJustify }) =>
      triangleMobileJustify ? triangleMobileJustify : "start"};
    padding: 0 1em 0 1em;
    width: ${({ triangleWrapperMobileWidth }) =>
      triangleWrapperMobileWidth ? triangleWrapperMobileWidth : "22.2vw"};
  }
`;

export const TriangleAboveList = styled.div<TriangleAboveListProps>`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 15px solid #f9f8f8;
  margin: 0 1.25em 0 0;
  position: absolute;
  top: -17px;

  @media (max-width: 576px) {
    margin: ${({ triangleMobileMargin }) =>
      triangleMobileMargin ? triangleMobileMargin : "0.1em 0 0"};
  }
`;

export const ListItem = styled.li`
  padding-left: 1em;
  list-style: none;
  font-size: 1rem;
  margin-bottom: 0.6em;
  // border-bottom: 1px solid ${({ theme }) =>
    theme.colors.common.textInactive};

  &:hover {
    background-color: ${({ theme }) => theme.colors.card.highlighted};
  }
`;
