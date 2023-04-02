import React from "react";
import { IMessageListInfo } from "./_FixedChatting.interface";
import { customNullImg } from "../../hooks/utils";

export default function ChattingRoomReceiveMsg({ message }: IMessageListInfo) {
    return (
        <div className="main-bottom-chat-item-receive">
            <img
                src={customNullImg(message.sender.imageURL)}
                alt={message.sender.name}
                className="main-chat-profile"
                loading="lazy"
            />
            <div className="main-chat-item-right">
                <div>
                    <div className="main-chat-item-name">{message.sender.name}</div>
                    <div className="main-chat-item-content">{message.message}</div>
                </div>
            </div>
        </div>
    );
}
