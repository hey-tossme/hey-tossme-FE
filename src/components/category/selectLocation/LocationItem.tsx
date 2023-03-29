import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { LocationItemProps, sigunDataType } from "../_Category.interface";
import LocationSelectItem from "./LocationSelectItem";

export default function LocationItem({ region, locationList }: LocationItemProps) {
    const sigunList = locationList[region];

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
                {sigunList.map((item: string, index: number) => {
                    return <LocationSelectItem key={index} region={region} sigun={item} />;
                })}
            </div>
        </>
    );
}
