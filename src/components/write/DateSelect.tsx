import React, { useState, useEffect, useRef } from "react";
import { DateSelectProps } from "./_write.interface";
import CustomDatepicker from "./CustomDatepicker";
import { RxTriangleDown } from "react-icons/rx";
import { validateTime } from "../../hooks/regex";

export default function DateSelect({ date, setDate, time, setTime }: DateSelectProps) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [toggle, setToggle] = useState<string>("오전");
    const [error, setError] = useState<string>();
    const componentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);
    const MORN_AFN_LIST = ["오전", "오후"];

    const handleShowList = () => {
        setIsShow(true);
    };

    const handleSetToggle = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setIsShow(false);
        setToggle(target.innerText);
    };

    const handlePhoneChange = (e: any) => {
        const value = timeRef.current!.value.replace(/\D+/g, "");
        const timeLength = 4;

        let result;
        result = "";

        for (let i = 0; i < value.length && i < timeLength; i++) {
            switch (i) {
                case 2:
                    result += ":";
                    break;

                default:
                    break;
            }

            result += value[i];
        }

        timeRef.current!.value = result;

        setTime(e.target.value);
        setError(validateTime(e.target.value) ? "" : "올바른 시간 양식이 아닙니다.");
    };

    useEffect(() => {
        const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = componentRef.current as HTMLDivElement;
            const inputCurrent = inputRef.current as HTMLInputElement;
            if (
                componentRef.current &&
                !current.contains(e.target as Node) &&
                !inputCurrent.contains(e.target as Node)
            ) {
                setIsShow(false);
            } else setIsShow(true);
        };
        document.addEventListener("mousedown", outsideClick);
        return () => {
            document.removeEventListener("mousedown", outsideClick);
        };
    }, [componentRef]);

    useEffect(() => {
        toggle === "오전" && setTime(`${Number(time?.split("-")[0]) - 12}-${time?.split("-")[1]}`);
        toggle === "오후" && setTime(`${Number(time?.split("-")[0]) + 12}-${time?.split("-")[1]}`);
    }, [toggle]);

    useEffect(() => {
        setTime(null);
    }, []);

    return (
        <>
            <div className="date-select-wrapper">
                <div className="date-select-box">
                    <CustomDatepicker date={date} setDate={setDate} />
                </div>
                <div className="write-info-item mor-afn-toggle-box">
                    <div className="toggle-input-area" onClick={handleShowList}>
                        <input
                            className="toggle-input"
                            type="text"
                            value={toggle}
                            readOnly
                            ref={inputRef}
                            style={{ cursor: "pointer" }}
                        />
                        <RxTriangleDown className="down-btn" />
                    </div>
                    <div className="toggle-list" ref={componentRef}>
                        {isShow &&
                            MORN_AFN_LIST.map((item, index) => {
                                return (
                                    <div
                                        className="toggle-item"
                                        key={index}
                                        onClick={handleSetToggle}
                                    >
                                        {item}
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="write-info-item time-input-box">
                    <input
                        className="time-input-item"
                        type="text"
                        placeholder="00:00"
                        onChange={handlePhoneChange}
                        ref={timeRef}
                    />
                </div>
            </div>
            {error !== "" && <p className="error-message">{error}</p>}
        </>
    );
}
