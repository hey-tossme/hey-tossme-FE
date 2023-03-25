import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

import FixedBtnContainer from "./FixedBtnContainer";
import ChattingContainer from "../fixedChatting/ChattingContainer";

export default function FixedBtn() {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const token = localStorage.getItem("token");
    const openChatState = useAppSelector((state) => state.chat.openChat);

    useEffect(() => {
        {
            token ? setIsLogin(true) : setIsLogin(false);
        }
        console.log(isLogin);
    }, [token]);

    return <>{openChatState ? <ChattingContainer /> : <FixedBtnContainer />}</>;
}
