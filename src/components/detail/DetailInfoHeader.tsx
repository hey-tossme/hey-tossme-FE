import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailInfoProps } from "./_detail.interface";
import { customNullImg } from "../../hooks/utils";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function DetailInfoHeader({ item }: detailInfoProps) {
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

    return (
        <div className="detail-info-header-area">
            <div className="user-group">
                <img className="user-img" src={customNullImg(userInfo.imageUrl)} alt="user-image" />
                <h2 className="user-name">{userInfo.name}</h2>
                <button className="chat-btn" type="button">
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
