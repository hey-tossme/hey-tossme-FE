import customAxios from "../customAxios";

export const getChatRoomsAxios = async (token: string) => {
    return await customAxios({
        method: "get",
        url: "/v1/chat/rooms",
        headers: {
            Authorization: token,
        },
    });
};

export const getMakeRoomsAxios = async (itemId: number, token: string) => {
    return await customAxios({
        method: "post",
        url: `/v1/chat/rooms?item-id=${itemId}`,
        headers: {
            Authorization: token,
        },
    });
};
