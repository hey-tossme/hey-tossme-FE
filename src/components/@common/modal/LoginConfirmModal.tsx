import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../store/modules/modal";
import { HiOutlineX } from "react-icons/hi";

export default function LoginConfirmModal() {
    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        dispatch(setModalClose());
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
                    <div className="modal-contents">로그인 후 이용 가능합니다.</div>
                </div>
            </div>
        </div>
    );
}
