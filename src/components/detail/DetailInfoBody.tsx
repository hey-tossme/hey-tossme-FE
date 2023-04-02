import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { detailInfoBodyProps } from "./_detail.interface";
import { commaNums, date } from "../../hooks/utils";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import {
    setBookmarkState,
    deleteBookmarkState,
    getBookmarkState,
} from "../../api/bookmark/bookmark";
import { setModalOpen } from "../../store/modules/modal";

export default function DetailInfoBody({ item, page }: detailInfoBodyProps) {
    const user = useAppSelector((state) => state.user);
    const [bookmark, setBookmark] = useState<boolean>(false);
    const [isBookmarkItems, setIsBookmarkItems] = useState<any>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        getBookmarkState(user.token, page, 8).then((response) => {
            setIsBookmarkItems(response.data.content);
        });
    }, []);

    useEffect(() => {
        isBookmarkItems &&
            isBookmarkItems.map((isBookmarkItem: any) => {
                if (item.id === isBookmarkItem.itemId) {
                    setBookmark(true);
                }
            });
    }, [isBookmarkItems]);

    const handleSetBookmark = () => {
        if (bookmark) {
            deleteBookmarkState(user.token, item.id).then((response) => {
                setBookmark(false);
            });
        } else {
            setBookmarkState(user.token, item.id).then(() => {
                setBookmark(true);
            });
        }

        !user && dispatch(setModalOpen());
    };

    return (
        <div className="detail-info-body-area">
            <div className="info-title-group">
                <div className="info-title">{item.title}</div>
                <div onClick={handleSetBookmark} style={{ cursor: "pointer" }}>
                    {bookmark ? (
                        <BsBookmarkFill className="bookmark-btn-fill" />
                    ) : (
                        <BsBookmark className="bookmark-btn-not-fill" />
                    )}
                </div>
            </div>
            <div className="info-price">{`${commaNums(item.price)}원`}</div>
            <div className="info-date">{`예약일자 ${date(item.dueTime)}`}</div>
            <div className="info-desc">{item.contents}</div>
        </div>
    );
}
