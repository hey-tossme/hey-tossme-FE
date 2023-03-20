import React from "react";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { cardItemProps } from "../../category/_Category.interface";
import axios from "axios";
import { customNullItemImg, commaNums, date } from "../../../hooks/utils";

export default function CardItem({ item }: cardItemProps) {
    const { id, img, title, price, dueTime, address, status } = item;
    const [bookmark, setBookmark] = useState<boolean>();

    const handleSetBookmark = () => {
        bookmark ? setBookmark(false) : setBookmark(true);
        axios.post("/posts", { itemId: id });
    };

    return (
        <div className="card-item">
            {status === "done" ? <div className="sold-out-label">판매 완료</div> : null}
            <div className="item-img-area">
                <img className="item-img" src={customNullItemImg(img)} alt="card-image"></img>
            </div>
            <div className="item-info-area">
                <div className="item-info-header">
                    <Link to={`/detail/${id}`} state={{ item: item }}>
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
                <p className="item-info-duedate">{date(dueTime)}</p>
                <p className="item-info-address">제주특별자치도 제주시 공항로 2</p>
            </div>
        </div>
    );
}
