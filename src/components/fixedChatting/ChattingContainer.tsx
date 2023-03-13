import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import ChattingList from "./ChattingList";
import ChattingRoom from "./ChattingRoom";

export default function ChattingContainer() {
    const enterChatState = useAppSelector((state) => state.chat.enterChat);

    return (
        <div className="chatting-container">
            {enterChatState ? <ChattingRoom /> : <ChattingList />}
        </div>
    );
}
