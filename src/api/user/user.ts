import customAxios from "../customAxios";

export const reissueToken = async (userId: number) => {
    return await customAxios({
        method: "get",
        url: `/v2/members/token/re-create/${userId}`,
    });
};

export const deleteUser = (token: string) => {
    customAxios({
        method: "delete",
        url: "/v1/members",
        headers: {
            Authorization: token,
        },
    });
};

export const getCurrentUserInfo = async (token: string) => {
    return await customAxios({
        method: "get",
        url: "/v1/members",
        headers: {
            Authorization: token,
        },
    });
};

export const getKeywords = async (token: string) => {
    return await customAxios({
        method: "get",
        url: "/v1/keywords",
        headers: {
            Authorization: token,
        },
    });
};

export const deleteKeywords = async (token: string, keyword: string) => {
    return await customAxios({
        method: "delete",
        url: `/v1/keywords/${keyword}`,
        headers: {
            Authorization: token,
        },
    });
};

export const postKeywords = async (token: string, keyword: string) => {
    return await customAxios({
        method: "post",
        url: `v1/keywords?keyword=${keyword}`,
        headers: {
            Authorization: token,
        },
    });
};

export const getUserSellItem = async (token: string, pageNum: number, size: number) => {
    return await customAxios({
        method: "get",
        url: `/v1/items/complete/sell?page-num=${pageNum}&size=${size}`,
        headers: {
            Authorization: token,
        },
    });
};

export const getUserBuyItem = async (token: string, pageNum: number, size: number) => {
    return await customAxios({
        method: "get",
        url: `/v1/items/complete/buy?page-num=${pageNum}&size=${size}`,
        headers: {
            Authorization: token,
        },
    });
};

export const changeProfile = async (
    token: string,
    imageUrl: string | null,
    account: string | null,
    bankName: string | null
) => {
    return await customAxios({
        method: "patch",
        url: `/v1/members`,
        headers: {
            Authorization: token,
        },
        data: {
            imageUrl: imageUrl,
            account: account,
            bankName: bankName,
        },
    });
};
