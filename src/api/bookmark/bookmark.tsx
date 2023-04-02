import customAxios from "../customAxios";

export const setBookmarkState = async (token: string, id: number) => {
    return await customAxios({
        method: "POST",
        url: `/v1/bookmarks?itemId=${id}`,
        data: {
            header: {
                Authorization: token,
            },
        },
    });
};

export const getBookmarkList = async (token: string, pageNum: number, size: number) => {
    return await customAxios({
        method: "get",
        url: `v1/bookmarks?pageNum=${pageNum}&size=${size}`,
        data: {
            header: {
                Authorization: token,
            },
        },
    });
};
