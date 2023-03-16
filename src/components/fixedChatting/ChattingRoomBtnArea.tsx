import React, { useState } from "react";
import { ItemInfo } from "./FixedChatting.interface";

export default function ChattingRoomBtnArea({ item }: ItemInfo) {
    const [accountTransferStatus, setAccountTransferStatus] = useState<boolean>(
        item.accountTransferStatus
    );

    const handleTransferStatus = () => {
        setAccountTransferStatus(true);
    };

    return (
        <div className="item-info-btn-area">
            {accountTransferStatus ? (
                <button className="confirmed-btn">거래 확정</button>
            ) : (
                <button className="account-btn" onClick={handleTransferStatus}>
                    계좌 전달
                </button>
            )}
        </div>
    );
}
