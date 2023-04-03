import { listProps } from "../category/_Category.interface";

export interface detailNavigateProps {
    item: any;
    page: Number;
}

export interface detailImgProps {
    url: string;
}

export interface detailInfoHeaderProps {
    item: any;
}

export interface detailInfoBodyProps {
    item: any;
    page: Number;
}

export interface detailMapProps {
    item: any;
}

export interface mapProps {
    latitude: Number;
    longitude: Number;
}

export interface detailRecommendProps {
    category: string;
}
