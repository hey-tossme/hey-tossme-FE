import customAxios from "../customAxios";

export const requestUploadImg = (token: string, frm: FormData) => {
    customAxios({
        method: "POST",
        url: "/v1/image",
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
        },
        data: frm,
    });
};
