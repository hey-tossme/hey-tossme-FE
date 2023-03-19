import React from "react";

export default function MyBookingCard() {
    return (
        <div className="booking-card-item">
            <img src="/" alt="/" className="booking-card-img" />
            <div className="booking-card-contents">
                <div className="booking-card-info">
                    <div className="booking-card title">제주도 풀빌라</div>
                    <div className="booking-card-price">얼마</div>
                    <div className="booking-card-date">며칠</div>
                    <div className="booking-card-place">장소</div>
                </div>
                <button className="go-to-detail">상세보기</button>
            </div>
        </div>
    );
}
