import React from "react";
import NotifyList from "./NotifyList";
import { NotifyContainerProps } from "./_Notify.interface";

export default function NotifyContainer({ isRead, list }: NotifyContainerProps) {
    return (
        <div className={`notify-container ${isRead ? "existing" : "new"}`}>
            <h1 className="title dark:text-white">{isRead ? "읽은 알림" : "새 알림"}</h1>
            <NotifyList isRead={isRead} list={list} />
        </div>
    );
}
