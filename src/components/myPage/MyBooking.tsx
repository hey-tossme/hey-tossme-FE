import React, { useEffect, useState } from "react";
import MyBookingCard from "./MyBookingCard";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getUserBuyItem } from "../../api/user/user";
import { PaginationType } from "./_MyPage.interface";

export default function MyBooking({ page, setPage }: PaginationType) {
    const token = useAppSelector((state) => state.user.token);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);

    const getUserBooking = async () => {
        const result = await getUserBuyItem(token, page, 8);
        setItemList(result.data.list.content);
        setTotalPage(result.data.list.totalPages);
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
            <Pagination page={page} setPage={setPage} items={itemList} totalPage={totalPage} />
        </>
    );
}
