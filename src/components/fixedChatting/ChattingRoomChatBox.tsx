import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import axios from "axios";
import ChattingRoomSendMsg from "./ChattingRoomSendMsg";
import ChattingRoomReceiveMsg from "./ChattingRoomReceiveMsg";
import { IMessageInfo } from "./_FixedChatting.interface";

export default function ChattingRoomChatBox() {
    const [messageList, setMessageList] = useState<IMessageInfo[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const ITEM_HEIGHT = 56;
    const ITEM_MARGIN = 12;
    const LENGTH = messageList.length;
    const MAX_HEIGHT = LENGTH * (ITEM_HEIGHT + ITEM_MARGIN);

    const USER_ID = 1; // 임시 정보
    const MESSAGE_URL = "/fakeData/message.json";

    const getChattingListInfo = () => {
        axios.get(MESSAGE_URL).then((res) => {
            const response = res.data;
            setMessageList(response.data);
        });
    };

    useEffect(() => {
        getChattingListInfo();
    }, []);

    useLayoutEffect(() => {
        if (scrollRef) {
            scrollRef.current!.scrollIntoView({
                block: "end",
                inline: "nearest",
            });
        }
    }, [messageList]);

    const test = () => {
        alert("이벤트 확인");
    };

    const pressEnterKey = (e: any) => {
        if (e.key === "Enter") {
            test();
        }
    };

    return (
        <>
            <div className="chat-box-container">
                <div className="chat-box-list">
                    <div
                        className="chat-box-track"
                        ref={scrollRef}
                        style={{
                            height: MAX_HEIGHT,
                        }}
                    >
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
                <input type="text" className="send-chat-box-input" onKeyDown={pressEnterKey} />
                <button className="send-chat-submit-btn" onClick={test}>
                    전송
                </button>
            </div>
        </>
    );
}
