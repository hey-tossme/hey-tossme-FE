import React, { useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { calendarContainerProps, renderCustomHeaderProps } from "../category/_Category.interface";
import { CustomDatepickerProps } from "./_write.interface";

export default function CustomDatepicker({ date, setDate }: CustomDatepickerProps) {
    const [startDate, setStartDate] = useState<Date | null>();

    const handleSetPeriod = (date: Date) => {
        setStartDate(date);
        if (date) {
            const year = date.getFullYear();
            const month =
                date.getMonth() + 1 < 10 ? "0" + Number(date.getMonth() + 1) : date.getMonth() + 1;
            const targetDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            setDate(`${year}-${month}-${targetDate}`);
        }
    };

    useEffect(() => {
        setStartDate(null);
    }, []);

    return (
        <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            showPopperArrow={false}
            className="write-info-item date-select-item"
            isClearable
            placeholderText="예약일자를 선택해주세요."
            selected={startDate}
            onChange={handleSetPeriod}
            calendarContainer={({ className, children }: calendarContainerProps) => {
                return (
                    <div className="calendar-container">
                        <CalendarContainer className={className}>
                            <div style={{ position: "relative" }}>{children}</div>
                        </CalendarContainer>
                    </div>
                );
            }}
            renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
            }: renderCustomHeaderProps) => (
                <div className="custom-header">
                    <div onClick={decreaseMonth}>
                        <MdKeyboardArrowLeft className="prev-btn" />
                    </div>
                    <div className="current">
                        {getYear(date)}.
                        {getMonth(date) < 9
                            ? "0" + Number(getMonth(date) + 1)
                            : Number(getMonth(date) + 1)}
                    </div>
                    <div onClick={increaseMonth}>
                        <MdKeyboardArrowRight className="next-btn" />
                    </div>
                </div>
            )}
        />
    );
}
