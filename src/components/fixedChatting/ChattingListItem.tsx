import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setEnterChat } from "../../store/modules/chat";
import profileImg from "../../assets/images/profile-user.png";
import { ChattingItem } from "./FixedChatting.interface";

export default function ChattingListItem({ item }: ChattingItem) {
    const USER_ID = 1; // 임시 정보
    const dispatch = useAppDispatch();

    const customNullImg = (src: string) => {
        return src ? src : profileImg;
    };

    return (
        <>
            <div className="chatting-list-item" onClick={() => dispatch(setEnterChat())}>
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
