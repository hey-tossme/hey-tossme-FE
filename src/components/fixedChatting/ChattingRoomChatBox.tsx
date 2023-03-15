import React, { useState, useEffect } from "react";
import axios from "axios";
import ChattingRoomSendMsg from "./ChattingRoomSendMsg";
import ChattingRoomReceiveMsg from "./ChattingRoomReceiveMsg";
import { IMessageInfo } from "./FixedChatting.interface";

export default function ChattingRoomChatBox() {
    const [messageList, setMessageList] = useState<IMessageInfo[]>([]);
    const USER_ID = 1; // 임시 정보
    const MESSAGE_URL = "/data/message.json";

    const getChattingListInfo = () => {
        axios.get(MESSAGE_URL).then((res) => {
            const response = res.data;
            setMessageList(response.data);
        });
    };

    useEffect(() => {
        getChattingListInfo();
    }, []);

    return (
        <>
            <div className="chat-box-container">
                <div className="chat-box-list">
                    <div className="chat-box-track">
                        {messageList.map((message) =>
                            message.sender.id === USER_ID ? (
                                <ChattingRoomSendMsg message={message} key={message.id} />
                            ) : (
                                <ChattingRoomReceiveMsg message={message} key={message.id} />
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="send-chat-box">
                <input type="text" className="send-chat-box-input" />
                <button className="send-chat-submit-btn">전송</button>
            </div>
        </>
    );
}
