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
