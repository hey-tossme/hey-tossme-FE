import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../@common/product/CardItem";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getUserBuyItem } from "../../api/user/user";

export default function MyProducts() {
    const token = useAppSelector((state) => state.user.token);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const PRODUCT_URL = "/fakeData/product.json";

    const getBookingList = () => {
        axios.get(PRODUCT_URL).then((res) => {
            const response = res.data;
            setItemList(response.data.content);
        });
    };

    const getUserProducts = async () => {
        const result = await getUserBuyItem(token, 1, 8);
        console.log(result);
    };

    useEffect(() => {
        getBookingList();
        getUserProducts();
    }, []);

    return (
        <>
            <div className="my-products-card-container">
                <div className="my-products-card-wrapper">
                    <div className="my-products-card-list">
                        {itemList.map((item) => (
                            <CardItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    );
}
