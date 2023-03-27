import axios, { AxiosError } from "axios";

export const requestSignUp = async (email: string, password: string, name: string) => {
    const URL = `http://20.196.212.47:8080/members`;
    return await axios
        .post(
            URL,
            {
                email: email,
                name: name,
                password: password,
            },
            { withCredentials: true }
        )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const sendEmail = async (email: string) => {
    const URL = `http://20.196.212.47:8080/mail/send`;
    return await axios
        .post(URL, { email: email }, { withCredentials: true })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestLogin = async (email: string, password: string) => {
    const URL = `http://20.196.212.47:8080/members/signIn`;
    return await axios
        .post(URL, { email: email, password: password }, { withCredentials: true })
        .then((response) => {
            const res = response.data;
            localStorage.setItem("token", `bearer ${res.token}`);
            console.log(res);
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestKakaoLogin = async (code: string) => {
    const URL = `http://20.196.212.47:8080/kakao/login?code=${code}`;
    return await axios
        .get(URL, { withCredentials: true })
        .then((response) => {
            const res = response.data;
            localStorage.setItem("token", `bearer ${res.token}`);
            console.log(res);
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
};
