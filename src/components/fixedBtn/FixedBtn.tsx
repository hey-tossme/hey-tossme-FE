import React from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

import FixedBtnContainer from "./FixedBtnContainer";
import ChattingContainer from "../fixedChatting/ChattingContainer";

export default function FixedBtn() {
    const openChatState = useAppSelector((state) => state.chat.openChat);

    return <>{openChatState ? <ChattingContainer /> : <FixedBtnContainer />}</>;
}
