import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat } from "../../store/modules/chat";
import ChattingListItem from "./ChattingListItem";
import { ChattingInfoState } from "./FixedChatting.interface";
import { IoClose } from "react-icons/io5";
import { CgScrollV } from "react-icons/cg";

export default function ChattingList({
    chattingInfo,
    setChattingInfo,
    chatId,
    setChatId,
}: ChattingInfoState) {
    const dispatch = useAppDispatch();

    const ITEM_HEIGHT = 100;
    const ITEM_MARGIN = 8;
    const PADDING_TOP = 80;
    const LENGTH = chattingInfo.length;
    const MAX_HEIGHT = LENGTH * (ITEM_HEIGHT + ITEM_MARGIN) + PADDING_TOP;

    return (
        <>
            <div className="chatting-list-container">
                <button className="close-chatting-btn" onClick={() => dispatch(setCloseChat())}>
                    <IoClose className="close-chatting-btn-icon" />
                </button>
                <div
                    className="chatting-list-item-wrapper"
                    style={{
                        height: MAX_HEIGHT,
                    }}
                >
                    {chattingInfo.map((item) => (
                        <ChattingListItem
                            item={item}
                            key={item.id}
                            chatId={chatId}
                            setChatId={setChatId}
                        />
                    ))}
                </div>
                {LENGTH > 4 ? (
                    <div className="scroll-box">
                        <CgScrollV className="scroll-icon" />
                    </div>
                ) : null}
            </div>
        </>
    );
}
