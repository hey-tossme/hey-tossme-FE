import { ReactNode } from "react";

export interface searchStateProps {
    category: string | null;
    keyword: string | null;
    region: string | null;
    startDue: string | null;
    endDue: string | null;
    size: number;
    pageNum: number | null;
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
}

export interface LocationSelectItemProps {
    region: string;
    sigun: string;
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

export interface calendarContainerProps {
    className: "string";
    children: ReactNode;
}

export interface renderCustomHeaderProps {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
}
