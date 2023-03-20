import React, { useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../store/modules/modal";
import { ITradeModal } from "../../fixedChatting/_FixedChatting.interface";

export default function AccountConfirmedModal({ setTradeStatus }: ITradeModal) {
    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        dispatch(setModalClose());
    };

    const handleTradeStatus = () => {
        closeModal();
        setTradeStatus(true);
    };

    const modalOutSideClick = (e: any) => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };

    return (
        <div className="modal-background" ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
            <div className="modal-container">
                <div className="modal-wrapper">
                    <button className="close-modal-btn" onClick={closeModal}>
                        <HiOutlineX className="close-modal-btn-icon" />
                    </button>
                    <div className="modal-contents">
                        <div className="modal-desc">확인 버튼을 클릭하면 거래가 확정됩니다.</div>
                        <button className="account-confirm-btn" onClick={handleTradeStatus}>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
