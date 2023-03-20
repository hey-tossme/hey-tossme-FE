import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat, setChatId } from "../../store/modules/chat";
import ChattingListItem from "./ChattingListItem";
import { ChattingInfoState } from "./_FixedChatting.interface";
import { IoClose } from "react-icons/io5";
import { CgScrollV } from "react-icons/cg";

export default function ChattingList({ chattingInfo, setChattingInfo }: ChattingInfoState) {
    const dispatch = useAppDispatch();
    const ITEM_HEIGHT = 100;
    const ITEM_MARGIN = 8;
    const PADDING_TOP = 40;
    const LENGTH = chattingInfo.length;
    const SCROLL_LENGTH = 4;
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
                        <ChattingListItem item={item} key={item.id} />
                    ))}
                </div>
                {LENGTH > SCROLL_LENGTH ? (
                    <div className="scroll-box">
                        <CgScrollV className="scroll-icon" />
                    </div>
                ) : null}
            </div>
        </>
    );
}
