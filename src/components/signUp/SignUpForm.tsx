import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import VerificationCodeBox from "./VerificationCodeBox";
import CodeConfirmModal from "../@common/modal/CodeConfirmModal";
import ModalPortal from "../@common/modal/portal/ModalPortal";
import { setModalOpen } from "../../store/modules/modal";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineIdentification } from "react-icons/hi";
import { removeWhitespace, validateEmail, validatePassword } from "../../hooks/regex";
import { requestSignUp, sendEmail, mailValidate } from "../../api/auth/auth";

export default function SignUpForm() {
    const modalOpen = useSelector((state: any) => state.modal.modalOpen);
    const dispatch = useDispatch();
    const [codeActive, setCodeActive] = useState<boolean>(false);
    const [confirm, setConfirm] = useState<boolean>(false);
    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
    const [registerUserName, setRegisterUserName] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleChangeEmail = (email: string) => {
        const changedEmail = removeWhitespace(email);
        setRegisterEmail(changedEmail);
        setErrorMessage(validateEmail(changedEmail) ? "" : "이메일을 확인해 주세요.");
    };

    const handleChangePassword = useCallback(
        (password: string) => {
            const changedPassword = removeWhitespace(password);
            setRegisterPassword(changedPassword);
            setErrorMessage(
                validatePassword(changedPassword)
                    ? ""
                    : "문자와 숫자 조합으로 8글자 이상 입력해 주세요."
            );
        },
        [registerPassword]
    );

    const handleChangeUserName = (name: string) => {
        const userName = removeWhitespace(name);
        setRegisterUserName(userName);
        setErrorMessage(userName === "" ? "이름을 입력해 주세요." : "");
    };

    const onChangePasswordConfirm = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const passwordConfirmCurrent = e.target.value;
            setPasswordConfirm(passwordConfirmCurrent);
            if (registerPassword === passwordConfirmCurrent) {
                setErrorMessage("");
                setIsPasswordConfirm(true);
            } else {
                setErrorMessage("비밀번호가 일치하지 않습니다.");
                setIsPasswordConfirm(false);
            }
        },
        [registerPassword]
    );

    const showModal = () => {
        dispatch(setModalOpen());
        setCodeActive(true);
    };

    useEffect(() => {
        setDisabled(
            !(registerEmail && registerPassword && registerUserName && !errorMessage && confirm)
        );
    }, [registerEmail, registerPassword, registerUserName, errorMessage, confirm]);

    const registerSignUp = () => {
        requestSignUp(registerEmail, registerPassword, registerUserName);
    };

    const sendRegisterEmail = () => {
        sendEmail(registerEmail);
        showModal();
    };

    return (
        <div className="sign-up-form-container">
            <div className="sign-up-form-wrapper">
                <div className="sign-up-form-inner">
                    <div className="sign-up-form-right">
                        {errorMessage ? (
                            <div className="error-msg-area">
                                <div className="error-msg-content">{errorMessage}</div>
                            </div>
                        ) : null}
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
                                    onClick={sendRegisterEmail}
                                    disabled={!validateEmail(registerEmail)}
                                >
                                    인증
                                </button>
                            )}
                        </div>
                        {confirm ? null : (
                            <>
                                {codeActive ? (
                                    <VerificationCodeBox
                                        confirm={confirm}
                                        setConfirm={setConfirm}
                                        showModal={showModal}
                                        registerEmail={registerEmail}
                                        defaultEvent={sendEmail}
                                        confirmCode={mailValidate}
                                    />
                                ) : null}
                            </>
                        )}
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
                        <div className="name-box">
                            <HiOutlineIdentification className="name-box-icon" />
                            <input
                                type="text"
                                className="name-box-input"
                                placeholder="이름"
                                onChange={(e) => handleChangeUserName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-up-btn-area">
                <Link to="/login">
                    <button className="sign-up-btn" disabled={disabled} onClick={registerSignUp}>
                        가입하기
                    </button>
                </Link>
            </div>
            {modalOpen ? (
                <ModalPortal>
                    <CodeConfirmModal />
                </ModalPortal>
            ) : null}
        </div>
    );
}
