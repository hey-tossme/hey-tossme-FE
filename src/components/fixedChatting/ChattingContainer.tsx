import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import ChattingList from "./ChattingList";
import ChattingRoom from "./ChattingRoom";
import { getChatRoomsAxios } from "../../api/chat/chat";
import { IChattingInfo } from "./_FixedChatting.interface";

export default function ChattingContainer() {
    const enterChatState = useAppSelector((state) => state.chat.enterChat);
    const token = useAppSelector((state) => state.user.token);
    const [chattingInfo, setChattingInfo] = useState<IChattingInfo[]>([]);
    const [chatState, setChatState] = useState<boolean>(false);

    const getChatRooms = async () => {
        const result = await getChatRoomsAxios(token);
        setChattingInfo(result.data);
    };

    useEffect(() => {
        getChatRooms();
    }, [chatState]);

    return (
        <div className="chatting-container">
            {enterChatState ? (
                <ChattingRoom
                    chattingInfo={chattingInfo}
                    setChattingInfo={setChattingInfo}
                    chatState={chatState}
                    setChatState={setChatState}
                />
            ) : (
                <ChattingList
                    chattingInfo={chattingInfo}
                    setChattingInfo={setChattingInfo}
                    chatState={chatState}
                    setChatState={setChatState}
                />
            )}
        </div>
    );
}
