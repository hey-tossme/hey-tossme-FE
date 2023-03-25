import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import axios from "axios";
import { setList } from "../../store/modules/notify";
import { NotifyType } from "../notify/_Notify.interface";
import { setIsDark } from "../../store/modules/dark";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import HeaderButton from "./HeaderButton";

export function InfoContainer() {
    const dispatch = useAppDispatch();
    const notify = useAppSelector((state) => state.notify);
    const [notifyList, setNotifyList] = useState<Array<NotifyType>>();
    const [isRead, setIsRead] = useState<boolean>();
    const [dark, setDark] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        try {
            axios.get("/fakeData/notification.json").then((res) => {
                setNotifyList(res.data.data);
            });
        } catch (err) {
            console.log("error");
        }

        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    useEffect(() => {
        if (notifyList) {
            dispatch(setList(notifyList));
        }
    }, [notifyList]);

    useEffect(() => {
        const newNotify = notify.filter((item) => item.readOrNot === false);
        newNotify && newNotify.length ? setIsRead(false) : setIsRead(true);
    }, [notify]);

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
                        {!isRead && <div className="new-notify"></div>}
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
