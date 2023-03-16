import React from "react";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default function CardItem() {
    const [bookmark, setBookmark] = useState<boolean>();

    const handleSetBookmark = () => {
        setBookmark(true);
    };

    return (
        <div className="card-item">
            <div className="item-img-area">
                <img
                    className="item-img"
                    src="https://via.placeholder.com/208x140"
                    alt="card-image"
                ></img>
            </div>
            <div className="item-info-area">
                <div className="item-info-header">
                    <p className="item-info-title">제주도 풀빌라</p>
                    <div onClick={handleSetBookmark} className="bookmark-btn-wrapper">
                        {bookmark ? (
                            <BsBookmarkFill className="bookmark-btn" />
                        ) : (
                            <BsBookmark className="bookmark-btn" />
                        )}
                    </div>
                </div>
                <p className="item-info-price">199,999원</p>
                <p className="item-info-duedate">2023-03-03</p>
                <p className="item-info-address">제주특별자치도 제주시 공항로 2</p>
            </div>
        </div>
    );
}
