import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setOpenChat, setEnterChat, setChatId } from "../../store/modules/chat";
import { detailInfoProps } from "./_detail.interface";
import { customNullImg } from "../../hooks/utils";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { getMakeRoomsAxios } from "../../api/chat/chat";

export default function DetailInfoHeader({ item }: detailInfoProps) {
    const token = useAppSelector((state) => state.user.token);
    const dispatch = useAppDispatch();
    const chatId = useSelector((state: any) => state.chat.chatId);
    const [userInfo, setUserInfo] = useState({ name: "신짱구", imageUrl: "" });

    useEffect(() => {
        axios
            .get("/members", {
                headers: {
                    Authorization: `accessToken`,
                },
            })
            .then((res) => {
                setUserInfo(res.data);
            });
    }, []);

    const handleEditItem = () => {
        axios.patch("");
    };

    const handleDeleteItem = () => {
        axios.delete("");
    };

    const openChatRoom = async () => {
        const result = await getMakeRoomsAxios(item.id, token);
        console.log(result);
        dispatch(setEnterChat());
        dispatch(setOpenChat());
        // 추후 교체
        dispatch(setChatId(item.id));
        console.log(chatId);
    };

    return (
        <div className="detail-info-header-area">
            <div className="user-group">
                <img className="user-img" src={customNullImg(userInfo.imageUrl)} alt="user-image" />
                <h2 className="user-name">{userInfo.name}</h2>
                <button className="chat-btn" type="button" onClick={openChatRoom}>
                    채팅하기
                </button>
            </div>
            <div className="action-group">
                <Link to={`/edit/${item.id}`}>
                    <button className="action-btn" onClick={handleEditItem}>
                        <FiEdit className="action-icon" />
                    </button>
                </Link>
                <button className="action-btn" onClick={handleDeleteItem}>
                    <RiDeleteBinLine className="action-icon" />
                </button>
            </div>
        </div>
    );
}
