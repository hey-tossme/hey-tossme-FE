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
    const MORN_AFN_LIST = ["오전", "오후"];

    const handleShowList = () => {
        setIsShow(true);
    };

    const handleSetToggle = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setIsShow(false);
        setToggle(target.innerText);
    };

    const handleSetTime = (e: React.FocusEvent) => {
        const target = e.target as HTMLInputElement;
        const toggleInput = inputRef.current as HTMLInputElement;

        if (validateTime(target.value)) {
            setError("");
            const input = target.value;
            const hour = input && input.split(":")[0];
            const min = input && input.split(":")[1];

            if (toggleInput.value === "오후") {
                if (Number(hour) === 12) {
                    setTime(`${Number(hour)}-${min}`);
                } else {
                    setTime(`${Number(hour) + 12}-${min}`);
                }
            } else if (toggleInput.value === "오전") {
                if (Number(hour) === 12) {
                    setTime(`00-${min}`);
                } else {
                    setTime(`${Number(hour)}-${min}`);
                }
            }
        } else {
            target.value !== "" && setError("00:00 형식에 맞게 다시 입력해 주세요.");
            target.value = "";
            setTime(null);
        }
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
                    <div className="toggle-input-area">
                        <input
                            className="toggle-input"
                            type="text"
                            value={toggle}
                            readOnly
                            onClick={handleShowList}
                            ref={inputRef}
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
                        onBlur={handleSetTime}
                    />
                </div>
            </div>
            {error !== "" && <p className="error-message">{error}</p>}
        </>
    );
}
