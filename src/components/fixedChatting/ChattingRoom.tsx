import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat, setLeaveChat } from "../../store/modules/chat";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import ChattingRoomChatBox from "./ChattingRoomChatBox";
import { ChattingInfoState, IChattingInfo } from "./_FixedChatting.interface";

export default function ChattingRoom({ chattingInfo, chatState, setChatState }: ChattingInfoState) {
    const [item, setItem] = useState<IChattingInfo | null>(null);
    const chatId = useSelector((state: any) => state.chat.chatId);
    const dispatch = useAppDispatch();

    useEffect(() => {
        chattingInfo.map((data) => {
            data.id === chatId ? setItem(data) : null;
        });
    });

    const goPrev = () => {
        dispatch(setLeaveChat());
        setChatState(!chatState);
    };

    return (
        <div className="chatting-room-container">
            <div className="chatting-list-container">
                <button className="go-to-prev-btn" aria-label="채팅 리스트 보기" onClick={goPrev}>
                    <IoChevronBackOutline className="go-to-prev-btn-icon" />
                </button>
                <button
                    className="close-chatting-btn"
                    aria-label="채팅창 닫기"
                    onClick={() => dispatch(setCloseChat())}
                >
                    <IoClose className="close-chatting-btn-icon" />
                </button>
                <div className="chatting-room-wrapper">
                    {item && <ChattingRoomChatBox item={item} />}
                </div>
            </div>
        </div>
    );
}
