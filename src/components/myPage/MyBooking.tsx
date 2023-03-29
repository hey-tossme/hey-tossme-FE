import React, { useEffect, useState } from "react";
import axios from "axios";
import MyBookingCard from "./MyBookingCard";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getUserBuyItem } from "../../api/user/user";

export default function MyBooking() {
    const token = useAppSelector((state) => state.user.token);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const PRODUCT_URL = "/fakeData/product.json";

    const getBookingList = () => {
        axios.get(PRODUCT_URL).then((res) => {
            const response = res.data;
            setItemList(response.data.content);
        });
    };

    const getUserBooking = async () => {
        const result = await getUserBuyItem(token, 1, 8);
        console.log(result);
    };

    useEffect(() => {
        getBookingList();
        getUserBooking();
    }, []);

    return (
        <>
            <div className="booking-item-list-container">
                <div className="booking-item-list-wrapper">
                    {itemList.map((item) => (
                        <MyBookingCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Pagination />
        </>
    );
}
