import { ReactNode } from "react";
import CardList from "./CardList";

export interface searchStateProps {
    category: string | null;
    searchTitle: string | null;
    region: string | null;
    startDue: string | null;
    endDue: string | null;
}

export interface sidoDataType {
    readonly id: number;
    readonly name: string;
}

export interface sigunDataType {
    readonly id: number;
    readonly name: string;
}

export interface LocationItemProps {
    region: string;
    locationList: any;
}

export interface LocationSelectItemProps {
    region: string;
    sigun: string;
}

export interface calendarContainerProps {
    className: "string";
    children: ReactNode;
}

export interface renderCustomHeaderProps {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
}

export interface CategoryBarProps {
    setItem: React.Dispatch<React.SetStateAction<listProps[] | null>>;
}

export interface SearchBarProps {
    setItems: React.Dispatch<React.SetStateAction<listProps[] | null>>;
}

export interface CardListProps {
    items: Array<listProps> | null;
}

export interface cardItemProps {
    item: listProps;
}

export interface listProps {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    dueTime: string;
    address: string;
    status: string;
}

export interface PaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    items: Array<listProps> | null;
}
