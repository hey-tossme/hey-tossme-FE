import React from "react";
import MainBottomChatSellerItem from "./MainBottomChatSellerItem";
import MainBottomChatBuyerItem from "./MainBottomChatBuyerItem";
import { BsSendCheck } from "react-icons/bs";

export default function MainBottomChatWrapper() {
    return (
        <div className="main-bottom-chat-area">
            <div className="main-bottom-chat-list">
                <div className="main-bottom-chat-track">
                    <MainBottomChatBuyerItem contents="제주도 풀빌라 거래 가능한가요?" />
                    <MainBottomChatSellerItem contents="가능합니다! 🙌" />
                    <div className="main-bottom-chat-notification title">
                        판매자 님의 계좌번호는
                        <strong>신한은행 000-000-000000</strong>입니다.
                    </div>
                    <div className="main-bottom-chat-notification desc">
                        <BsSendCheck className="main-bottom-chat-notification-icon" />
                        판매자 님의 입금 확인 후 거래가 완료됩니다.
                    </div>
                    <MainBottomChatBuyerItem contents="입금 확인해 주세요 😊" />
                    <MainBottomChatSellerItem contents="거래 감사합니다" />
                </div>
            </div>
        </div>
    );
}
