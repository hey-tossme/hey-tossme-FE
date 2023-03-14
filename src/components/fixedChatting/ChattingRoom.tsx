import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat, setLeaveChat } from "../../store/modules/chat";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";
import { ChattingInfoState } from "./FixedChatting.interface";

export default function ChattingRoom({ chattingInfo, setChattingInfo }: ChattingInfoState) {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="chatting-room-container">
                <div className="chatting-list-container">
                    <button className="go-to-prev-btn" onClick={() => dispatch(setLeaveChat())}>
                        <IoChevronBackOutline className="go-to-prev-btn-icon" />
                    </button>
                    <button className="close-chatting-btn" onClick={() => dispatch(setCloseChat())}>
                        <IoClose className="close-chatting-btn-icon" />
                    </button>
                </div>
                미래에 멋진 채팅방이 될 예정
            </div>
        </>
    );
}
