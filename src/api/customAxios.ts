import axios, { AxiosInstance, AxiosError } from "axios";
import { setLogin, setLogout } from "../store/modules/user";
import { reissueToken } from "./user/user";
import store from "../store/configureStore";

const customAxios: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: "/api",
});

customAxios.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

customAxios.interceptors.response.use(
    (response) => {
        const res = response.data;
        console.log(res);
        return res;
    },

    async (error) => {
        const err = error as AxiosError;

        if (err.response?.status === 401) {
            const data = err.response.data;

            const user = store.getState().user;
            const { token } = await reissueToken(user.id);

            store.dispatch(
                setLogin({
                    token: `bearer ${token}`,
                    id: user.id,
                    account: user.account,
                })
            );

            err.config.headers = {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
            };

            const originalResponse = await axios.request(error.config);
            return originalResponse.data;
        } else if (err.response?.status === 405) {
            alert("인증이 만료되었습니다. 다시 로그인 해 주세요.");
            store.dispatch(setLogout);
        }
        return Promise.reject(error);
    }
);

export default customAxios;
