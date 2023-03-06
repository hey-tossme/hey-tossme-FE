import React from "react";
import { useState, useEffect } from "react";
import HeaderButton from "./HeaderButton";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

export function InfoContainer() {
    const [dark, setDark] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        console.log(dark);
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

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

    return (
        <div className="info-container">
            {isLogin && (
                <Link to="/notification">
                    <FaRegBell
                        size="32px"
                        color={!dark ? "#333333" : "#ffffff"}
                    />
                </Link>
            )}
            <div className="cursor-pointer" onClick={handleToggleDarkMode}>
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
