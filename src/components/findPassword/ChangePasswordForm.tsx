import React, { useState, useCallback } from "react";
import { requestChangePassword } from "../../api/auth/auth";
import { useNavigate } from "react-router-dom";
import { HiOutlineLockClosed } from "react-icons/hi";
import { removeWhitespace, validatePassword } from "../../hooks/regex";
import { IErrorMsg } from "./_FindPassword.interface";

export default function ChangePasswordForm({
    errorMessage,
    setErrorMessage,
    registerEmail,
}: IErrorMsg) {
    const navigate = useNavigate();
    const [registerPassword, setRegisterPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

    const handleChangePassword = (password: string) => {
        const changedPassword = removeWhitespace(password);
        setRegisterPassword(changedPassword);
        setErrorMessage(
            validatePassword(registerPassword)
                ? "비밀번호를 변경할 수 있습니다."
                : "문자와 숫자 조합으로 8글자 이상 입력해 주세요."
        );
    };

    const onChangePasswordConfirm = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const passwordConfirmCurrent = e.target.value;
            setPasswordConfirm(passwordConfirmCurrent);
            if (registerPassword === passwordConfirmCurrent) {
                setErrorMessage("비밀번호를 변경할 수 있습니다.");
                setIsPasswordConfirm(true);
            } else {
                setErrorMessage("비밀번호가 일치하지 않습니다.");
                setIsPasswordConfirm(false);
            }
        },
        [registerPassword]
    );

    const submitChangePassword = () => {
        requestChangePassword(registerEmail, registerPassword);
        navigate("/login");
    };

    return (
        <>
            <div className="pw-box">
                <HiOutlineLockClosed className="pw-box-icon" />
                <input
                    type="password"
                    className="pw-box-input"
                    placeholder="비밀번호"
                    onChange={(e) => handleChangePassword(e.target.value)}
                />
            </div>
            <div className="pw-recheck-box">
                <HiOutlineLockClosed className="pw-recheck-box-icon" />
                <input
                    type="password"
                    className="pw-recheck-box-input"
                    placeholder="비밀번호 확인"
                    onChange={onChangePasswordConfirm}
                />
            </div>
            <button
                className="confirm-pw-btn"
                disabled={registerPassword === "" || !isPasswordConfirm}
                onClick={submitChangePassword}
            >
                변경하기
            </button>
        </>
    );
}
