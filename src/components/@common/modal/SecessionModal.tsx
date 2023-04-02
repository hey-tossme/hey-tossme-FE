import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../store/modules/modal";
import { HiOutlineX } from "react-icons/hi";
import { useAppSelector } from "../../../store/hooks/configureStore.hook";
import { deleteUser } from "../../../api/user/user";
import { setLogin } from "../../../store/modules/user";

export default function SecessionModal() {
    const token = useAppSelector((state) => state.user.token);
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

    const handleSecessionUser = () => {
        deleteUser(token);
        setLogin({
            token: "",
            id: 0,
            account: null,
        });
        closeModal();
    };

    return (
        <div className="modal-background" ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
            <div className="modal-container">
                <div className="modal-wrapper">
                    <button className="close-modal-btn" onClick={closeModal}>
                        <HiOutlineX className="close-modal-btn-icon" />
                    </button>
                    <div className="modal-contents">
                        <p>떠나신다니 아쉬워요.</p>
                        <p>확인 버튼을 누르시면 회원 탈퇴가 진행됩니다.</p>
                        <button className="account-confirm-btn" onClick={handleSecessionUser}>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
