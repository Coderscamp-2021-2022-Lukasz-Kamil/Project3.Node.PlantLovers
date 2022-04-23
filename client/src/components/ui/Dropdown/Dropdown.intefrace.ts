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
}
