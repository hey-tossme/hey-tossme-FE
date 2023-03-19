import React from "react";
import { IMessageListInfo } from "./_FixedChatting.interface";
import { customNullImg } from "../../utils/customImgNull";

export default function ChattingRoomSendMsg({ message }: IMessageListInfo) {
    return (
        <div className="main-bottom-chat-item-send">
            <div className="main-chat-item-left">
                <div>
                    <div className="main-chat-item-name">{message.sender.name}</div>
                    <div className="main-chat-item-content">{message.message}</div>
                </div>
            </div>
            <img
                src={customNullImg(message.sender.imageURL)}
                alt={message.sender.name}
                className="main-chat-profile"
            />
        </div>
    );
}
