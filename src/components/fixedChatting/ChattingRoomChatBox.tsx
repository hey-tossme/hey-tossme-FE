import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import ChattingRoomSendMsg from "./ChattingRoomSendMsg";
import ChattingRoomReceiveMsg from "./ChattingRoomReceiveMsg";
import ChattingRoomNewSendMsg from "./ChattingRoomNewSendMsg";
import ChattingRoomNewReceiveMsg from "./ChattingRoomNewReceiveMsg";
import ChattingRoomBtnArea from "./ChattingRoomBtnArea";
import { customNullItemImg, commaNums, date } from "../../hooks/utils";
import { IMessageInfo, NewMsgInfo } from "./_FixedChatting.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getMsgAxios } from "../../api/chat/chat";
import { ItemType } from "./_FixedChatting.interface";

import * as StompJs from "@stomp/stompjs";

export default function ChattingRoomChatBox({ item }: ItemType) {
    const USER_ID = useAppSelector((state) => state.user.id);
    const [userState, setUserState] = useState<boolean>(item.seller.id === USER_ID);
    const [messageList, setMessageList] = useState<IMessageInfo[]>([]);
    const [newMsgList, setNewMsgList] = useState<NewMsgInfo[]>([]);
    const [chatMsg, setChatMsg] = useState<string>("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const token = useAppSelector((state) => state.user.token);
    const client = useRef({});

    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: "ws://20.214.139.103:8080/ws",
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: () => {
                subscribe();
            },
            onStompError: (frame) => {
                console.error(frame);
            },
        });

        client.current.activate();
    };

    const disconnect = () => {
        client.current.deactivate();
    };

    const subscribe = () => {
        client.current.subscribe(`/exchange/chat.exchange/room.${item.id}`, (body) => {
            const json_body = JSON.parse(body.body);
            setNewMsgList((_chat_list) => [..._chat_list, json_body]);
        });
    };

    const publish = () => {
        if (!client.current.connected) return;

        client.current.publish({
            destination: `/pub/chat.${item.id}.messages`,
            body: JSON.stringify({
                senderId: USER_ID,
                userName: USER_ID === item.buyer.id ? item.buyer.name : item.seller.name,
                profileUrl: USER_ID === item.buyer.id ? item.buyer.imageURL : item.seller.imageURL,
                message: chatMsg,
            }),
        });

        setChatMsg("");
    };

    const sendAccount = () => {
        if (!client.current.connected) return;

        client.current.publish({
            destination: `/pub/chat.${item.id}.messages`,
            body: JSON.stringify({
                senderId: USER_ID,
                userName: USER_ID === item.buyer.id ? item.buyer.name : item.seller.name,
                profileUrl: USER_ID === item.buyer.id ? item.buyer.imageURL : item.seller.imageURL,
                message:
                    USER_ID === item.buyer.id
                        ? `${item.buyer.bankName} ${item.buyer.account}`
                        : `${item.seller.bankName} ${item.seller.account}`,
            }),
        });
    };

    const getChattingMsgList = async () => {
        const result = await getMsgAxios(token, item.id);
        setMessageList(result.data);
    };

    useEffect(() => {
        connect();

        return () => disconnect();
    }, []);

    useEffect(() => {
        getChattingMsgList();
    }, []);

    useLayoutEffect(() => {
        if (scrollRef) {
            scrollRef.current!.scrollIntoView({
                block: "end",
                inline: "nearest",
            });
        }
    }, [messageList, newMsgList]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        publish();
    };

    const pressEnterKey = (event: any) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    return (
        <>
            <div className="item-info-container">
                <img
                    src={customNullItemImg(item.item.imageUrl)}
                    alt={item.item.title}
                    className="item-info-img"
                    loading="lazy"
                />
                <div className="item-info-content">
                    <div className="item-info-content-inner">
                        <div className="item-info-title">{item.item.title}</div>
                        <div className="item-info-price">{commaNums(item.item.price)} 원</div>
                        <div className="item-info-due-time">{date(item.item.dueTime)}</div>
                    </div>
                </div>
                {userState ? (
                    <ChattingRoomBtnArea item={item} sendAccount={sendAccount} />
                ) : item.item.status === "DONE" ? (
                    <div className="item-info-btn-area">
                        <button className="confirmed-btn" disabled>
                            거래 완료
                        </button>
                    </div>
                ) : null}
            </div>
            <div className="chat-box-container">
                <div className="chat-box-list">
                    <div
                        className="chat-box-track"
                        ref={scrollRef}
                        style={{
                            height: "auto",
                            padding: "12px 0",
                        }}
                    >
                        {messageList.map((message) =>
                            message.sender.id === USER_ID ? (
                                <ChattingRoomSendMsg message={message} key={message.id} />
                            ) : (
                                <ChattingRoomReceiveMsg message={message} key={message.id} />
                            )
                        )}
                        {newMsgList.map((msg, idx) =>
                            msg.senderId === USER_ID ? (
                                <ChattingRoomNewSendMsg msg={msg} key={idx} />
                            ) : (
                                <ChattingRoomNewReceiveMsg msg={msg} key={idx} />
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="send-chat-box">
                <input
                    type="text"
                    className="send-chat-box-input"
                    onKeyDown={pressEnterKey}
                    onChange={(e) => setChatMsg(e.target.value)}
                    value={chatMsg}
                />
                <button className="send-chat-submit-btn" onClick={handleSubmit}>
                    전송
                </button>
            </div>
        </>
    );
}
