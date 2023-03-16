import React, { useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import { IModalController } from "../signUp/SignUp.interface";

export default function AccountConfirmedModal({ setModalOpen }: IModalController) {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        document.body.style.overflow = "unset";
        setModalOpen(false);
    };

    // 영역 밖 클릭
    const modalOutSideClick = (e: any) => {
        if (modalRef.current === e.target) {
            document.body.style.overflow = "unset";
            setModalOpen(false);
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
                        <button className="account-confirm-btn" onClick={closeModal}>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
