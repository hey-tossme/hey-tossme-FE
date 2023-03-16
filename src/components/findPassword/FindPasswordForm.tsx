import React, { useState } from "react";
import LogoButton from "../header/LogoButton";
import VerificationCodeBox from "../signUp/VerificationCodeBox";
import CodeConfirmModal from "../signUp/CodeConfirmModal";
import ChangePasswordForm from "./ChangePasswordForm";
import { HiOutlineMail } from "react-icons/hi";
import { removeWhitespace, validateEmail, validatePassword } from "../../hooks/regex";

export default function FindPasswordForm() {
    const [codeActive, setCodeActive] = useState<boolean>(false);
    const [confirm, setConfirm] = useState<boolean>(false);
    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("비밀번호를 변경할 수 있습니다.");
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleChangeEmail = (email: string) => {
        const changedEmail = removeWhitespace(email);
        setRegisterEmail(changedEmail);
    };

    const showModal = () => {
        document.body.style.overflow = "hidden";
        setModalOpen(true);
        setCodeActive(true);
    };

    return (
        <div className="find-pw-form-container">
            <div className="find-pw-form-title">
                <LogoButton />
            </div>
            <div className="find-pw-form-desc">
                {confirm ? <>{errorMessage}</> : "HEYTOSSME에 가입했던 이메일을 입력해 주세요."}
            </div>
            <div className="find-pw-form-wrapper">
                <div className="find-pw-form-inner">
                    <div className="email-box">
                        <HiOutlineMail className="email-box-icon" />
                        <input
                            type="text"
                            className="email-box-input"
                            placeholder="이메일"
                            readOnly={confirm ? true : false}
                            onChange={(e) => handleChangeEmail(e.target.value)}
                        />
                        {codeActive ? null : (
                            <button
                                className="send-email-code"
                                onClick={showModal}
                                disabled={!validateEmail(registerEmail)}
                            >
                                인증
                            </button>
                        )}
                    </div>
                    {confirm ? (
                        <ChangePasswordForm
                            errorMessage={errorMessage}
                            setErrorMessage={setErrorMessage}
                        />
                    ) : (
                        <>
                            {codeActive ? (
                                <VerificationCodeBox
                                    confirm={confirm}
                                    setConfirm={setConfirm}
                                    showModal={showModal}
                                />
                            ) : null}
                        </>
                    )}
                </div>
            </div>
            {modalOpen ? (
                <CodeConfirmModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            ) : null}
        </div>
    );
}
