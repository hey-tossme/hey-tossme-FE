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

export default function CategoryBar({ setItem, setPage, setCategory }: CategoryBarProps) {
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

    const handleGetCategory = (e: React.MouseEvent, idx: number) => {
        setCategory(idx);
        setPage(0);
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

    const categoryProps = [
        { id: "all", name: "전체보기", icon: IoGrid },
        { id: "accommodation", name: "숙박", icon: FaHome },
        { id: "restaurant", name: "레스토랑", icon: MdRestaurant },
        { id: "beauty", name: "미용실", icon: MdFace3 },
        { id: "concert", name: "전시공연", icon: RiGalleryFill },
        { id: "activity", name: "액티비티", icon: MdOutdoorGrill },
        { id: "deadline", name: "마감임박", icon: MdBrowseGallery },
    ];

    return (
        <div className="category-bar-group">
            <ul className="category-bar-list">
                {categoryProps.map((item, index) => (
                    <li
                        className="category-bar-item"
                        key={item.id}
                        onClick={(e) => handleGetCategory(e, index)}
                    >
                        <item.icon className="item-icon" />
                        <span className="item-text">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
