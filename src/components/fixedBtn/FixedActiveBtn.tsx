import React from "react";
import { IChatState } from "./FixedBtn.interface";
import { TbPencilMinus, TbMessageCircle } from "react-icons/tb";

export default function FixedActiveBtn({ chatOpen, setChatOpen }: IChatState) {
    return (
        <>
            <button className="btns-item go-to-write-btn">
                <TbPencilMinus className="go-to-write-btn-icon" />
            </button>
            <button className="btns-item go-to-chat-btn">
                <TbMessageCircle className="go-to-chat-btn-icon" />
            </button>
        </>
    );
}
