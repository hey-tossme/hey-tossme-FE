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
        const result = await requestKakaoLogin(authorization!, fcmToken);
        dispatch(
            setLogin({
                token: `bearer ${result.token}`,
                id: result.data.id,
                account: result.data.account,
            })
        );
        navigate("/");
    };

    useEffect(() => {
        const firebaseMessaging = firebaseApp.messaging();

        firebaseMessaging
            .requestPermission()
            .then(() => {
                return firebaseMessaging.getToken({
                    vapidKey: import.meta.env.VITE_FIREBASE_VAPIDKEY,
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
