import React, { useEffect } from "react";
import spinner from "../assets/images/loading-icon.gif";
import { requestKakaoLogin } from "../api/auth/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/configureStore.hook";
import { setLogin } from "../store/modules/user";

export default function OauthRedirect() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let authorization = new URL(window.location.href).searchParams.get("code");

    const handleKakaoLogin = async () => {
        try {
            let result: any = await requestKakaoLogin(authorization!);
            console.log(result);
            dispatch(
                setLogin({
                    token: `bearer ${result.token}`,
                    id: result.data.id ? result.data.id : "",
                    account: result.data.account,
                })
            );
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleKakaoLogin();
    });

    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "200px" }}>
            <img src={spinner} alt="Loading..." />
        </div>
    );
}
