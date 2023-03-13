import React, { useEffect, useState } from "react";
import NotifyContainer from "../components/notify/NotifyContainer";
import { NotifyType } from "../components/notify/Notify.interface";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/hooks/configureStore.hook";
import { setList } from "../store/modules/notify";

export default function Notify() {
    const dispatch = useAppDispatch();
    const notify = useAppSelector((state) => state.notify);
    const [notifyList, setNotifyList] = useState<Array<NotifyType>>();
    const [newList, setNewList] = useState<Array<NotifyType>>();
    const [existingList, setExistingList] = useState<Array<NotifyType>>();

    useEffect(() => {
        try {
            axios.get("/data/notification.json").then((res) => {
                setNotifyList(res.data.data);
            });
        } catch (err) {
            console.log("error");
        }
    }, []);

    useEffect(() => {
        if (notifyList) {
            dispatch(setList(notifyList));
        }
    }, [notifyList]);

    useEffect(() => {
        const newList = notify.filter((item) => !item.readOrNot);
        const existingList = notify.filter((item) => item.readOrNot);
        setNewList(newList);
        setExistingList(existingList);
    }, [notify]);

    return (
        <div className="notify-common-wrapper dark:bg-color-gray-800">
            <div className="notify-wrapper">
                {newList && <NotifyContainer isRead={false} list={newList} />}
                {existingList && <NotifyContainer isRead={true} list={existingList} />}
            </div>
        </div>
    );
}
