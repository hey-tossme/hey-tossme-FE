import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderButtonProps } from "./_Header.interface";

export default function HeaderButton({ text, filled }: HeaderButtonProps) {
    const [typeUrl, setTypeUrl] = useState<string>();
    const BUTTON_TYPE = {
        login: "/login",
        signup: "/signup",
        mypage: "/mypage",
        logout: "/",
    };

    useEffect(() => {
        if (text === "로그인") setTypeUrl(BUTTON_TYPE.login);
        if (text === "회원가입") setTypeUrl(BUTTON_TYPE.signup);
        if (text === "마이페이지") setTypeUrl(BUTTON_TYPE.mypage);
        if (text === "로그아웃") setTypeUrl(BUTTON_TYPE.logout);
    }, []);

    return (
        <Link to={typeUrl ? typeUrl : "/"}>
            <button className={filled ? "header-btn btn-fill" : "header-btn btn-not-fill"}>
                {text}
            </button>
        </Link>
    );
}
