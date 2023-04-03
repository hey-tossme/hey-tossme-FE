import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { calendarContainerProps, renderCustomHeaderProps } from "./_Category.interface";
import { dashDate } from "../../hooks/utils";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setItems } from "../../store/modules/search";

export default function CustomDatepicker() {
    const dispatch = useAppDispatch();
    const [startDate, setStartDate] = useState<Date | null>();

    useEffect(() => {
        setStartDate(null);
    }, []);

    useEffect(() => {
        startDate === null && dispatch(setItems({ endDue: null }));
    }, [startDate]);

    const handleSetPeriod = (date: Date) => {
        setStartDate(date);
        if (date) {
            dispatch(setItems({ startDue: null, endDue: dashDate(date) }));
        }
    };

    return (
        <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            showPopperArrow={false}
            className="item-input pointer"
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
