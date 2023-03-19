import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat, setLeaveChat } from "../../store/modules/chat";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import ChattingRoomItemInfo from "./ChattingRoomItemInfo";
import ChattingRoomChatBox from "./ChattingRoomChatBox";
import { ChattingInfoState, IChattingInfo } from "./_FixedChatting.interface";

export default function ChattingRoom({
    chattingInfo,
    setChattingInfo,
    chatId,
    setChatId,
}: ChattingInfoState) {
    const dispatch = useAppDispatch();
    const [item, setItem] = useState<IChattingInfo | null>(null);

    useEffect(() => {
        {
            chattingInfo.map((chat) => (chat.id === chatId ? setItem(chat) : null));
        }
    }, [chatId]);

    return (
        <div className="chatting-room-container">
            <div className="chatting-list-container">
                <button className="go-to-prev-btn" onClick={() => dispatch(setLeaveChat())}>
                    <IoChevronBackOutline className="go-to-prev-btn-icon" />
                </button>
                <button className="close-chatting-btn" onClick={() => dispatch(setCloseChat())}>
                    <IoClose className="close-chatting-btn-icon" />
                </button>
                <div className="chatting-room-wrapper">
                    {item ? <ChattingRoomItemInfo item={item} /> : null}
                    <ChattingRoomChatBox />
                </div>
            </div>
        </div>
    );
}
