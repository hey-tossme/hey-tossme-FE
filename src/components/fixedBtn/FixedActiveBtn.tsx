import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setOpenChat } from "../../store/modules/chat";
import { TbPencilMinus, TbMessageCircle } from "react-icons/tb";
import { useNavigate } from "react-router";

export default function FixedActiveBtn() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleGoWritePage = () => {
        navigate("/write");
    };

    return (
        <>
            <button className="btns-item go-to-write-btn">
                <TbPencilMinus className="go-to-write-btn-icon" onClick={handleGoWritePage} />
            </button>
            <button className="btns-item go-to-chat-btn" onClick={() => dispatch(setOpenChat())}>
                <TbMessageCircle className="go-to-chat-btn-icon" />
            </button>
        </>
    );
}
