import React from "react";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { cardItemProps } from "./Category.interface";
import { commaNums } from "../../hooks/commaNums";
import { date } from "../../hooks/date";

export default function CardItem({ title, price, endDate, address }: cardItemProps) {
    const [bookmark, setBookmark] = useState<boolean>();

    const handleSetBookmark = () => {
        bookmark ? setBookmark(false) : setBookmark(true);
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
                    <Link to="/detail/id">
                        <p className="item-info-title">{title}</p>
                    </Link>
                    <div onClick={handleSetBookmark} className="bookmark-btn-wrapper">
                        {bookmark ? (
                            <BsBookmarkFill className="bookmark-btn" />
                        ) : (
                            <BsBookmark className="bookmark-btn" />
                        )}
                    </div>
                </div>
                <p className="item-info-price">{commaNums(price)}원</p>
                <p className="item-info-duedate">{endDate.split(" ")[0]}</p>
                <p className="item-info-address">제주특별자치도 제주시 공항로 2</p>
            </div>
        </div>
    );
}
