import React, { useEffect, useState } from "react";
import axios from "axios";
import { detailRecommendProps } from "./_detail.interface";
import CardItem from "../@common/product/CardItem";

export default function DetailRecommend({ category }: detailRecommendProps) {
    const PRODUCTS_URL = "/fakeData/product.json";
    const [cardList, setCardList] = useState<Array<any> | null>();

    useEffect(() => {
        axios
            .get(PRODUCTS_URL, {
                params: {
                    category: category,
                },
            })
            .then((res) => {
                const copyList = [];
                for (let i = 0; i < 6; i++) {
                    copyList.push(res.data.data.content[i]);
                }
                setCardList(copyList);
            });
    }, [category]);

    return (
        <div className="detail-category-wrapper">
            <p className="category-title">같은 카테고리 상품 추천</p>
            <div className="category-list">
                {cardList &&
                    cardList.map((item) => {
                        return <CardItem key={item.id} item={item} />;
                    })}
            </div>
        </div>
    );
}
