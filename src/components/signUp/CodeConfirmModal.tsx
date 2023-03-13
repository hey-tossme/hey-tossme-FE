import React, { useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import { IModalController } from "./SignUp.interface";

export default function CodeConfirmModal({ setModalOpen }: IModalController) {
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
                    <div className="modal-contents">인증 번호가 전송되었습니다.</div>
                </div>
            </div>
        </div>
    );
}
