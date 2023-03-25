import React from "react";
import kakaoBtn from "../../assets/images/kakao_login_large_narrow.png";

export default function OauthKakao() {
    const CLIENT_ID = import.meta.env.VITE_REST_API_KEY;
    const REDIRECT_URI = "http://localhost:5173/auth/callback/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <a href={KAKAO_AUTH_URL}>
            <img src={kakaoBtn} alt="카카오로 시작하기" className="kakao-btn" />
        </a>
    );
}
