import React, { useEffect } from "react";
import { MdRestaurant, MdFace3, MdBrowseGallery, MdOutdoorGrill } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { dashDate } from "../../hooks/utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setItems } from "../../store/modules/search";
import { getProductList } from "../../api/product/product";
import { CategoryBarProps } from "./_Category.interface";

export default function CategoryBar({ setItem }: CategoryBarProps) {
    const dispatch = useAppDispatch();
    const searchType: any = useAppSelector((state) => state.search);

    useEffect(() => {
        const allShow = document.querySelector(".category-bar-item");
        const icon = allShow && (allShow.childNodes[0] as HTMLImageElement);
        const text = allShow && (allShow.childNodes[1] as HTMLSpanElement);

        icon && icon.classList.add("active");
        text && text.classList.add("active");

        dispatch(setItems({ category: null, startDue: null, endDue: null }));
    }, []);

    const handleGetCategory = (e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLLIElement;
        const list = document.querySelectorAll(".category-bar-item");
        const icon = target.childNodes[0] as HTMLImageElement;
        const span = target.childNodes[1] as HTMLSpanElement;

        list.forEach((item) => {
            const icon = item.childNodes[0] as HTMLImageElement;
            const text = item.childNodes[1] as HTMLSpanElement;
            icon.classList.remove("active");
            text.classList.remove("active");
        });

        icon.classList.add("active");
        span.classList.add("active");

        if (searchType.startDue) {
            dispatch(setItems({ startDue: null, endDue: null }));
        }

        target.id !== "all" && target.id !== "deadline"
            ? dispatch(setItems({ category: target.id }))
            : dispatch(setItems({ category: null }));

        if (target.id === "deadline") {
            const today = new Date();
            const endDate = new Date(today);

            endDate.setDate(today.getDate() + 3);
            endDate.setHours(0);
            endDate.setMinutes(0);
            dispatch(setItems({ startDue: dashDate(today), endDue: dashDate(endDate) }));
        }
    };

    useEffect(() => {
        getProductList(searchType, 0, 8).then((response) => {
            setItem(response.data.content);
        });
    }, [searchType.category]);

    return (
        <div className="category-bar-group">
            <ul className="category-bar-list">
                <li className="category-bar-item" id="all" onClick={handleGetCategory}>
                    <IoGrid className="item-icon" />
                    <span className="item-text">전체보기</span>
                </li>

                <li className="category-bar-item" id="accommodation" onClick={handleGetCategory}>
                    <FaHome className="item-icon home" />
                    <span className="item-text">숙박</span>
                </li>

                <li className="category-bar-item" id="restaurant" onClick={handleGetCategory}>
                    <MdRestaurant className="item-icon" />
                    <span className="item-text">레스토랑</span>
                </li>

                <li className="category-bar-item" id="beauty" onClick={handleGetCategory}>
                    <MdFace3 className="item-icon beauty" />
                    <span className="item-text">미용실</span>
                </li>

                <li className="category-bar-item" id="concert" onClick={handleGetCategory}>
                    <RiGalleryFill className="item-icon concert" />
                    <span className="item-text">전시공연</span>
                </li>

                <li className="category-bar-item" id="activity" onClick={handleGetCategory}>
                    <MdOutdoorGrill className="item-icon activity" />
                    <span className="item-text">액티비티</span>
                </li>

                <li className="category-bar-item" id="deadline" onClick={handleGetCategory}>
                    <MdBrowseGallery className="item-icon" />
                    <span className="item-text">마감임박</span>
                </li>
            </ul>
        </div>
    );
}
