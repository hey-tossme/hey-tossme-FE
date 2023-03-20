import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../@common/product/CardItem";
import { ItemInfo } from "./_MyPage.interface";

export default function MyProducts() {
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const PRODUCT_URL = "/fakeData/product.json";

    const getBookingList = () => {
        axios.get(PRODUCT_URL).then((res) => {
            const response = res.data;
            setItemList(response.data.content);
        });
    };

    useEffect(() => {
        getBookingList();
        console.log(itemList);
    }, []);

    return (
        <div className="my-products-card-wrapper">
            <div className="my-products-card-list">
                {itemList.map((item) => (
                    <CardItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
