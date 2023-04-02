import customAxios from "../customAxios";

export const requestSignUp = (email: string, password: string, name: string) => {
    customAxios({
        method: "POST",
        url: "/v2/members",
        data: {
            email: email,
            name: name,
            password: password,
        },
    });
};

export const sendEmail = (email: string) => {
    customAxios({
        method: "POST",
        url: "/v2/mail/send",
        data: {
            email: email,
        },
    });
};

export const mailValidate = async (email: string, code: string) => {
    return await customAxios({
        method: "POST",
        url: "/v2/mail/validate",
        data: {
            email: email,
            code: code,
        },
    });
};

export const requestLogin = async (email: string, password: string, fcmToken: string) => {
    return await customAxios({
        method: "POST",
        url: "/v2/members/signin",
        data: {
            email: email,
            password: password,
            fcmToken: fcmToken,
        },
    });
};

export const requestKakaoLogin = async (code: string) => {
    return await customAxios({
        method: "get",
        url: `/v2/kakao/login?code=${code}`,
    });
};

export const requestLogout = async (token: string, userId: number) => {
    return await customAxios({
        method: "post",
        url: `/v2/members/logout/${userId}`,
        headers: {
            Authorization: token,
        },
    });
};

export const requestResetPassword = (email: string) => {
    customAxios({
        method: "post",
        url: `/v2/members/reset-password`,
        data: {
            email: email,
        },
    });
};

export const requestResetCheck = async (email: string, code: string) => {
    return await customAxios({
        method: "post",
        url: `/v2/members/reset-password/check`,
        data: {
            email: email,
            code: code,
        },
    });
};

export const requestChangePassword = async (email: string, password: string) => {
    return await customAxios({
        method: "patch",
        url: `/v2/members/reset-password`,
        data: {
            email: email,
            password: password,
        },
    });
};

export const requestResetPassword = (email: string) => {
    customAxios({
        method: "post",
        url: `/v2/members/reset-password`,
        data: {
            email: email,
        },
    });
};

export const requestResetCheck = async (email: string, code: string) => {
    return await customAxios({
        method: "get",
        url: `/v2/members/reset-password`,
        data: {
            email: email,
            code: code,
        },
    });
};
