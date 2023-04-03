import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DetailImg from "../components/detail/DetailImg";
import DetailInfoBody from "../components/detail/DetailInfoBody";
import DetailInfoHeader from "../components/detail/DetailInfoHeader";
import DetailMap from "../components/detail/DetailMap";
import DetailRecommend from "../components/detail/DetailRecommend";
import { detailNavigateProps } from "../components/detail/_detail.interface";
import { useAppSelector } from "../store/hooks/configureStore.hook";
import { getDetailProduct } from "../api/product/product";

export default function Detail() {
    const [item, setItem] = useState<any>();
    const location = useLocation();
    const state = location.state as detailNavigateProps;

    useEffect(() => {
        const itemId = location.pathname.replace("/detail/", "");
        getDetailProduct(+itemId).then((response) => {
            setItem(response.data);
        });
    }, []);

    console.log(item);

    return (
        <div className="detail-wrapper">
            {item && (
                <>
                    <DetailImg url={item.imageUrl} />
                    <DetailInfoHeader item={item} />
                    <DetailInfoBody item={item} page={state.page} />
                    <DetailMap item={item} />
                    <DetailRecommend category={item.category} />
                </>
            )}
        </div>
    );
}
