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
  iconPosition?: "absolute" | "relative";
  listMobileMargin?: string;
  textPosition?: "center" | "left";
  listMarginTop?: string;
  triangleDisplay?: string;
  headerIconWidth?: "100%" | "unset";
  dropdownHeaderTitleWidth?: "100%" | "unset";
  iconMobileDisplay?: "block" | "none";
  triangleMobileMargin?: string;
  triangleMobileJustify?: string;
  triangleWrapperMobileWidth?: string;
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
  listMarginTop?: string;
}

export interface IconProps {
  iconPosition?: "absolute" | "relative";
  headerIconWidth?: "100%" | "unset";
  iconMobileDisplay?: "block" | "none";
}

export interface DropdownHeaderTitleProps {
  textPosition?: "center" | "left";
  dropdownHeaderTitleWidth?: "100%" | "unset";
}

export interface TriangleAboveListContainerProps {
  triangleDisplay?: string;
}

export interface TriangleAboveListProps {
  triangleMobileMargin?: string;
}

export interface TriangleAboveListWrapperProps {
  triangleMobileJustify?: string;
  triangleWrapperMobileWidth?: string;
}
