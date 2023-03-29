import React from "react";
import { useState } from "react";
import { detailInfoProps } from "./_detail.interface";
import { commaNums, date } from "../../hooks/utils";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { setBookmarkState } from "../../api/bookmark/bookmark";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

export default function DetailInfoBody({ item }: detailInfoProps) {
    const [bookmark, setBookmark] = useState<boolean>();
    const user = useAppSelector((state) => state.user);

    const handleSetBookmark = () => {
        bookmark ? setBookmark(false) : setBookmark(true);
        setBookmarkState(user.token, item.id).then((response) => {
            console.log(response);
        });
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
