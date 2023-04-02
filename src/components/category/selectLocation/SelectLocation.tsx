import React from "react";
import { useRef, useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import LocationItem from "./LocationItem";
import { IoCloseCircleSharp } from "react-icons/io5";
import { getLocationList } from "../../../api/product/location";
import { useAppSelector, useAppDispatch } from "../../../store/hooks/configureStore.hook";
import { setItems } from "../../../store/modules/search";

export default function SelectLocation() {
    const componentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const [isShow, setIsShow] = useState<boolean>();
    const [locationList, setLocationList] = useState<any>();
    const searchType = useAppSelector((state) => state.search);
    const dispatch = useAppDispatch();
    const sidoList = locationList && Object.keys(locationList);

    useEffect(() => {
        getLocationList().then((response) => {
            setLocationList(response.data);
        });
    }, []);

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

    const handleDeleteLocationState = () => {
        const locationInput = document.querySelector(".location-input") as HTMLInputElement;
        locationInput.value = "";

        dispatch(setItems({ region: null }));
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
            {searchType.region && (
                <IoCloseCircleSharp className="close-btn" onClick={handleDeleteLocationState} />
            )}
            {isShow && (
                <div ref={componentRef} className="location-select-area">
                    <div className="location-list">
                        {sidoList.map((item: string, index: number) => {
                            return (
                                <LocationItem
                                    key={index}
                                    region={item}
                                    locationList={locationList}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
