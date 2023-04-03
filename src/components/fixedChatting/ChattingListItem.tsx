import React from "react";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setEnterChat, setChatId } from "../../store/modules/chat";
import { customNullImg } from "../../hooks/utils";
import { ItemInfo } from "./_FixedChatting.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { deleteRoomsAxios } from "../../api/chat/chat";

export default function ChattingListItem({ item, chatState, setChatState }: ItemInfo) {
    const USER_ID = useAppSelector((state) => state.user.id);
    const token = useAppSelector((state) => state.user.token);
    const dispatch = useAppDispatch();

    const openChatRoom = () => {
        dispatch(setChatId(item.id));
        dispatch(setEnterChat());
    };

    const deleteChatItem = async (e: any) => {
        e.stopPropagation();
        await deleteRoomsAxios(item.id, token);
        setChatState(!chatState);
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
                            loading="lazy"
                        />
                        <div style={{ width: "100%", position: "relative" }}>
                            <div className="chatting-list-content">
                                <div className="chatting-list-name">{item.seller.name}</div>
                                <div className="chatting-list-recent-msg">{item.lastMessage}</div>
                            </div>
                            <button
                                aria-label="채팅방 삭제"
                                onClick={deleteChatItem}
                                style={{ position: "absolute", top: "12px", right: "20px" }}
                            >
                                <RiDeleteBack2Fill style={{ fontSize: "24px", color: "#ec7357" }} />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <img
                            src={customNullImg(item.buyer.imageURL)}
                            alt={item.buyer.name}
                            className="chatting-list-img"
                            loading="lazy"
                        />
                        <div style={{ width: "100%", position: "relative" }}>
                            <div className="chatting-list-content">
                                <div className="chatting-list-name">{item.buyer.name}</div>
                                <div className="chatting-list-recent-msg">{item.lastMessage}</div>
                            </div>
                            <button
                                aria-label="채팅방 삭제"
                                onClick={deleteChatItem}
                                style={{ position: "absolute", top: "12px", right: "20px" }}
                            >
                                <RiDeleteBack2Fill style={{ fontSize: "24px", color: "#ec7357" }} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
