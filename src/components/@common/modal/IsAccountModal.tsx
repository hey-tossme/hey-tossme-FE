import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../store/modules/modal";
import { HiOutlineX } from "react-icons/hi";

export default function IsAccountModal() {
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
                    <div className="modal-contents">
                        상품 글쓰기를 하려면 계좌 등록이 필요합니다.
                    </div>
                </div>
            </div>
        </div>
    );
}
