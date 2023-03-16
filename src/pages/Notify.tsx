import React, { useEffect, useState } from "react";
import NotifyContainer from "../components/notify/NotifyContainer";
import { NotifyType } from "../components/notify/Notify.interface";
import { useAppDispatch, useAppSelector } from "../store/hooks/configureStore.hook";

export default function Notify() {
    const [newList, setNewList] = useState<Array<NotifyType>>();
    const [existingList, setExistingList] = useState<Array<NotifyType>>();
    const notify = useAppSelector((state) => state.notify);

    useEffect(() => {
        const newList = notify.filter((item) => !item.readOrNot);
        const existingList = notify.filter((item) => item.readOrNot);
        setNewList(newList);
        setExistingList(existingList);
    }, [notify]);

    console.log(notify);

    return (
        <div className="notify-common-wrapper dark:bg-color-gray-800">
            <div className="notify-wrapper">
                {newList && <NotifyContainer isRead={false} list={newList} />}
                {existingList && <NotifyContainer isRead={true} list={existingList} />}
            </div>
        </div>
    );
}
