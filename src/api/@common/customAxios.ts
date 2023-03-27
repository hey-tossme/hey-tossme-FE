import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
    baseURL: "http://20.196.212.47:8080",
    headers: {
        Authorization: window.localStorage.getItem("token"),
    },
});
