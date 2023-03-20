import React, { useState, useEffect } from "react";
import ChattingRoomBtnArea from "./ChattingRoomBtnArea";
import { customNullItemImg, commaNums, date } from "../../hooks/utils";
import { ItemInfo } from "./_FixedChatting.interface";

export default function ChattingRoomItemInfo({ item }: ItemInfo) {
    const [userState, setUserState] = useState<boolean>(false);
    const USER_ID = 1; // 임시 정보

    useEffect(() => {
        {
            USER_ID === item.seller.id ? setUserState(true) : setUserState(false);
        }
    }, []);

    return (
        <div className="item-info-container">
            <img
                src={customNullItemImg(item.item.imageUrl)}
                alt={item.item.title}
                className="item-info-img"
            />
            <div className="item-info-content">
                <div className="item-info-content-inner">
                    <div className="item-info-title">{item.item.title}</div>
                    <div className="item-info-price">{commaNums(item.item.price)} 원</div>
                    <div className="item-info-due-time">{date(item.item.dueTime)}</div>
                </div>
            </div>
            {userState ? <ChattingRoomBtnArea item={item} /> : null}
        </div>
    );
}
