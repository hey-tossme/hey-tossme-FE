import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setIsDark } from "../../store/modules/dark";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import HeaderButton from "./HeaderButton";

export function InfoContainer() {
    const dispatch = useAppDispatch();
    const notify = useAppSelector((state) => state.notify);
    const [isRead, setIsRead] = useState<boolean>();
    const [dark, setDark] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    useEffect(() => {
        const newNotify = notify.filter((item) => item.readOrNot === false);
        newNotify && newNotify.length ? setIsRead(false) : setIsRead(true);
    }, [notify]);

    const handleToggleDarkMode = () => {
        if (localStorage.getItem("theme") === "dark") {
            dispatch(setIsDark({ dark: true }));
            localStorage.removeItem("theme");
            document.documentElement.classList.remove("dark");
            setDark(false);
        } else {
            document.documentElement.classList.add("dark");
            dispatch(setIsDark({ dark: false }));
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
                    <HeaderButton text="????????????" filled={false} />
                    <HeaderButton text="?????????" filled={true} />
                </>
            ) : (
                <>
                    <HeaderButton text="???????????????" filled={false} />
                    <HeaderButton text="????????????" filled={true} />
                </>
            )}
        </div>
    );
}
