import React from "react";
import { requestLogout } from "../../api/auth/auth";
import { useAppSelector } from "../../store/configureStore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderButtonProps } from "./_Header.interface";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { resetList } from "../../store/modules/notify";

export default function HeaderButton({ text, filled }: HeaderButtonProps) {
    const id = useAppSelector((state: any) => state.user.id);
    const token = useAppSelector((state: any) => state.user.token);
    const [typeUrl, setTypeUrl] = useState<string>();
    const dispatch = useAppDispatch();

    const BUTTON_TYPE = {
        login: "/login",
        signup: "/signup",
        mypage: "/mypage",
        logout: "/",
    };

    const handleLogout = () => {
        if (text === "로그아웃") {
            requestLogout(token, id);
            dispatch(resetList());
        } else return;
    };

    useEffect(() => {
        if (text === "로그인") setTypeUrl(BUTTON_TYPE.login);
        if (text === "회원가입") setTypeUrl(BUTTON_TYPE.signup);
        if (text === "마이페이지") setTypeUrl(BUTTON_TYPE.mypage);
        if (text === "로그아웃") setTypeUrl(BUTTON_TYPE.logout);
    }, [text]);

    return (
        <Link to={typeUrl ? typeUrl : "/"}>
            <button
                className={filled ? "header-btn btn-fill" : "header-btn btn-not-fill"}
                onClick={handleLogout}
            >
                {text}
            </button>
        </Link>
    );
}
