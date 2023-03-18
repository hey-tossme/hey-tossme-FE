import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import SelectKeyword from "./SelectKeyword";
import SelectLocation from "./selectLocation/SelectLocation";
import SelectPeriod from "./SelectPeriod";
import axios from "axios";
import { setSearchResult } from "../../store/modules/searchResult";

export default function SearchBar() {
    const dispatch = useAppDispatch();
    const searchData = useAppSelector((state) => state.search);

    const handleGetSearchResult = () => {
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
