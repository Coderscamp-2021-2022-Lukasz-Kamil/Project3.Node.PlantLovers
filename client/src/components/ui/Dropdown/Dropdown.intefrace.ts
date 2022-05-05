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
  fontSizeDesktop?: string;
  fontSizeMobile?: string;
  listDesktopWidth?: string;
  listMobileWidth?: string;
  position?: string;
  borderRadius?: string;
  onOptionChosen?: (chosenValue: string) => void;
}

export interface DropdownLookProps {
  desktopWidth?: string;
  mobileWidth?: string;
  marginBottom?: string;
  padding?: string;
  fontSizeDesktop?: string;
  fontSizeMobile?: string;
  border?: string;
  borderRadius?: string;
}

export interface DropdownListProps {
  listDesktopWidth?: string;
  listMobileWidth?: string;
  position?: string;
}
