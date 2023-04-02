import React, { useEffect, useState } from "react";
import MyBookingCard from "./MyBookingCard";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getUserBuyItem } from "../../api/user/user";

export default function MyBooking() {
    const token = useAppSelector((state) => state.user.token);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const [page, setPage] = useState<number>(1);

    const getUserBooking = async () => {
        const result = await getUserBuyItem(token, page, 4);
        setItemList(result.data.list.content);
    };

    useEffect(() => {
        getUserBooking();
    }, [page]);

    return (
        <>
            <div className="booking-item-list-container">
                <div className="booking-item-list-wrapper">
                    {itemList.map((item) => (
                        <MyBookingCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Pagination page={page} setPage={setPage} items={itemList} />
        </>
    );
}
