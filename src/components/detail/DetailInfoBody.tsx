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
    const bookmarkList = useAppSelector((state) => state.bookmark);
    const [bookmark, setBookmark] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        bookmarkList &&
            bookmarkList.map((bookmarkItem: any) => {
                if (item.id === bookmarkItem.itemId) {
                    setBookmark(true);
                }
            });
    }, [bookmarkList]);

    const handleSetBookmark = () => {
        if (bookmark) {
            setBookmark(false);
            deleteBookmarkState(user.token, item.id);
        } else {
            setBookmark(true);
            setBookmarkState(user.token, item.id);
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
