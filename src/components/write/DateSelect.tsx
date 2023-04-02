import React, { useState, useEffect, useRef } from "react";
import { DateSelectProps } from "./_write.interface";
import CustomDatepicker from "./CustomDatepicker";
import { RxTriangleDown } from "react-icons/rx";
import { validateTime } from "../../hooks/regex";

export default function DateSelect({ date, setDate, time, setTime, state }: DateSelectProps) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [toggle, setToggle] = useState<string>();
    const [error, setError] = useState<string>();
    const [defaultTime, setDefaultTime] = useState<string | null>();
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
        if (target.innerText === "오전") {
            const hour = Number(time?.split(":")[0]) - 12;
            setToggle("오전");
            hour < 10
                ? setTime(`0${hour}:${time?.split(":")[1]}`)
                : setTime(`${Number(time?.split(":")[0]) - 12}:${time?.split(":")[1]}`);
        } else {
            setToggle("오후");
            setTime(`${Number(time?.split(":")[0]) + 12}:${time?.split(":")[1]}`);
        }
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
        if (validateTime(e.target.value)) {
            toggle === "오전" && setTime(result);
            toggle === "오후" &&
                setTime(`${Number(result?.split(":")[0]) + 12}:${result?.split(":")[1]}`);
        }
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
        setDefaultTime("00:00");
    }, []);

    useEffect(() => {
        const timeArr = state.item.dueTime.split("T")[1];
        const count = timeArr.split(":").length - 1;
        let result = "";

        if (count == 2) {
            const arr = timeArr.split(":");
            arr.pop();
            result += arr.join(":");
        } else {
            const arr = timeArr.split(":");
            result += arr.join(":");
        }

        if (time === result) {
            setDefaultTime(time);
        } else return;
    }, [time]);

    useEffect(() => {
        const timeCurrent = timeRef.current as HTMLInputElement;
        if (!defaultTime) return;
        if (defaultTime) {
            if (Number(defaultTime.split(":")[0]) < 12) {
                timeCurrent.value = defaultTime.split(":").join(":");
                setToggle("오전");
                setDefaultTime(null);
            } else {
                const timeArr = defaultTime.split(":");
                timeArr[0] = `${Number(timeArr[0]) + 12}`;
                timeCurrent.value = timeArr.join(":");
                setToggle("오후");
                setDefaultTime(null);
            }
        }
    }, [defaultTime]);

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
