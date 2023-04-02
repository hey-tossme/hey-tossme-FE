import customAxios from "../customAxios";
import { NotifyType } from "../../components/notify/_Notify.interface";

export const getNotify = async (token: string) => {
    return await customAxios({
        method: "GET",
        url: "v1/notification",
        headers: {
            Authorization: token,
        },
    });
};

export const deleteNotify = async (token: string, id: Number) => {
    return await customAxios({
        method: "DELETE",
        url: `v1/notification/${id}`,
        headers: {
            Authorization: token,
        },
        data: {
            notificationId: id,
        },
    });
};

export const patchNotify = async (token: string, id: Number) => {
    return await customAxios({
        method: "PATCH",
        url: `v1/notification/${id}`,
        headers: {
            Authorization: token,
        },
        data: {
            notificationId: id,
            readOrNot: true,
        },
    });
};
