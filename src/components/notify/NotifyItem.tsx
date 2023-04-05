import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import { deleteList, updateReadList } from "../../store/modules/notify";
import { FiX } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { NotifyItemProps } from "./_Notify.interface";
import { deleteNotify, patchNotify } from "../../api/notify/notify";

export default function NotifyItem({ isRead, item }: NotifyItemProps) {
    const deleteBtnRef = useRef<HTMLDivElement>(null);
    const notifyRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const notify = useAppSelector((state) => state.notify);
    const token = useAppSelector((state) => state.user.token);

    useEffect(() => {
        const deleteBtnClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = deleteBtnRef.current as HTMLDivElement;
            if (deleteBtnRef.current && current.contains(e.target as Node)) {
                handleDelete();
            } else {
                const notifyCurrent = notifyRef.current as HTMLDivElement;
                if (notifyCurrent && notifyCurrent.contains(e.target as Node)) {
                    handleRead();
                    navigate(`/detail/${item.itemId}`, { state: { item: item.itemId } });
                }
            }
        };
        document.addEventListener("mousedown", deleteBtnClick);
        return () => {
            document.removeEventListener("mousedown", deleteBtnClick);
        };
    }, [deleteBtnRef, notifyRef]);

    const handleDelete = async () => {
        console.log("dd");
        deleteNotify(token, item.id).then(() => {
            dispatch(deleteList(item));
        });
    };

    const handleRead = async () => {
        patchNotify(token, item.id).then(() => {
            dispatch(updateReadList(item));
        });
    };

    return (
        <div ref={notifyRef} className="notify-item">
            <div ref={deleteBtnRef} onClick={handleDelete} className="delete-btn">
                <FiX className="close-btn" />
            </div>
            <div className="notify-text-group">
                <div className="notify-icon">
                    {!isRead && <FaRegBell className="icon" />}
                    {isRead && <FaRegBell size="20px" color="#A6A6A6" />}
                </div>
                {item.type === "DEAL" && (
                    <p className="notify-text">
                        <span className="title">{item.title}</span>에 대한 거래가 완료되었습니다.
                    </p>
                )}
                {item.type === "BOOKMARK" && (
                    <p className="notify-text">
                        내가 올린 <span className="title">{item.title}</span> 상품이 다른 사용자의
                        위시 리스트에 등록되었습니다.
                    </p>
                )}
                {item.type === "KEYWORD" && (
                    <p className="notify-text">
                        내가 등록한 관심 키워드와 관련된 상품이 게시되었습니다. 지금 확인해 보세요!
                    </p>
                )}
            </div>
        </div>
    );
}
