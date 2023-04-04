import axios from "axios";
import customAxios from "../customAxios";

export const requestUploadImg = async (token: string, frm: FormData) => {
    return await customAxios({
        method: "POST",
        url: "/v1/image",
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
        },
        data: frm,
    });
};

export const requestUploadItemImg = async (token: string, frm: FormData) => {
    return await customAxios({
        method: "POST",
        url: "/v1/image",
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
        },
        data: frm,
    });
};
