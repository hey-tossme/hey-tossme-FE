import { listProps } from "../category/_Category.interface";

export interface detailLocationProps {
    item: any;
}

export interface detailImgProps {
    url: string;
}

export interface detailInfoProps {
    item: any;
}

export interface detailMapProps {
    item: any;
}

export interface mapProps {
    latitude: Number;
    longtitude: Number;
}

export interface detailRecommendProps {
    category: string;
}
