import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoButton from "../@common/logo/LogoButton";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import OauthKakao from "./OauthKakao";
import { requestLogin } from "../../api/auth/auth";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../store/modules/user";
import { useAppDispatch } from "../../store/configureStore";
import { firebaseApp } from "../../firebase";

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fcmToken, setFcmToken] = useState<string>("");
    const firebaseMessaging = firebaseApp.messaging();

    useEffect(() => {
        firebaseMessaging.requestPermission().then(function () {
            firebaseMessaging
                .getToken({
                    vapidKey: import.meta.env.VITE_FIREBASE_VAPIDKEY,
                })
                .then(function (token: any) {
                    setFcmToken(token);
                    console.log(token);
                })
                .catch(function (error: any) {
                    console.log("FCM Error : ", error);
                });
        });

        firebaseMessaging.onTokenRefresh(function () {
            firebaseMessaging
                .getToken({
                    vapidKey: import.meta.env.VITE_FIREBASE_VAPIDKEY,
                })
                .then(function (token: any) {
                    setFcmToken(token);
                    console.log(token);
                })
                .catch(function (error: any) {
                    console.log("FCM Error : ", error);
                });
        });
    }, []);

    const handleLoginSubmit = async () => {
        try {
            console.log(fcmToken, "test");
            let result: any = await requestLogin(email, password, fcmToken);
            dispatch(
                setLogin({
                    token: `bearer ${result.token}`,
                    id: result.data.id,
                    account: result.data.account,
                })
            );
            navigate("/");
        } catch (error) {
            if (error == 400) {
                alert("확인쓰");
            }
            console.log(error);
        }
    };

    const pressEnterKey = (e: any) => {
        if (e.key === "Enter") {
            handleLoginSubmit();
        }
    };

    return (
        <>
            <div className="login-form-container">
                <div className="login-form-title">
                    <div className="login-form-title-inner">
                        <LogoButton />
                    </div>
                </div>
                <div className="login-form-wrapper">
                    <div className="login-form-inner">
                        <div className="email-box">
                            <HiOutlineMail className="email-box-icon" />
                            <input
                                type="text"
                                className="email-box-input"
                                placeholder="이메일"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="pw-box">
                            <HiOutlineLockClosed className="pw-box-icon" />
                            <input
                                type="password"
                                className="pw-box-input"
                                placeholder="비밀번호"
                                onKeyDown={pressEnterKey}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="login-form-btn-area">
                            <Link to="/">
                                <button className="login-btn" onClick={handleLoginSubmit}>
                                    로그인
                                </button>
                            </Link>
                            <OauthKakao />
                        </div>
                        <div className="login-form-bottom">
                            <Link to="/signup">
                                <div className="go-to-sign-up">회원가입</div>
                            </Link>
                            <Link to="/findpw">
                                <div className="go-to-find-pw">비밀번호 찾기</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
