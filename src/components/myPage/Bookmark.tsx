import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../@common/product/CardItem";
import { ItemInfo } from "./_MyPage.interface";

export default function Bookmark() {
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
        <div className="bookmark-card-wrapper">
            <div
                className="bookmark-card-list"
                style={{
                    width: "1044px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {itemList.map((item) => (
                    <CardItem
                        key={item.id}
                        id={item.id}
                        img={item.image_url}
                        title={item.title}
                        price={item.price}
                        endDate={item.dueTime}
                        address=""
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
}
