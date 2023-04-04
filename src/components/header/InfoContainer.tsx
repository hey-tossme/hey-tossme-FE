import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import HeaderButton from "./HeaderButton";
import { firebaseApp } from "../../firebase";
import { getNotify } from "../../api/notify/notify";
import { isNewNotification } from "../../store/modules/notify";

export function InfoContainer() {
    const firebaseMessaging = firebaseApp.messaging();
    const user = useAppSelector((state) => state.user);
    const isNew = useAppSelector((state) => state.notify.isNew);
    const [dark, setDark] = useState<boolean>();
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    firebaseMessaging.onMessage((payload: any) => {
        const title = payload.notification.title;
        const options = {
            body: payload.notification.body,
        };

        console.log("Message received. title : ", title, "options : ", options);
        dispatch(isNewNotification(true));
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

    useEffect(() => {
        getNewNotify();
    }, [isNew]);

    const getNewNotify = () => {
        getNotify(user.token).then((response) => {
            const notify = response.data;
            if (notify.includes((item: any) => item.readOrNot === false)) {
                dispatch(isNewNotification(true));
            }
        });
    };

    const handleGoNotify = () => {
        navigate("/notify");
    };

    const handleToggleDarkMode = () => {
        if (localStorage.getItem("theme") === "dark") {
            localStorage.removeItem("theme");
            document.documentElement.classList.remove("dark");
            setDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDark(true);
        }
    };

    console.log(isNew);

    return (
        <div className="info-container">
            {isLogin && (
                <div className="notify-group">
                    <FaRegBell className="header-icon" onClick={handleGoNotify} />
                    {isNew && <div className="new-notify"></div>}
                </div>
            )}
            <div className="theme-toggle-btn" onClick={handleToggleDarkMode}>
                {!dark ? <FaRegMoon className="header-icon" /> : <FiSun className="header-icon" />}
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
