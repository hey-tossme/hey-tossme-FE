import React, { useEffect, useState } from "react";
import { getNotify } from "../api/notify/notify";
import NotifyContainer from "../components/notify/NotifyContainer";
import { NotifyType } from "../components/notify/_Notify.interface";
import { useAppDispatch, useAppSelector } from "../store/hooks/configureStore.hook";
import { setList } from "../store/modules/notify";
import { isNewNotification } from "../store/modules/notify";

export default function Notify() {
    const [notifyList, setNotifyList] = useState<Array<NotifyType> | null>(null);
    const [newList, setNewList] = useState<Array<NotifyType>>();
    const [existingList, setExistingList] = useState<Array<NotifyType>>();
    const notify = useAppSelector((state) => state.notify.notify);
    const isNew = useAppSelector((state) => state.notify.isNew);
    const token = useAppSelector((state) => state.user.token);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getNotify(token).then((response) => {
            setNotifyList(response.data);
        });
    }, []);

    useEffect(() => {
        dispatch(setList(notifyList));
    }, [notifyList]);

    useEffect(() => {
        if (notify) {
            const newList = notify.filter((item: any) => !item.readOrNot);
            const existingList = notify.filter((item: any) => item.readOrNot);
            setNewList(newList);
            setExistingList(existingList);
        }
    }, [notify]);

    useEffect(() => {
        newList !== undefined && newList.length === 0 && dispatch(isNewNotification(false));
    }, [newList]);

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
