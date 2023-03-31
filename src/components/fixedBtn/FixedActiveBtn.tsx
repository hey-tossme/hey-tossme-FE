import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setOpenChat } from "../../store/modules/chat";
import { TbPencilMinus, TbMessageCircle } from "react-icons/tb";
import { useNavigate } from "react-router";

export default function FixedActiveBtn() {
    const user = useAppSelector((state: any) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleGoWritePage = () => {
        user.account && navigate("/write");
    };

    return (
        <>
            <button
                className="btns-item go-to-write-btn"
                disabled={!user.account}
                onClick={handleGoWritePage}
            >
                <TbPencilMinus className="go-to-write-btn-icon" />
            </button>
            <button className="btns-item go-to-chat-btn" onClick={() => dispatch(setOpenChat())}>
                <TbMessageCircle className="go-to-chat-btn-icon" />
            </button>
        </>
    );
}
