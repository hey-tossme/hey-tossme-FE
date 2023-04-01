import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../@common/product/CardItem";
import { getBookmarkList } from "../../api/bookmark/bookmark";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

export default function Bookmark() {
    const token = useAppSelector((state) => state.user.token);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const [page, setPage] = useState<number>(1);

    const getUserBookmarkList = async () => {
        const result = await getBookmarkList(token, page, 8);
        setItemList(result.data.list.content);
    };

    useEffect(() => {
        getUserBookmarkList();
    }, [page]);

    return (
        <>
            <div className="bookmark-card-container">
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
                            <CardItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination page={page} setPage={setPage} items={itemList} />
        </>
    );
}
