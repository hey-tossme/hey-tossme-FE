import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setEnterChat } from "../../store/modules/chat";
import { customNullImg } from "../../utils/customImgNull";
import { chatIdInfo } from "./_FixedChatting.interface";

export default function ChattingListItem({ item, chatId, setChatId }: chatIdInfo) {
    const USER_ID = 1; // 임시 정보
    const dispatch = useAppDispatch();

    const openChatRoom = () => {
        setChatId(item.id);
        dispatch(setEnterChat());
    };

    return (
        <>
            <div className="chatting-list-item" onClick={openChatRoom}>
                {USER_ID === item.buyer.id ? (
                    <>
                        <img
                            src={customNullImg(item.seller.imageURL)}
                            alt={item.seller.name}
                            className="chatting-list-img"
                        />
                        <div className="chatting-list-content">
                            <div className="chatting-list-name">{item.seller.name}</div>
                            <div className="chatting-list-recent-msg">{item.lastMessage}</div>
                        </div>
                    </>
                ) : (
                    <>
                        <img
                            src={customNullImg(item.buyer.imageURL)}
                            alt={item.buyer.name}
                            className="chatting-list-img"
                        />
                        <div className="chatting-list-content">
                            <div className="chatting-list-name">{item.buyer.name}</div>
                            <div className="chatting-list-recent-msg">{item.lastMessage}</div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
