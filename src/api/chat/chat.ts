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

export const deleteRoomsAxios = async (roomId: number, token: string) => {
    return await customAxios({
        method: "delete",
        url: `/v1/chat/rooms/${roomId}`,
        headers: {
            Authorization: token,
        },
    });
};

export const getMsgAxios = async (token: string, roomId: number) => {
    return await customAxios({
        method: "get",
        url: `/v1/chat/${roomId}/messages`,
        headers: {
            Authorization: token,
        },
    });
};

export const sendAccountAxios = async (token: string, itemId: number, userId: number) => {
    return await customAxios({
        method: "post",
        url: `/v1/items/${itemId}/transaction-confirm?buyerId=${userId}`,
        headers: {
            Authorization: token,
        },
    });
};
