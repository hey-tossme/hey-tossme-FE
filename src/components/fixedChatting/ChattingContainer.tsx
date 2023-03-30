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
    const CHATTING_URL = "/fakeData/chatting.json";

    const getChattingListInfo = () => {
        axios.get(CHATTING_URL).then((res) => {
            const response = res.data;
            setChattingInfo(response.data);
        });
    };

    const getChatRooms = async () => {
        const result = await getChatRoomsAxios(token);
        console.log(result);
    };

    useEffect(() => {
        getChattingListInfo();
        getChatRooms();
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
