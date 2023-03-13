import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setCloseChat } from "../../store/modules/chat";
import { IoClose } from "react-icons/io5";
import ChattingListItem from "./ChattingListItem";

export default function ChattingList() {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="chatting-list-container">
                <button className="close-chatting-btn" onClick={() => dispatch(setCloseChat())}>
                    <IoClose className="close-chatting-btn-icon" />
                </button>
                <ChattingListItem />
            </div>
        </>
    );
}
