import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DetailImg from "../components/detail/DetailImg";
import DetailInfoBody from "../components/detail/DetailInfoBody";
import DetailInfoHeader from "../components/detail/DetailInfoHeader";
import DetailMap from "../components/detail/DetailMap";
import DetailRecommend from "../components/detail/DetailRecommend";
import { getDetailProduct } from "../api/product/product";

export default function Detail() {
    const [item, setItem] = useState<any>();
    const location = useLocation();
    const itemId = location.pathname.replace("/detail/", "");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        getDetailProduct(+itemId).then((response) => {
            setItem(response.data);
        });
    }, []);

    useEffect(() => {
        scrollToTop();
    }, [itemId]);

    return (
        <div className="detail-wrapper">
            {item && (
                <>
                    <DetailImg url={item.imageUrl} />
                    <DetailInfoHeader item={item} />
                    <DetailInfoBody item={item} />
                    <DetailMap item={item} />
                    <DetailRecommend category={item.category} />
                </>
            )}
        </div>
    );
}
