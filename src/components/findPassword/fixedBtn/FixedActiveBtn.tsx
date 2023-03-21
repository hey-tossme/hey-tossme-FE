import React from "react";
import { useAppDispatch } from "../../../store/hooks/configureStore.hook";
import { setOpenChat } from "../../../store/modules/chat";
import { TbPencilMinus, TbMessageCircle } from "react-icons/tb";

export default function FixedActiveBtn() {
    const dispatch = useAppDispatch();

    return (
        <>
            <button className="btns-item go-to-write-btn">
                <TbPencilMinus className="go-to-write-btn-icon" />
            </button>
            <button className="btns-item go-to-chat-btn" onClick={() => dispatch(setOpenChat())}>
                <TbMessageCircle className="go-to-chat-btn-icon" />
            </button>
        </>
    );
}
