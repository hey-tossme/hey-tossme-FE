export interface searchStateProps {
    category: string;
    keyword: string;
    sido_area: string;
    sigun_area: string;
    duedate: string;
    deadline: false;
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
