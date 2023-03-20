import React from "react";
import { useRef, useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import LocationItem from "./LocationItem";
import { sidoDataType } from "../_Category.interface";

export default function SelectLocation() {
    const componentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const [isShow, setIsShow] = useState<boolean>();

    const sidoData: Array<sidoDataType> = [
        { id: 1, name: "서울특별시" },
        { id: 2, name: "부산광역시" },
        { id: 3, name: "대구광역시" },
        { id: 4, name: "경기도" },
        { id: 5, name: "경상북도" },
        { id: 6, name: "경상남도" },
    ];

    useEffect(() => {
        const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = componentRef.current as HTMLDivElement;
            const inputCurrent = inputRef.current as HTMLDivElement;
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
        <div ref={inputRef} className="search-bar-item">
            <IoLocationOutline className="item-icon" />
            <input
                className="item-input location-input"
                type="text"
                placeholder="지역을 선택해주세요."
                onClick={handleShowLocationSelectBox}
                readOnly={true}
            />
            {isShow && (
                <div ref={componentRef} className="location-select-area">
                    <div className="location-list">
                        {sidoData.map((item, index) => {
                            return <LocationItem key={index} region={item.name} />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
