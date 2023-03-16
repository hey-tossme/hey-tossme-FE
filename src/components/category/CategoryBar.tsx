import React from "react";
import { useState, useEffect } from "react";
import { MdRestaurant, MdFace3, MdBrowseGallery, MdOutdoorGrill } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setSearchData } from "../../store/modules/search";

export default function CategoryBar() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const [currentCategory, setCurrentCategory] = useState<string>();
    const searchData = useAppSelector((state) => state.search);
    const isDark = useAppSelector((state) => state.dark);

    useEffect(() => {
        const { category, sido_area, sigun_area, duedate, keyword, deadline } = searchData;
        console.log(searchData);

        // 상품 조회 GET API 요청
        // 전체보기, 카테고리 분류로 보기, 마감임박된 것만 보기 세개로 나눠야함
        // axios.get("https://localhost:8080/items",
        // {{region : `${sido_area} ${sigun_area}`, due : duedate, searchTitle : keyword, category : category}})
    }, [searchData]);

    useEffect(() => {
        setCurrentCategory(params.category);
    }, [params.category]);

    useEffect(() => {
        currentCategory &&
            dispatch(
                setSearchData({
                    deadline: currentCategory === "deadline" ? true : false,
                    category: currentCategory === "deadline" ? undefined : currentCategory,
                })
            );

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
    }, [currentCategory, isDark]);

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
