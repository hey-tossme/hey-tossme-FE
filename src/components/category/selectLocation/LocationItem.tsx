import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { LocationItemProps, sigunDataType } from "../_Category.interface";
import LocationSelectItem from "./LocationSelectItem";

export default function LocationItem({ region }: LocationItemProps) {
    const sigunData: Array<sigunDataType> = [
        { id: 1, name: "금정구" },
        { id: 2, name: "동래구" },
        { id: 3, name: "연제구" },
        { id: 4, name: "수영구" },
        { id: 5, name: "남구" },
        { id: 6, name: "중구" },
    ];

    const handleShowSecondList = (e: React.MouseEvent) => {
        const list = document.querySelectorAll(".second");
        list.forEach((item) => {
            const target = item as HTMLDivElement;
            target.style.display = "none";
        });

        const target = e.target as HTMLDivElement;
        const secondTarget = target.nextSibling as HTMLDivElement;
        secondTarget.style.display = "flex";

        const locationList = document.querySelectorAll(".location-item");
        locationList.forEach((item) => {
            const locationItem = item as HTMLDivElement;
            if (locationItem.innerText === region) {
                locationItem.classList.add("active");
            } else {
                locationItem.classList.remove("active");
            }
        });
    };

    return (
        <>
            <div className="location-item" onClick={handleShowSecondList}>
                {region}
                <BsCaretRightFill className="select-btn" />
            </div>
            <div className="location-list second">
                {sigunData.map((item, index) => {
                    return <LocationSelectItem key={index} region={region} sigun={item.name} />;
                })}
            </div>
        </>
    );
}
