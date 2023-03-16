import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import SelectKeyword from "./SelectKeyword";
import SelectLocation from "./selectLocation/SelectLocation";
import SelectPeriod from "./SelectPeriod";
import axios from "axios";

export default function SearchBar() {
    const searchData = useAppSelector((state) => state.search);

    const handleGetSearchResult = () => {
        console.log(searchData);
        const { category, sido_area, sigun_area, duedate, keyword, deadline } = searchData;

        // 상품 조회 GET API 요청 ...모르겠따
        // axios.get("https://localhost:8080/items",
        // {{region : `${sido_area} ${sigun_area}`, due : duedate, searchTitle : keyword, category : category}})
    };

    return (
        <div className="search-bar-group">
            <div className="search-bar-list">
                <SelectLocation />
                <SelectPeriod />
                <SelectKeyword />
            </div>
            <button onClick={handleGetSearchResult} className="search-btn">
                검색
            </button>
        </div>
    );
}
