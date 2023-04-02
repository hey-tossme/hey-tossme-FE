import React from "react";
import { customNullImg } from "../../hooks/utils";
import { NewMsgType } from "./_FixedChatting.interface";

export default function ChattingRoomNewSendMsg({ msg }: NewMsgType) {
    return (
        <div className="main-bottom-chat-item-send">
            <div className="main-chat-item-left">
                <div>
                    <div className="main-chat-item-name">{msg.userName}</div>
                    <div className="main-chat-item-content">{msg.message}</div>
                </div>
            </div>
            <img
                src={customNullImg(msg.profileUrl)}
                alt={msg.userName}
                className="main-chat-profile"
                loading="lazy"
            />
        </div>
    );
}
