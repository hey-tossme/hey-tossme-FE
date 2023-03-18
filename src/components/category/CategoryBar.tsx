import React from "react";
import { useState, useEffect } from "react";
import { MdRestaurant, MdFace3, MdBrowseGallery, MdOutdoorGrill } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { resetData, setSearchData } from "../../store/modules/search";
import { setSearchResult } from "../../store/modules/searchResult";
import axios from "axios";

export default function CategoryBar() {
    const params = useParams();
    const [currentCategory, setCurrentCategory] = useState<string | null>();
    const dispatch = useAppDispatch();
    const searchData = useAppSelector((state) => state.search);

    useEffect(() => {
        console.log(searchData);
        const { region, category, startDue, endDue, keyword } = searchData;
        const PRODUCTS_URL = "../../../public/data/product.json";

        axios
            .get(PRODUCTS_URL, {
                params: {
                    category: category,
                    region: region,
                    startDue: startDue,
                    endDue: endDue,
                    searchTitle: keyword,
                    size: 8,
                },
            })
            .then((res) => dispatch(setSearchResult(res.data.data)));
    }, [searchData]);

    useEffect(() => {
        setCurrentCategory(params.category);
    }, [params.category]);

    useEffect(() => {
        const inputs = document.querySelectorAll(".item-input");
        inputs.forEach((item) => {
            const input = item as HTMLInputElement;
            input.innerText = "";
        });
        dispatch(resetData());

        currentCategory &&
            dispatch(
                setSearchData({
                    category: currentCategory === "deadline" ? null : currentCategory,
                })
            );

        if (currentCategory === "deadline") {
            const today = new Date();
            const endDate = new Date(today);
            endDate.setDate(today.getDate() + 3);

            const year = today.getFullYear();
            const month =
                today.getMonth() + 1 < 10
                    ? "0" + Number(today.getMonth() + 1)
                    : today.getMonth() + 1;
            const targetDate = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

            const endDateYear = endDate.getFullYear();
            const endDateMonth =
                endDate.getMonth() + 1 < 10
                    ? "0" + Number(endDate.getMonth() + 1)
                    : endDate.getMonth() + 1;
            const endTargetDate =
                endDate.getDate() < 10 ? "0" + endDate.getDate() : endDate.getDate();

            dispatch(
                setSearchData({
                    startDue: `${year}-${month}-${targetDate}`,
                    endDue: `${endDateYear}-${endDateMonth}-${endTargetDate}`,
                })
            );
        }

        const list = document.querySelectorAll("a.tab-menu");
        const target = currentCategory
            ? document.querySelector(`.${currentCategory}-tab`)
            : document.querySelector(".all-tab");

        list.forEach((item) => {
            const icon = item.childNodes[0].childNodes[0] as HTMLImageElement;
            const text = item.childNodes[0].childNodes[1] as HTMLSpanElement;
            icon.classList.remove("active");
            text.classList.remove("active");
        });

        const targetIcon = target?.childNodes[0].childNodes[0] as HTMLImageElement;
        const targetText = target?.childNodes[0].childNodes[1] as HTMLSpanElement;
        targetIcon.classList.add("active");
        targetText.classList.add("active");
    }, [currentCategory]);

    return (
        <div className="category-bar-group">
            <ul className="category-bar-list">
                <Link to="/category" className="tab-menu all-tab">
                    <li className="category-bar-item">
                        <IoGrid className="item-icon" />
                        <span className="item-text">전체보기</span>
                    </li>
                </Link>
                <Link to="/category/accommodation" className="tab-menu accommodation-tab">
                    <li className="category-bar-item">
                        <FaHome className="item-icon home" />
                        <span className="item-text">숙박</span>
                    </li>
                </Link>
                <Link to="/category/restaurant" className="tab-menu restaurant-tab">
                    <li className="category-bar-item">
                        <MdRestaurant className="item-icon" />
                        <span className="item-text">레스토랑</span>
                    </li>
                </Link>
                <Link to="/category/beauty" className="tab-menu beauty-tab">
                    <li className="category-bar-item">
                        <MdFace3 className="item-icon beauty" />
                        <span className="item-text">미용실</span>
                    </li>
                </Link>
                <Link to="/category/concert" className="tab-menu concert-tab">
                    <li className="category-bar-item">
                        <RiGalleryFill className="item-icon concert" />
                        <span className="item-text">전시공연</span>
                    </li>
                </Link>
                <Link to="/category/activity" className="tab-menu activity-tab">
                    <li className="category-bar-item">
                        <MdOutdoorGrill className="item-icon activity" />
                        <span className="item-text">액티비티</span>
                    </li>
                </Link>
                <Link to="/category/deadline" className="tab-menu deadline-tab">
                    <li className="category-bar-item">
                        <MdBrowseGallery className="item-icon" />
                        <span className="item-text">마감임박</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
}
