import React, { useEffect, useState } from "react";
import CardItem from "../@common/product/CardItem";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getUserSellItem } from "../../api/user/user";
import { PaginationType } from "./_MyPage.interface";

export default function MyProducts({ page, setPage }: PaginationType) {
    const token = useAppSelector((state) => state.user.token);
    const [bookmark, setBookmark] = useState<boolean>(false);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);

    const getUserProducts = async () => {
        const result = await getUserSellItem(token, page, 8);
        setItemList(result.data.list.content);
        setTotalPage(result.data.list.totalPages);
        console.log(result);
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
                            <CardItem
                                key={item.id}
                                item={item}
                                page={page}
                                id={item.id}
                                bookmark={bookmark}
                                setBookmark={setBookmark}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination page={page} setPage={setPage} items={itemList} totalPage={totalPage} />
        </>
    );
}
