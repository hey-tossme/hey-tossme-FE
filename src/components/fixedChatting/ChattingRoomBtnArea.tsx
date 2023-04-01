import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import AccountConfirmedModal from "../@common/modal/AccountConfirmedModal";
import ModalPortal from "../@common/modal/portal/ModalPortal";
import { setModalOpen } from "../../store/modules/modal";
import { sendAccountAxios } from "../../api/chat/chat";
import { SendAccount } from "./_FixedChatting.interface";

export default function ChattingRoomBtnArea({ item, sendAccount }: SendAccount) {
    const user = useAppSelector((state) => state.user);
    const modalOpen = useSelector((state: any) => state.modal.modalOpen);

    const dispatch = useDispatch();
    const [accountTransferStatus, setAccountTransferStatus] = useState<boolean>(
        item.accountTransferStatus
    );
    const [tradeStatus, setTradeStatus] = useState<boolean>(false);

    const handleTransferStatus = () => {
        sendAccount();
        sendAccountAxios(user.token, item.id);
        setAccountTransferStatus(true);
    };

    const showModal = () => {
        dispatch(setModalOpen());
    };

    return (
        <>
            <div className="item-info-btn-area">
                {accountTransferStatus ? (
                    tradeStatus ? (
                        <button className="confirmed-btn" disabled>
                            거래 완료
                        </button>
                    ) : (
                        <button className="confirmed-btn" onClick={showModal}>
                            거래 확정
                        </button>
                    )
                ) : item.item.status === "DONE" ? (
                    <button className="confirmed-btn" disabled>
                        거래 완료
                    </button>
                ) : (
                    <button className="account-btn" onClick={handleTransferStatus}>
                        계좌 전달
                    </button>
                )}
            </div>
            {modalOpen ? (
                <ModalPortal>
                    <AccountConfirmedModal
                        tradeStatus={tradeStatus}
                        setTradeStatus={setTradeStatus}
                        item={item}
                    />
                </ModalPortal>
            ) : null}
        </>
    );
}
