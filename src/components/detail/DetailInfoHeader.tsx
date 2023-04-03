import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setOpenChat, setEnterChat, setChatId } from "../../store/modules/chat";
import { detailInfoHeaderProps } from "./_detail.interface";
import { customNullImg } from "../../hooks/utils";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { getMakeRoomsAxios } from "../../api/chat/chat";
import { deleteProduct } from "../../api/product/product";

export default function DetailInfoHeader({ item }: detailInfoHeaderProps) {
    const user = useAppSelector((state) => state.user);
    const token = useAppSelector((state) => state.user.token);
    const chatId = useSelector((state: any) => state.chat.chatId);
    const [userInfo, setUserInfo] = useState({ name: "", imageUrl: "" });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setUserInfo({ name: item.seller.name, imageUrl: item.seller.imageUrl });
    }, [item]);

    const handleGoEdit = () => {
        console.log(item);
        navigate(`/edit/${item.id}`, { state: { item: item } });
    };

    const handleDeleteItem = () => {
        deleteProduct(user.token, item.id);
        navigate("/category");
    };

    const openChatRoom = async () => {
        await getMakeRoomsAxios(item.id, token);
        dispatch(setEnterChat());
        dispatch(setOpenChat());
        dispatch(setChatId(chatId));
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
            {user.id === item.seller.id && (
                <div className="action-group">
                    <button className="action-btn" onClick={handleGoEdit}>
                        <FiEdit className="edit-icon" />
                    </button>

                    <button className="action-btn" onClick={handleDeleteItem}>
                        <RiDeleteBinLine className="delete-icon" />
                    </button>
                </div>
            )}
        </div>
    );
}
