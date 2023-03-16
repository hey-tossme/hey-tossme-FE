import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import LocationItem from "./LocationItem";
import { sidoDataType } from "../Category.interface";

export default function SelectLocation() {
    const sidoData: Array<sidoDataType> = [
        { id: 1, name: "서울특별시" },
        { id: 2, name: "부산광역시" },
        { id: 3, name: "대구광역시" },
        { id: 4, name: "경기도" },
        { id: 5, name: "경상북도" },
        { id: 6, name: "경상남도" },
    ];

    const handleShowLocationSelectBox = () => {
        const locationSelectBox = document.querySelector(".location-select-area") as HTMLDivElement;
        const locationList = document.querySelectorAll(".location-item");

        locationSelectBox.style.display = "block";
        locationList.forEach((item) => {
            const locationItem = item as HTMLDivElement;
            locationItem.classList.remove("active");
        });
    };

    return (
        <div className="search-bar-item">
            <IoLocationOutline className="item-icon" />
            <input
                className="item-input location-input"
                type="text"
                placeholder="지역을 선택해주세요."
                onClick={handleShowLocationSelectBox}
                readOnly={true}
            />
            <div className="location-select-area">
                <div className="location-list">
                    {sidoData.map((item, index) => {
                        return <LocationItem key={index} region={item.name} />;
                    })}
                </div>
            </div>
        </div>
    );
}
