import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ICardItem } from "./_Main.interface";

export default function MainTopCardItem({ item }: ICardItem) {
    return (
        <div className="main-top-card-item">
            <div className="main-top-card-item-inner">
                <img src={item.img} alt={item.name} className="main-top-card-img" />
                <div className="main-top-card-item-contents">
                    <div className="main-top-card-item-inner-top">
                        <div className="main-top-card-item-title">{item.name}</div>
                        <div className="main-top-card-item-book-mark-btn">
                            <BsFillBookmarkFill className="book-mark-btn-icons" />
                        </div>
                    </div>
                    <div className="main-top-card-item-price">{item.price}</div>
                    <div className="main-top-card-item-date">{item.date}</div>
                    <div className="main-top-card-item-place">{item.place}</div>
                </div>
            </div>
        </div>
    );
}
