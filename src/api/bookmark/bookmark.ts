import customAxios from "../customAxios";

export const setBookmarkState = async (token: string, id: number) => {
    return await customAxios({
        method: "POST",
        url: `/v1/bookmarks`,
        params: {
            itemId: id,
        },
        headers: {
            Authorization: token,
        },
    });
};

export const getBookmarkState = async (token: string, page: Number, size: Number) => {
    return await customAxios({
        method: "GET",
        url: "v1/bookmarks",
        params: {
            pageNum: page,
            size: size,
        },
        headers: {
            Authorization: token,
        },
    });
};

export const deleteBookmarkState = async (token: string, itemId: number) => {
    return await customAxios({
        method: "DELETE",
        url: `v1/bookmarks`,
        headers: {
            Authorization: token,
        },
        params: {
            itemId: itemId,
        },
    });
};
