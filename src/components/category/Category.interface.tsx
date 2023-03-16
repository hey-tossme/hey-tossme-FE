export interface searchStateProps {
    category: string | null;
    keyword: string | null;
    region: string | null;
    startDue: string | null;
    endDue: string | null;
}

export interface sidoDataType {
    id: number;
    name: string;
}

export interface LocationItemProps {
    region: string;
}

export interface sigunDataType {
    id: number;
    name: string;
}

export interface LocationSelectItemProps {
    region: string;
    sigun: string;
}
