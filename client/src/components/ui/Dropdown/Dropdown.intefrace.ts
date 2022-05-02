import { ReactNode } from "react";

export interface Item {
  id: number;
  name: string;
}

export interface IDropdown {
  title: string;
  ico: ReactNode;
  list: Item[];
  src?: string;
  alt?: string;

  desktopWidth?: string;
  mobileWidth?: string;
  marginBottom?: string;
  padding?: string;
  border?: string;
  borderBottom?: string;
  fontSizeDesktop?: string;
  fontSizeMobile?: string;
  listDesktopWidth?: string;
  listMobileWidth?: string;
  position?: string;
  borderRadius?: string;
}

export interface DropdownLookProps {
  desktopWidth?: string;
  mobileWidth?: string;
  marginBottom?: string;
  padding?: string;
  fontSizeDesktop?: string;
  fontSizeMobile?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
}

export interface DropdownListProps {
  listDesktopWidth?: string;
  listMobileWidth?: string;
  position?: string;
}
