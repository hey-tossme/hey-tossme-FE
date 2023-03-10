import React, { useState, useEffect, useRef, useCallback } from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { IConfirmController } from "./SignUp.interface";

export default function VerificationCodeBox({
    confirm,
    setConfirm,
    showModal,
}: IConfirmController) {
    const [code, setCode] = useState<string>("");
    const [active, setActive] = useState<boolean>(true);
    const [minute, setMinute] = useState<number>(2);
    const [second, setSecond] = useState<number>(59);
    const [timer, setTimer] = useState<number>(179);
    const timerId = useRef<any>(null);
    const SIZE = 2;

    const padStart = (nums: number) => {
        return nums.toString().padStart(SIZE, "0");
    };

    const timerReset = () => {
        showModal();
        setTimer(179);
        setActive(true);
    };

    useEffect(() => {
        timerId.current = setInterval(() => {
            setMinute(Math.floor(timer / 60));
            setSecond(timer % 60);
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(timerId.current);
    }, [timer]);

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerId.current);
            setActive(false);
        }
    }, [second]);

    return (
        <>
            <div className="code-box">
                <HiOutlineShieldCheck className="code-box-icon" />
                <input
                    type="text"
                    className="code-box-input"
                    placeholder="인증 코드"
                    onChange={(e) => setCode(e.target.value)}
                    disabled={active ? false : true}
                />
                <div className="code-timer">
                    {active ? `${padStart(minute)} : ${padStart(second)}` : "만료"}
                </div>
                <button className="resend-email-code" onClick={timerReset}>
                    재전송
                </button>
            </div>
            <div className="code-comfirm-box">
                <button
                    className="check-email-code"
                    onClick={() => setConfirm(true)}
                    disabled={code === "" ? true : false}
                >
                    확인
                </button>
            </div>
        </>
    );
}
