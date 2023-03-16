import React from "react";
import { BiTimeFive } from "react-icons/bi";
import CustomDatepicker from "./CustomDatepicker";

export default function SelectPeriod() {
    return (
        <div className="search-bar-item">
            <BiTimeFive className="item-icon" />
            <CustomDatepicker />
        </div>
    );
}
