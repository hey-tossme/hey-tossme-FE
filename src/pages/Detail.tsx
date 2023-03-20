import React from "react";
import { useLocation } from "react-router";
import DetailImg from "../components/detail/DetailImg";
import DetailInfoBody from "../components/detail/DetailInfoBody";
import DetailInfoHeader from "../components/detail/DetailInfoHeader";
import DetailMap from "../components/detail/DetailMap";
import DetailRecommend from "../components/detail/DetailRecommend";
import { detailLocationProps } from "../components/detail/_detail.interface";

export default function Detail() {
    const location = useLocation();
    const state = location.state as detailLocationProps;

    return (
        <div className="detail-wrapper">
            <DetailImg url={state.item.imageUrl} />
            <DetailInfoHeader item={state.item} />
            <DetailInfoBody item={state.item} />
            <DetailMap item={state.item} />
            <DetailRecommend category={state.item.category} />
        </div>
    );
}
