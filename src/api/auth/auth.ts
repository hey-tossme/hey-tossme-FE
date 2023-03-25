import axios, { AxiosError } from "axios";

export const requestSignUp = async (
    email: string,
    password: string,
    name: string,
    imageUrl: string | null
) => {
    const URL = `http://192.168.219.102:8080/members`;
    return await axios
        .post(
            URL,
            {
                email: email,
                name: name,
                password: password,
                imageUrl: imageUrl,
                socialType: null,
                account: null,
                bankName: null,
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
