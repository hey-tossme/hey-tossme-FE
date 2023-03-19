import React from "react";
import profile from "../../assets/images/woman.png";
import { IContents } from "./_Main.interface";

export default function MainBottomChatSellerItem({ contents }: IContents) {
    return (
        <div className="main-bottom-chat-item-receive">
            <img src={profile} alt="판매자 프로필" className="main-chat-profile" />
            <div className="main-chat-item-right">
                <div>
                    <div className="main-chat-item-name">판매자</div>
                    <div className="main-chat-item-content">{contents}</div>
                </div>
            </div>
        </div>
    );
}
