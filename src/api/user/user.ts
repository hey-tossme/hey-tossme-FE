import customAxios from "../customAxios";
import axios from "axios";

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

// test code
// export const getCurrentUserInfo = async (token: string) => {
//     const URL = `http://20.214.139.103:8080/v1/members`;
//     await axios
//         .get(URL, {
//             headers: {
//                 Authorization: token,
//             },
//             withCredentials: true,
//         })
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };
