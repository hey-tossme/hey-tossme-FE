import React from "react";
import { NotifyListProps } from "./Notify.interface";
import NotifyItem from "./NotifyItem";

export default function NotifyList({ isRead, list }: NotifyListProps) {
    return (
        <div className="notify-list">
            {list.length === 0 && (
                <div className="w-[660px] mt-[20px] text-color-gray-800 dark:text-white">
                    알림이 존재하지 않습니다.
                </div>
            )}
            {list.map((item, idx) => {
                return <NotifyItem key={idx} isRead={isRead} item={item} />;
            })}
        </div>
    );
}
