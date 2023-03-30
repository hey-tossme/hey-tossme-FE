import axios from "axios";
import { NotifyType } from "../../components/notify/_Notify.interface";

export const getNotify = async (
    setNotifyList: React.Dispatch<React.SetStateAction<Array<NotifyType> | null>>
) => {
    const URL = `http://20.214.139.103:8080/v1/notification`;
    const fakeURL = "../../public/fakeData/notification.json";

    return await axios
        .get(fakeURL, { withCredentials: true })
        .then((response) => {
            setNotifyList(response.data.data);
            return response.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteNotify = async (id: Number) => {
    const URL = `http://20.214.139.103:8080/v1/notification?notification-id=${id}`;
    const fakeURL = "../../public/fakeData/notification.json";

    return await axios
        .delete(fakeURL, { withCredentials: true })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const patchNotify = async (id: Number) => {
    const URL = `http://20.214.139.103:8080/v1/notification-id=${id}`;
    const fakeURL = "../../public/fakeData/notification.json";

    return await axios
        .patch(fakeURL, { readOrNot: true }, { withCredentials: true })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
