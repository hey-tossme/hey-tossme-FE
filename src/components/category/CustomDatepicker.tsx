import React from "react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setSearchData } from "../../store/modules/search";

export default function CustomDatepicker() {
    const [startDate, setStartDate] = useState<Date>();
    const dispatch = useAppDispatch();

    const handleSetPeriod = (date: Date) => {
        setStartDate(date);
        if (date) {
            const year = date.getFullYear();
            const month =
                date.getMonth() + 1 < 10 ? "0" + Number(date.getMonth() + 1) : date.getMonth() + 1;
            const targetDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            dispatch(setSearchData({ duedate: `${year}-${month}-${targetDate}` }));
        }
    };
    return (
        <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            showPopperArrow={false}
            className="item-input"
            isClearable
            placeholderText="예약일자를 선택해주세요."
            selected={startDate}
            onChange={handleSetPeriod}
            calendarContainer={({ className, children }) => {
                return (
                    <div className="mt-[6px] pt-[4px]">
                        <CalendarContainer className={className}>
                            <div style={{ position: "relative" }}>{children}</div>
                        </CalendarContainer>
                    </div>
                );
            }}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <div className="flex gap-[40px] items-center justify-center pt-[12px] pb-[8px]">
                    <div onClick={decreaseMonth}>
                        <MdKeyboardArrowLeft className="relative top-[1px] w-[30px] h-[30px] text-white" />
                    </div>
                    <div className="text-[16px] font-semibold text-white">
                        {getYear(date)}.
                        {getMonth(date) < 9
                            ? "0" + Number(getMonth(date) + 1)
                            : Number(getMonth(date) + 1)}
                    </div>
                    <div onClick={increaseMonth}>
                        <MdKeyboardArrowRight className="relative top-[1px] w-[30px] h-[30px] text-white" />
                    </div>
                </div>
            )}
        />
    );
}
