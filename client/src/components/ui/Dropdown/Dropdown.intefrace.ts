import { ReactNode } from "react";

export default interface IDropdown {
	title: string;
	ico: ReactNode;
	list: {
		id: number;
		name?: string;
		range?: number;
	}[];
	src?: string;
	alt?: string;
}
