import React, { useEffect, useState } from "react";
import CardItem from "../@common/product/CardItem";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getUserSellItem } from "../../api/user/user";

export default function MyProducts() {
    const token = useAppSelector((state) => state.user.token);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const [page, setPage] = useState<number>(1);

    const getUserProducts = async () => {
        const result = await getUserSellItem(token, page, 8);
        setItemList(result.data.list.content);
    };

    useEffect(() => {
        getUserProducts();
    }, [page]);

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
            <Pagination page={page} setPage={setPage} items={itemList} />
        </>
    );
}
