import React, { useEffect, useState } from "react";
import CardItem from "../@common/product/CardItem";
import { getBookmarkState } from "../../api/bookmark/bookmark";
import Pagination from "../@common/product/Pagination";
import { ItemInfo } from "./_MyPage.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { PaginationType } from "./_MyPage.interface";

export default function Bookmark({ page, setPage }: PaginationType) {
    const token = useAppSelector((state) => state.user.token);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [itemList, setItemList] = useState<ItemInfo[]>([]);
    const [bookmark, setBookmark] = useState<boolean>(true);

    const getUserBookmarkList = async () => {
        const result = await getBookmarkState(token, page, 8);
        setItemList(result.data.content);
        setTotalPage(result.data.totalPages);
    };

    useEffect(() => {
        getUserBookmarkList();
    }, [page, bookmark]);

    return (
        <>
            <div className="bookmark-card-container">
                <div className="bookmark-card-wrapper">
                    <div
                        className="bookmark-card-list"
                        style={{
                            width: "1044px",
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        {itemList.map((item) => (
                            <CardItem
                                item={item}
                                key={item.id}
                                id={item.itemId}
                                page={page}
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
