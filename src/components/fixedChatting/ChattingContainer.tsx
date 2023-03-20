import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import ChattingList from "./ChattingList";
import ChattingRoom from "./ChattingRoom";
import { IChattingInfo } from "./_FixedChatting.interface";

export default function ChattingContainer() {
    const [chattingInfo, setChattingInfo] = useState<IChattingInfo[]>([]);
    const enterChatState = useAppSelector((state) => state.chat.enterChat);
    const CHATTING_URL = "/fakeData/chatting.json";

    const getChattingListInfo = () => {
        axios.get(CHATTING_URL).then((res) => {
            const response = res.data;
            setChattingInfo(response.data);
        });
    };

    useEffect(() => {
        getChattingListInfo();
    }, []);

    return (
        <div className="chatting-container">
            {enterChatState ? (
                <ChattingRoom chattingInfo={chattingInfo} setChattingInfo={setChattingInfo} />
            ) : (
                <ChattingList chattingInfo={chattingInfo} setChattingInfo={setChattingInfo} />
            )}
        </div>
    );
}
