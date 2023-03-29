import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://20.214.139.103:8080",
});

customAxios.interceptors.request.use(
    (config) => {
        //요청을 보내기 전에 수행할 로직
        console.log(config);
        return config;
    },
    (error) => {
        //요청 에러가 발생했을 때 수행할 로직
        console.log(error); //디버깅
        return Promise.reject(error);
    }
);

//응답 인터셉터 추가
customAxios.interceptors.response.use(
    (response) => {
        //응답에 대한 로직 작성
        const res = response.data;
        console.log(res);
        return res;
    },

    (error) => {
        //응답 에러가 발생했을 때 수행할 로직
        console.log(error); //디버깅
        return Promise.reject(error);
    }
);

export default customAxios;
