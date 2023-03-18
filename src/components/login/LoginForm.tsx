import React from "react";
import { Link } from "react-router-dom";
import LogoButton from "../header/LogoButton";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import kakaoBtn from "../../assets/images/kakao_login_large_narrow.png";

export default function LoginForm() {
    const test = () => {
        alert("이벤트 확인");
    };

    const pressEnterKey = (e: any) => {
        if (e.key === "Enter") {
            test();
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
                            <input type="text" className="email-box-input" placeholder="이메일" />
                        </div>
                        <div className="pw-box">
                            <HiOutlineLockClosed className="pw-box-icon" />
                            <input
                                type="text"
                                className="pw-box-input"
                                placeholder="비밀번호"
                                onKeyDown={pressEnterKey}
                            />
                        </div>
                        <div className="login-form-btn-area">
                            <Link to="/">
                                <button className="login-btn" onClick={test}>
                                    로그인
                                </button>
                            </Link>
                            <Link to="/">
                                <img src={kakaoBtn} alt="카카오로 시작하기" className="kakao-btn" />
                            </Link>
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
