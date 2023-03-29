import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setIsDark } from "../../store/modules/dark";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import HeaderButton from "./HeaderButton";
import { firebaseApp } from "../../firebase";

export function InfoContainer() {
    const firebaseMessaging = firebaseApp.messaging();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const [dark, setDark] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    firebaseMessaging.onMessage((payload: any) => {
        const title = payload.data.title;
        const options = {
            body: payload.data.body,
        };

        console.log("Message received. title : ", title, "options : ", options);
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, options);
        });
    });

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    useEffect(() => {
        !user.token ? setIsLogin(false) : setIsLogin(true);
    }, [user]);

    const handleToggleDarkMode = () => {
        if (localStorage.getItem("theme") === "dark") {
            dispatch(setIsDark({ dark: false }));
            localStorage.removeItem("theme");
            document.documentElement.classList.remove("dark");
            setDark(false);
        } else {
            document.documentElement.classList.add("dark");
            dispatch(setIsDark({ dark: true }));
            localStorage.setItem("theme", "dark");
            setDark(true);
        }
    };

    return (
        <div className="info-container">
            {isLogin && (
                <div className="notify-group">
                    <Link to="/notify">
                        <FaRegBell size="32px" color={!dark ? "#333333" : "#ffffff"} />
                    </Link>
                </div>
            )}
            <div className="theme-toggle-btn cursor-pointer" onClick={handleToggleDarkMode}>
                {!dark ? (
                    <FaRegMoon size="32px" color="#333333" />
                ) : (
                    <FiSun size="32px" color="#ffffff" />
                )}
            </div>
            {!isLogin ? (
                <>
                    <HeaderButton text="회원가입" filled={false} />
                    <HeaderButton text="로그인" filled={true} />
                </>
            ) : (
                <>
                    <HeaderButton text="마이페이지" filled={false} />
                    <HeaderButton text="로그아웃" filled={true} />
                </>
            )}
        </div>
    );
}
