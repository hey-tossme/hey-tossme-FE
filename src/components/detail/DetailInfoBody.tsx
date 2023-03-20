import React from "react";
import { useState } from "react";
import { detailInfoProps } from "./_detail.interface";
import { commaNums } from "../../hooks/utils";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default function DetailInfoBody({ item }: detailInfoProps) {
    const [bookmark, setBookmark] = useState<boolean>();

    const handleSetBookmark = () => {
        bookmark ? setBookmark(false) : setBookmark(true);
        // axios.post("/posts", { itemId: id });
    };

    return (
        <div className="detail-info-body-area">
            <div className="info-title-group">
                <div className="info-title">{item.title}</div>
                <div onClick={handleSetBookmark}>
                    {bookmark ? (
                        <BsBookmarkFill className="bookmark-btn-fill" />
                    ) : (
                        <BsBookmark className="bookmark-btn-not-fill" />
                    )}
                </div>
            </div>
            <div className="info-price">{`${commaNums(item.price)}원`}</div>
            <div className="info-date">{`예약일자 ${item.dueTime.split(" ")[0]}`}</div>
            <div className="info-desc">{item.contents}</div>
        </div>
    );
}
