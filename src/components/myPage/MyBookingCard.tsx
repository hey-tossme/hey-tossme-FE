import React from "react";
import { customNullItemImg, commaNums, date } from "../../hooks/utils";
import { Link } from "react-router-dom";
import { ItemType } from "./_MyPage.interface";

export default function MyBookingCard({ item }: ItemType) {
    return (
        <div className="booking-card-item">
            <img
                src={customNullItemImg(item.imageUrl)}
                alt={item.title}
                className="booking-card-img"
                loading="lazy"
            />
            <div className="booking-card-contents">
                <div className="booking-card-info">
                    <div className="booking-card-title">{item.title}</div>
                    <div className="booking-card-price">{commaNums(item.price)} 원</div>
                    <div className="booking-card-date">{date(item.dueTime)}</div>
                    <div className="booking-card-place">{item.address}</div>
                </div>
                <div className="booking-card-btn-area">
                    <Link to={`/detail/${item.id}`} state={{ item: item }}>
                        <button className="go-to-detail">상세보기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
