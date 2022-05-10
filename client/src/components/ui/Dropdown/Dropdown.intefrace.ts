export interface Item {
  id: number;
  name: string;
}

export interface IDropdown {
  title: string;
  list: Item[];
  src?: string;
  alt?: string;
  imageSrc: string;
  imageWidth?: number;
  imageHeigth?: number;
  imageMobileWidth?: number;
  imageMobileHeigth?: number;
  imageMarginRight?: string;
  icon?: string;
  desktopWidth?: string;
  mobileWidth?: string;
  marginBottom?: string;
  padding?: string;
  border?: string;
  borderBottom?: string;
  fontSizeDesktop?:
    | "sm"
    | "mds"
    | "md"
    | "mdl"
    | "lg"
    | "xl"
    | "titleMd"
    | "titleLg";
  fontSizeMobile?:
    | "sm"
    | "md"
    | "mdl"
    | "lg"
    | "titleXs"
    | "titleSm"
    | "titleMd"
    | "titleLg";
  listDesktopWidth?: string;
  listMobileWidth?: string;
  listfontSizeMobile?: "md" | "mdl";
  position?: string;
  borderRadius?: string;
  onOptionChosen?: (chosenValue: string) => void;
  smallerScreenIconPosition?: "absolute" | "relative";
  listMobileMargin?: string;
  display?: string;
}

export interface DropdownLookProps {
  desktopWidth?: string;
  mobileWidth?: string;
  marginBottom?: string;
  padding?: string;
  fontSizeDesktop?:
    | "sm"
    | "mds"
    | "md"
    | "mdl"
    | "lg"
    | "xl"
    | "titleMd"
    | "titleLg";
  fontSizeMobile?:
    | "sm"
    | "md"
    | "mdl"
    | "lg"
    | "titleXs"
    | "titleSm"
    | "titleMd"
    | "titleLg";
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
}

export interface DropdownListProps {
  listDesktopWidth?: string;
  listMobileWidth?: string;
  position?: string;
  listfontSizeMobile?: "md" | "mdl";
  listMobileMargin?: string;
}

export interface IconProps {
  smallerScreenIconPosition?: "absolute" | "relative";
}
