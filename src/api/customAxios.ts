import axios, { AxiosInstance } from "axios";
import { reissueToken } from "./user/user";

const customAxios: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: "/api",
});

customAxios.interceptors.request.use(
    (config) => {
        //요청을 보내기 전에 수행할 로직
        console.log(config);
        return config;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                reissueToken();
            }
        }
        console.log(Promise.reject(error));
        return Promise.reject(error);
    }
);

customAxios.interceptors.response.use(
    (response) => {
        //응답에 대한 로직 작성
        const res = response.data;
        console.log(res);
        return res;
    },

    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                reissueToken();
            }
        }
        console.log(Promise.reject(error));
        return Promise.reject(error);
    }
);

export default customAxios;
