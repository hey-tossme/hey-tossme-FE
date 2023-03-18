import React, { useState } from "react";
import AccountConfirmedModal from "./AccountConfirmedModal";
import { ItemInfo } from "./FixedChatting.interface";

export default function ChattingRoomBtnArea({ item }: ItemInfo) {
    const [accountTransferStatus, setAccountTransferStatus] = useState<boolean>(
        item.accountTransferStatus
    );
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleTransferStatus = () => {
        setAccountTransferStatus(true);
    };

    return (
        <>
            <div className="item-info-btn-area">
                {accountTransferStatus ? (
                    <button className="confirmed-btn" onClick={() => setModalOpen(true)}>
                        거래 확정
                    </button>
                ) : (
                    <button className="account-btn" onClick={handleTransferStatus}>
                        계좌 전달
                    </button>
                )}
            </div>
            {modalOpen ? (
                <AccountConfirmedModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            ) : null}
        </>
    );
}
