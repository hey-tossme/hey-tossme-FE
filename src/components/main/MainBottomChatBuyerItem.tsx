import React from "react";
import profile from "../../assets/images/man.png";
import { IContents } from "./Main.interface";

export default function MainBottomChatBuyerItem({ contents }: IContents) {
    return (
        <div className="main-bottom-chat-item-buyer">
            <div className="main-chat-item-left">
                <div>
                    <div className="main-chat-item-name">구매자</div>
                    <div className="main-chat-item-content">{contents}</div>
                </div>
            </div>
            <img
                src={profile}
                alt="판매자 프로필"
                className="main-chat-profile"
            />
        </div>
    );
}
