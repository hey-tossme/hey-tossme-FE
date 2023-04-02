import React, { useEffect } from "react";
import spinner from "../assets/images/loading-icon.gif";
import { requestKakaoLogin } from "../api/auth/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/configureStore.hook";
import { setLogin } from "../store/modules/user";
import { firebaseApp } from "../firebase";

export default function OauthRedirect() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let authorization = new URL(window.location.href).searchParams.get("code");

    const handleKakaoLogin = async (fcmToken: string) => {
        try {
            let result: any =
                authorization && fcmToken && (await requestKakaoLogin(authorization, fcmToken));
            result &&
                dispatch(
                    setLogin({
                        token: `bearer ${result.token}`,
                        id: result.data.id,
                        account: result.data.account,
                    })
                );
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const firebaseMessaging = firebaseApp.messaging();

        firebaseMessaging
            .requestPermission()
            .then(() => {
                return firebaseMessaging.getToken(firebaseMessaging, {
                    vapidKey:
                        "BIniR9YstJOEKxIflD9vEUdGjNi7Z3_h1k5gXduQVNNxq-_i0BH-vTTWGcFRBPmxxA9yhvPRNs9xmVbdBHdeDkE",
                });
            })
            .then(function (token: any) {
                handleKakaoLogin(token);
            })
            .catch(function (error: any) {
                console.log("FCM Error : ", error);
            });
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "200px" }}>
            <img src={spinner} alt="Loading..." />
        </div>
    );
}
