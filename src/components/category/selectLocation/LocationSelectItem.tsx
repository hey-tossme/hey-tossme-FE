import React from "react";
import { useEffect } from "react";
import { LocationSelectItemProps } from "../_Category.interface";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/configureStore.hook";
import { setItems } from "../../../store/modules/search";

export default function LocationSelectItem({ region, sigun }: LocationSelectItemProps) {
    const dispatch = useAppDispatch();

    const handleSetLocation = () => {
        const locationSelectBox = document.querySelector(".location-select-area") as HTMLDivElement;
        const locationInput = document.querySelector(".location-input") as HTMLInputElement;
        const secondList = document.querySelectorAll(".second");
        secondList.forEach((item) => {
            const target = item as HTMLDivElement;
            target.style.display = "none";
        });

        locationSelectBox.style.display = "none";
        locationInput.value = `${region} ${sigun}`;

        dispatch(setItems({ region: `${region} ${sigun}` }));
    };

    return (
        <div className="location-item" onClick={handleSetLocation}>
            {sigun}
            <span className="select-text">선택</span>
        </div>
    );
}
