import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat, setLeaveChat } from "../../store/modules/chat";
import { IoChevronBackOutline, IoClose } from "react-icons/io5";

export default function ChattingRoom() {
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
            </div>
        </>
    );
}
